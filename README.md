# Attendance Management System (AMS)

A comprehensive web-based Attendance Management System built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

### 🎯 Core Functionality
- **Student Management**: Add, view, update, and delete student records
- **Attendance Tracking**: Mark daily attendance (Present/Absent) with date selection
- **Reports & Analytics**: Generate attendance reports by date, student, or view all records
- **Dashboard**: Real-time statistics showing today's attendance overview
- **Export Functionality**: Export attendance reports to CSV format

### 📊 Dashboard Statistics
- Total number of students
- Students present today
- Students absent today
- Students not marked for the day
- Attendance percentage with visual progress bar

### 📝 Student Fields
- Name (Required)
- Roll Number (Required, Unique)
- Class (Required)
- Department (Optional)
- Email (Optional)
- Phone (Optional)

## Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Bootstrap 5** - CSS framework
- **Vite** - Build tool

## Project Structure

```
AMS/
├── backend/
│   ├── models/
│   │   ├── Student.js          # Student schema
│   │   └── Attendance.js       # Attendance schema
│   ├── routes/
│   │   ├── studentRoutes.js    # Student CRUD operations
│   │   └── attendanceRoutes.js # Attendance operations
│   ├── server.js               # Express server setup
│   └── package.json
│
└── frontend/
    └── ams-frontend/
        ├── src/
        │   ├── components/
        │   │   ├── Navbar.jsx          # Navigation bar
        │   │   ├── StudentForm.jsx     # Add student form
        │   │   └── StudentTable.jsx    # Student list table
        │   ├── pages/
        │   │   ├── Dashboard.jsx       # Statistics dashboard
        │   │   ├── Students.jsx        # Student management
        │   │   ├── Attendance.jsx      # Mark attendance
        │   │   └── Reports.jsx         # View reports
        │   ├── services/
        │   │   ├── studentService.js   # Student API calls
        │   │   └── attendanceService.js # Attendance API calls
        │   ├── App.jsx                 # Main app component
        │   ├── App.css                 # Custom styles
        │   ├── index.css               # Global styles
        │   └── main.jsx                # App entry point
        └── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (installed and running)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start MongoDB service (if not already running):
```bash
# Windows
net start MongoDB

# Linux/Mac
sudo systemctl start mongod
```

4. Start the backend server:
```bash
npm run dev
# or
npm start
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend/ams-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

## API Endpoints

### Students
- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get a specific student
- `POST /api/students` - Add a new student
- `PUT /api/students/:id` - Update a student
- `DELETE /api/students/:id` - Delete a student

### Attendance
- `POST /api/attendance/mark` - Mark attendance for a student
- `GET /api/attendance/date/:date` - Get attendance by date
- `GET /api/attendance/student/:studentId` - Get attendance history for a student
- `GET /api/attendance/stats` - Get today's attendance statistics
- `GET /api/attendance/all` - Get all attendance records (last 100)

## Usage Guide

### Adding Students
1. Navigate to the "Students" page
2. Fill in the student form (Name, Roll Number, and Class are required)
3. Click "Add Student"

### Marking Attendance
1. Navigate to the "Attendance" page
2. Select the date (defaults to today)
3. Click "Present" or "Absent" for each student
4. Use "Mark All Present" for bulk marking

### Viewing Reports
1. Navigate to the "Reports" page
2. Choose report type:
   - **By Date**: View attendance for a specific date
   - **By Student**: View attendance history for a specific student
   - **All Records**: View recent attendance records
3. Click "Load Report"
4. Export to CSV if needed

### Dashboard Overview
- View real-time statistics
- Check today's attendance percentage
- Quick access links to main features

## Database Schema

### Student Model
```javascript
{
  name: String (required),
  rollNumber: String (required, unique),
  className: String (required),
  email: String,
  phone: String,
  department: String,
  timestamps: true
}
```

### Attendance Model
```javascript
{
  studentId: ObjectId (ref: Student, required),
  date: String (required),
  status: String (enum: ["Present", "Absent"], required),
  timestamps: true
}
```

## Features in Detail

### 1. Student Management
- Add students with comprehensive information
- View all students in a sortable table
- Delete students when needed
- Duplicate roll numbers are prevented

### 2. Attendance Marking
- Date-based attendance marking
- Visual feedback for marked attendance
- Bulk marking option
- Real-time status updates

### 3. Reports & Analytics
- Multiple report views (date, student, all records)
- Statistics calculation (present, absent, percentage)
- CSV export functionality
- Last 100 records view for comprehensive analysis

### 4. Dashboard
- Today's attendance summary
- Visual statistics with color-coded cards
- Attendance rate progress bar
- Quick action buttons

## Development

### Running in Development Mode

Backend:
```bash
cd backend
npm run dev  # Uses nodemon for auto-reload
```

Frontend:
```bash
cd frontend/ams-frontend
npm run dev  # Uses Vite dev server with HMR
```

### Building for Production

Frontend:
```bash
cd frontend/ams-frontend
npm run build
```

The build output will be in the `dist` folder.

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check the connection string in `backend/server.js`
- Default: `mongodb://127.0.0.1:27017/attendanceDB`

### Port Conflicts
- Backend default port: 5000
- Frontend default port: 5173
- Change ports in respective configuration files if needed

### CORS Issues
- Ensure backend CORS is configured correctly
- Check that frontend API URLs point to correct backend address

## Future Enhancements

Potential features for future versions:
- User authentication and role-based access
- Biometric attendance integration
- Email notifications
- Advanced analytics and charts
- Mobile app version
- Attendance percentage tracking over time
- Leave management
- Multiple attendance sessions per day
- Class/batch-wise filtering

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is open source and available for educational purposes.

## Support

For issues or questions, please create an issue in the repository.

---

**Developed with ❤️ using MERN Stack**
