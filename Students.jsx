import { useEffect, useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";
import { getStudents, addStudent, deleteStudent } from "../services/studentService";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ 
    name: "", 
    rollNumber: "", 
    className: "",
    email: "",
    phone: "",
    department: ""
  });

  const loadStudents = () =>
    getStudents().then(res => setStudents(res.data));

  useEffect(() => {
    loadStudents();
  }, []);

  const submit = () => {
    if (!form.name || !form.rollNumber || !form.className) {
      alert("Please fill in all required fields");
      return;
    }
    addStudent(form).then(() => {
      setForm({ 
        name: "", 
        rollNumber: "", 
        className: "",
        email: "",
        phone: "",
        department: ""
      });
      loadStudents();
    }).catch(err => {
      alert("Error adding student: " + (err.response?.data?.error || err.message));
    });
  };

  return (
    <>
      <h3 className="mb-3">Student Management</h3>
      <StudentForm form={form} setForm={setForm} onSubmit={submit} />
      <StudentTable students={students} onDelete={(id) =>
        deleteStudent(id).then(loadStudents)
      } />
    </>
  );
}
