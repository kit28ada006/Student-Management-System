import axios from "axios";
const API = "http://localhost:5000/api/attendance";

export const markAttendance = (data) =>
  axios.post(`${API}/mark`, data);

export const getAttendanceByDate = (date) =>
  axios.get(`${API}/date/${date}`);

export const getAttendanceStats = () =>
  axios.get(`${API}/stats`);

export const getAllAttendance = () =>
  axios.get(`${API}/all`);

export const getStudentAttendance = (studentId) =>
  axios.get(`${API}/student/${studentId}`);
