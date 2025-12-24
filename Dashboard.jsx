import { useEffect, useState } from "react";
import { getAttendanceStats } from "../services/attendanceService";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    presentToday: 0,
    absentToday: 0,
    notMarkedToday: 0
  });

  useEffect(() => {
    getAttendanceStats().then(res => setStats(res.data));
  }, []);

  const StatCard = ({ title, value, color }) => (
    <div className="col-md-3">
      <div className={`card text-white bg-${color} mb-3`}>
        <div className="card-header">{title}</div>
        <div className="card-body">
          <h1 className="card-title">{value}</h1>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="text-center mb-4">
        <h2 className="fw-bold">Attendance Management System</h2>
        <p className="text-muted">
          Manage students and daily attendance easily
        </p>
      </div>

      <div className="row">
        <StatCard title="Total Students" value={stats.totalStudents} color="primary" />
        <StatCard title="Present Today" value={stats.presentToday} color="success" />
        <StatCard title="Absent Today" value={stats.absentToday} color="danger" />
        <StatCard title="Not Marked" value={stats.notMarkedToday} color="warning" />
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header fw-bold">Quick Actions</div>
            <div className="card-body">
              <a href="/attendance" className="btn btn-primary w-100 mb-2">
                Mark Attendance
              </a>
              <a href="/students" className="btn btn-secondary w-100 mb-2">
                Manage Students
              </a>
              <a href="/reports" className="btn btn-info w-100">
                View Reports
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header fw-bold">Today's Overview</div>
            <div className="card-body">
              <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
              <p><strong>Attendance Rate:</strong> {stats.totalStudents > 0 ? Math.round((stats.presentToday / stats.totalStudents) * 100) : 0}%</p>
              <div className="progress">
                <div 
                  className="progress-bar bg-success" 
                  style={{ width: `${stats.totalStudents > 0 ? (stats.presentToday / stats.totalStudents) * 100 : 0}%` }}
                >
                  Present
                </div>
                <div 
                  className="progress-bar bg-danger" 
                  style={{ width: `${stats.totalStudents > 0 ? (stats.absentToday / stats.totalStudents) * 100 : 0}%` }}
                >
                  Absent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
