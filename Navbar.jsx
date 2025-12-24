import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand">
      <div className="container">
        <Link className="navbar-brand" to="/">Attendance</Link>
        <div>
          <Link className="nav-link d-inline text-light me-3" to="/students">Students</Link>
          <Link className="nav-link d-inline text-light me-3" to="/attendance">Attendance</Link>
          <Link className="nav-link d-inline text-light" to="/reports">Reports</Link>
        </div>
      </div>
    </nav>
  );
}
