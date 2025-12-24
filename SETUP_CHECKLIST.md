# ✅ Setup Checklist - Attendance Management System

Use this checklist to ensure your system is properly set up and running.

## Prerequisites ✓

- [ ] Node.js installed (v14 or higher)
  ```bash
  node --version
  ```

- [ ] MongoDB installed and accessible
  ```bash
  mongod --version
  ```

- [ ] npm installed
  ```bash
  npm --version
  ```

---

## Installation Steps ✓

### 1. Backend Setup
- [ ] Navigate to backend directory
  ```bash
  cd backend
  ```

- [ ] Install dependencies
  ```bash
  npm install
  ```

- [ ] Verify package.json has dependencies:
  - [ ] express
  - [ ] mongoose
  - [ ] cors
  - [ ] nodemon (devDependency)

### 2. Frontend Setup
- [ ] Navigate to frontend directory
  ```bash
  cd frontend/ams-frontend
  ```

- [ ] Install dependencies
  ```bash
  npm install
  ```

- [ ] Verify package.json has dependencies:
  - [ ] react
  - [ ] react-dom
  - [ ] react-router-dom
  - [ ] axios
  - [ ] bootstrap
  - [ ] vite

---

## Running the Application ✓

### 3. Start MongoDB
- [ ] Start MongoDB service
  
  **Windows:**
  ```bash
  net start MongoDB
  ```
  
  **Linux/Mac:**
  ```bash
  sudo systemctl start mongod
  ```

- [ ] Verify MongoDB is running on port 27017

### 4. Start Backend Server
- [ ] Open terminal in backend directory
- [ ] Run development server
  ```bash
  npm run dev
  ```
- [ ] Verify output shows:
  - [ ] "Server running on port 5000"
  - [ ] "MongoDB Connected"

### 5. Start Frontend Server
- [ ] Open NEW terminal in frontend/ams-frontend directory
- [ ] Run development server
  ```bash
  npm run dev
  ```
- [ ] Verify output shows Vite dev server URL (usually http://localhost:5173)

---

## Testing the Application ✓

### 6. Access the Application
- [ ] Open browser
- [ ] Navigate to http://localhost:5173
- [ ] Verify navbar appears with links:
  - [ ] Attendance (logo/home)
  - [ ] Students
  - [ ] Attendance
  - [ ] Reports

### 7. Test Dashboard
- [ ] Click on home/logo
- [ ] Verify you see:
  - [ ] "Attendance Management System" heading
  - [ ] 4 statistics cards (all showing 0 initially)
  - [ ] Quick Actions card
  - [ ] Today's Overview card

### 8. Test Student Management
- [ ] Click "Students" in navbar
- [ ] Verify form appears with fields:
  - [ ] Student Name
  - [ ] Roll Number
  - [ ] Class
  - [ ] Department
  - [ ] Email
  - [ ] Phone
- [ ] Add a test student:
  - Name: "John Doe"
  - Roll Number: "2024001"
  - Class: "10-A"
- [ ] Click "Add Student"
- [ ] Verify student appears in table below
- [ ] Verify table shows:
  - [ ] Name, Roll No, Class, Created Date, Action (Delete button)

### 9. Test Attendance Marking
- [ ] Click "Attendance" in navbar
- [ ] Verify date selector shows today's date
- [ ] Verify the test student appears in list
- [ ] Click "Present" for the student
- [ ] Verify status badge appears showing "Present"
- [ ] Click "Absent" for the student
- [ ] Verify status badge updates to "Absent"

### 10. Test Reports
- [ ] Click "Reports" in navbar
- [ ] Select "By Date" view
- [ ] Enter today's date
- [ ] Click "Load Report"
- [ ] Verify report shows the attendance you just marked
- [ ] Verify statistics show:
  - [ ] Total Records
  - [ ] Present count
  - [ ] Absent count
  - [ ] Attendance percentage
- [ ] Click "Export to CSV"
- [ ] Verify CSV file downloads

### 11. Test Dashboard Statistics
- [ ] Return to Dashboard (home)
- [ ] Verify statistics have updated:
  - [ ] Total Students: 1
  - [ ] Present/Absent shows your marked attendance
- [ ] Verify attendance rate percentage is displayed
- [ ] Verify progress bar shows attendance distribution

---

## Feature Verification ✓

### Core Features
- [ ] Can add students
- [ ] Can view student list
- [ ] Can delete students
- [ ] Can mark attendance
- [ ] Can view attendance by date
- [ ] Can generate reports
- [ ] Can export to CSV
- [ ] Dashboard shows real-time stats

### Additional Features
- [ ] "Mark All Present" button works
- [ ] Can update attendance (mark again for same date)
- [ ] Roll number uniqueness is enforced
- [ ] Reports can filter by student
- [ ] Reports can show all records
- [ ] Form validation works (required fields)
- [ ] Responsive design works on mobile

---

## Troubleshooting ✓

### If Backend Won't Start:
- [ ] Check MongoDB is running
- [ ] Check port 5000 is not in use
- [ ] Verify all dependencies installed
- [ ] Check for errors in terminal

### If Frontend Won't Start:
- [ ] Check port 5173 is available
- [ ] Verify all dependencies installed
- [ ] Clear node_modules and reinstall
- [ ] Check for errors in terminal

### If API Calls Fail:
- [ ] Verify backend is running on port 5000
- [ ] Check browser console for errors
- [ ] Verify MongoDB connection
- [ ] Check CORS is enabled in backend

### If Data Doesn't Appear:
- [ ] Check MongoDB is running
- [ ] Verify API endpoints are correct
- [ ] Check browser network tab for responses
- [ ] Try refreshing the page

---

## System Health Check ✓

Run these commands to verify everything:

```bash
# Check Node.js
node --version
# Should show v14 or higher

# Check npm
npm --version
# Should show 6.x or higher

# Check MongoDB (when running)
mongo --eval "db.stats()"
# Should show database statistics

# Backend health
curl http://localhost:5000/api/students
# Should return [] or student list

# Frontend health
curl http://localhost:5173
# Should return HTML
```

---

## Success Criteria ✓

Your system is fully operational when:
- [✅] Backend shows "MongoDB Connected"
- [✅] Frontend loads at http://localhost:5173
- [✅] Can add and view students
- [✅] Can mark and view attendance
- [✅] Dashboard shows statistics
- [✅] Reports can be generated and exported
- [✅] All 4 pages are accessible
- [✅] No errors in browser console
- [✅] No errors in terminal

---

## 🎉 Congratulations!

If all checkboxes are complete, your Attendance Management System is fully operational!

**Next Steps:**
- Add more students
- Mark daily attendance
- Generate reports
- Customize the system to your needs

**Need Help?**
- Check README.md for detailed documentation
- Review QUICKSTART.md for installation help
- See CONFIGURATION.md for advanced settings

---

**System Ready: ✅**
**Date Verified: _____________**
**Verified By: _____________**
