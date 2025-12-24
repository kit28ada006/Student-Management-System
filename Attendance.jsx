import { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";
import { markAttendance, getAttendanceByDate } from "../services/attendanceService";

export default function Attendance() {
  const [students, setStudents] = useState([]);
  const [date, setDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [markedAttendance, setMarkedAttendance] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getStudents().then(res => setStudents(res.data));
  }, []);

  useEffect(() => {
    if (date) {
      getAttendanceByDate(date).then(res => {
        const marked = {};
        res.data.forEach(record => {
          marked[record.studentId._id] = record.status;
        });
        setMarkedAttendance(marked);
      }).catch(() => {
        setMarkedAttendance({});
      });
    }
  }, [date]);

  const mark = (studentId, status) => {
    setLoading(true);
    markAttendance({ studentId, date, status })
      .then(() => {
        setMarkedAttendance(prev => ({ ...prev, [studentId]: status }));
        setLoading(false);
      })
      .catch(err => {
        alert("Error marking attendance: " + err.message);
        setLoading(false);
      });
  };

  const markAllPresent = () => {
    if (!window.confirm("Mark all students as present?")) return;
    setLoading(true);
    Promise.all(students.map(s => markAttendance({ studentId: s._id, date, status: "Present" })))
      .then(() => {
        const marked = {};
        students.forEach(s => marked[s._id] = "Present");
        setMarkedAttendance(marked);
        setLoading(false);
      })
      .catch(err => {
        alert("Error: " + err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Mark Attendance</h4>
        <button className="btn btn-primary" onClick={markAllPresent} disabled={loading}>
          Mark All Present
        </button>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <label className="form-label fw-bold">Select Date:</label>
          <input type="date" className="form-control"
            value={date}
            onChange={e => setDate(e.target.value)} />
        </div>
      </div>

      {students.length === 0 ? (
        <div className="alert alert-info">No students found. Please add students first.</div>
      ) : (
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Class</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, idx) => (
              <tr key={s._id}>
                <td>{idx + 1}</td>
                <td>{s.name}</td>
                <td>{s.rollNumber}</td>
                <td>{s.className}</td>
                <td>
                  {markedAttendance[s._id] && (
                    <span className={`badge ${markedAttendance[s._id] === "Present" ? "bg-success" : "bg-danger"}`}>
                      {markedAttendance[s._id]}
                    </span>
                  )}
                </td>
                <td>
                  <button className="btn btn-success btn-sm me-2"
                    onClick={() => mark(s._id, "Present")}
                    disabled={loading}>
                    Present
                  </button>
                  <button className="btn btn-danger btn-sm"
                    onClick={() => mark(s._id, "Absent")}
                    disabled={loading}>
                    Absent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
