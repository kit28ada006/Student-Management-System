import { useState, useEffect } from "react";
import { getAttendanceByDate, getAllAttendance } from "../services/attendanceService";
import { getStudents } from "../services/studentService";

export default function Reports() {
  const [date, setDate] = useState("");
  const [records, setRecords] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [viewMode, setViewMode] = useState("date"); // date, student, all

  useEffect(() => {
    getStudents().then(res => setStudents(res.data));
  }, []);

  const loadByDate = () => {
    if (!date) return;
    getAttendanceByDate(date).then(res => setRecords(res.data));
  };

  const loadAll = () => {
    getAllAttendance().then(res => setRecords(res.data));
  };

  const loadByStudent = () => {
    if (!selectedStudent) return;
    import("../services/attendanceService").then(({ getStudentAttendance }) => {
      getStudentAttendance(selectedStudent).then(res => setRecords(res.data));
    });
  };

  const exportToCSV = () => {
    if (records.length === 0) return;
    const headers = ["Name", "Roll Number", "Class", "Date", "Status"];
    const rows = records.map(r => [
      r.studentId.name,
      r.studentId.rollNumber,
      r.studentId.className,
      r.date,
      r.status
    ]);
    
    let csvContent = headers.join(",") + "\n";
    rows.forEach(row => {
      csvContent += row.join(",") + "\n";
    });
    
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `attendance-report-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  const calculateStats = () => {
    const present = records.filter(r => r.status === "Present").length;
    const absent = records.filter(r => r.status === "Absent").length;
    return { present, absent, total: present + absent };
  };

  const stats = calculateStats();

  return (
    <>
      <h4 className="mb-3">Attendance Reports</h4>

      <div className="card mb-3">
        <div className="card-body">
          <div className="btn-group mb-3" role="group">
            <button 
              className={`btn ${viewMode === 'date' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setViewMode('date')}
            >
              By Date
            </button>
            <button 
              className={`btn ${viewMode === 'student' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setViewMode('student')}
            >
              By Student
            </button>
            <button 
              className={`btn ${viewMode === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setViewMode('all')}
            >
              All Records
            </button>
          </div>

          {viewMode === 'date' && (
            <div className="row">
              <div className="col-md-8">
                <input type="date" className="form-control"
                  onChange={e => setDate(e.target.value)} />
              </div>
              <div className="col-md-4">
                <button className="btn btn-primary w-100" onClick={loadByDate}>
                  Load Report
                </button>
              </div>
            </div>
          )}

          {viewMode === 'student' && (
            <div className="row">
              <div className="col-md-8">
                <select className="form-select" onChange={e => setSelectedStudent(e.target.value)}>
                  <option value="">Select Student</option>
                  {students.map(s => (
                    <option key={s._id} value={s._id}>{s.name} - {s.rollNumber}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <button className="btn btn-primary w-100" onClick={loadByStudent}>
                  Load Report
                </button>
              </div>
            </div>
          )}

          {viewMode === 'all' && (
            <button className="btn btn-primary" onClick={loadAll}>
              Load All Records (Last 100)
            </button>
          )}
        </div>
      </div>

      {records.length > 0 && (
        <>
          <div className="card mb-3">
            <div className="card-body">
              <div className="row text-center">
                <div className="col-md-3">
                  <h5>Total Records</h5>
                  <h3>{stats.total}</h3>
                </div>
                <div className="col-md-3">
                  <h5 className="text-success">Present</h5>
                  <h3>{stats.present}</h3>
                </div>
                <div className="col-md-3">
                  <h5 className="text-danger">Absent</h5>
                  <h3>{stats.absent}</h3>
                </div>
                <div className="col-md-3">
                  <h5>Attendance %</h5>
                  <h3>{stats.total > 0 ? Math.round((stats.present / stats.total) * 100) : 0}%</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <h5>Records ({records.length})</h5>
            <button className="btn btn-success" onClick={exportToCSV}>
              Export to CSV
            </button>
          </div>
        </>
      )}

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Class</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {records.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center text-muted">No records found</td>
            </tr>
          ) : (
            records.map((r, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{r.studentId.name}</td>
                <td>{r.studentId.rollNumber}</td>
                <td>{r.studentId.className}</td>
                <td>{r.date}</td>
                <td>
                  <span className={`badge ${r.status === "Present" ? "bg-success" : "bg-danger"}`}>
                    {r.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
