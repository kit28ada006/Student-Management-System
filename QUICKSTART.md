# Quick Start Guide - Attendance Management System

## 🚀 Quick Installation (5 minutes)

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 2: Install Frontend Dependencies
```bash
cd frontend/ams-frontend
npm install
```

**OR** use the root package.json scripts:
```bash
npm run install-all
```

### Step 3: Start MongoDB
Make sure MongoDB is running on your system:

**Windows:**
```bash
net start MongoDB
```

**Linux/Mac:**
```bash
sudo systemctl start mongod
```

### Step 4: Start Backend Server
```bash
cd backend
npm run dev
```
✅ Backend running on http://localhost:5000

### Step 5: Start Frontend (in a new terminal)
```bash
cd frontend/ams-frontend
npm run dev
```
✅ Frontend running on http://localhost:5173

### Step 6: Open in Browser
Navigate to: http://localhost:5173

---

## 📋 First Steps After Installation

1. **Add Students**
   - Go to "Students" page
   - Fill in student details (Name, Roll Number, Class are required)
   - Click "Add Student"

2. **Mark Attendance**
   - Go to "Attendance" page
   - Select today's date (or any date)
   - Click "Present" or "Absent" for each student

3. **View Dashboard**
   - Go to home page
   - See today's statistics
   - Check attendance percentage

4. **Generate Reports**
   - Go to "Reports" page
   - Choose report type (By Date, By Student, or All)
   - Export to CSV if needed

---

## 🔧 Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is installed and running
- Check if port 27017 is available
- Verify connection string in backend/server.js

### Port Already in Use
- Backend (5000): Change port in backend/server.js
- Frontend (5173): Vite will auto-assign another port

### Missing Dependencies
```bash
# Backend
cd backend
npm install

# Frontend
cd frontend/ams-frontend
npm install
```

---

## 📊 System Features

✅ Student Management (Add, View, Delete)
✅ Daily Attendance Marking
✅ Real-time Dashboard Statistics
✅ Attendance Reports (Date, Student, All)
✅ CSV Export
✅ Responsive Bootstrap UI
✅ RESTful API Backend

---

## 🎯 API Testing (Optional)

You can test the API using tools like Postman:

**Backend Base URL:** http://localhost:5000

**Student APIs:**
- GET /api/students - Get all students
- POST /api/students - Add student
- DELETE /api/students/:id - Delete student

**Attendance APIs:**
- POST /api/attendance/mark - Mark attendance
- GET /api/attendance/stats - Get statistics
- GET /api/attendance/date/:date - Get by date

---

## 📱 System Requirements

- Node.js v14 or higher
- MongoDB v4.0 or higher
- Modern web browser (Chrome, Firefox, Edge, Safari)
- 100MB free disk space

---

## 🎓 Default Data

The system starts empty. You need to:
1. Add students first
2. Then mark their attendance
3. Reports will be generated based on attendance data

---

## 💡 Tips

- Use "Mark All Present" button for quick attendance
- Export reports before clearing data
- Roll numbers must be unique
- Attendance can be updated for past dates
- Dashboard shows real-time today's statistics

---

**Enjoy using the Attendance Management System! 🎉**
