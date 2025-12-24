export default function StudentForm({ form, setForm, onSubmit }) {
  return (
    <div className="card mb-4">
      <div className="card-header fw-bold">Add New Student</div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <input className="form-control mb-2" placeholder="Student Name" required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="col-md-6">
            <input className="form-control mb-2" placeholder="Roll Number" required
              value={form.rollNumber}
              onChange={e => setForm({ ...form, rollNumber: e.target.value })} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <input className="form-control mb-2" placeholder="Class" required
              value={form.className}
              onChange={e => setForm({ ...form, className: e.target.value })} />
          </div>
          <div className="col-md-6">
            <input className="form-control mb-2" placeholder="Department"
              value={form.department || ''}
              onChange={e => setForm({ ...form, department: e.target.value })} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <input className="form-control mb-2" placeholder="Email" type="email"
              value={form.email || ''}
              onChange={e => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="col-md-6">
            <input className="form-control mb-3" placeholder="Phone"
              value={form.phone || ''}
              onChange={e => setForm({ ...form, phone: e.target.value })} />
          </div>
        </div>

        <button className="btn btn-success w-100" onClick={onSubmit}>
          Add Student
        </button>
      </div>
    </div>
  );
}
