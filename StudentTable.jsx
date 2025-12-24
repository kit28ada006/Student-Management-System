export default function StudentTable({ students, onDelete }) {
  return (
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th>Name</th>
          <th>Roll No</th>
          <th>Class</th>
          <th>Created</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map(s => (
          <tr key={s._id}>
            <td>{s.name}</td>
            <td>{s.rollNumber}</td>
            <td>{s.className}</td>
            <td>{new Date(s.createdAt).toLocaleDateString()}</td>
            <td>
              <button className="btn btn-danger btn-sm"
                onClick={() => onDelete(s._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
