# System Configuration

## Environment Variables (Optional)

You can create a `.env` file in the backend directory for configuration:

```env
# Backend Environment Variables
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/attendanceDB
NODE_ENV=development
```

## Default Configuration

The system is configured with the following defaults:

### Backend
- **Port:** 5000
- **Database:** MongoDB (localhost:27017)
- **Database Name:** attendanceDB
- **CORS:** Enabled for all origins

### Frontend
- **Port:** 5173 (Vite default)
- **API Base URL:** http://localhost:5000
- **Framework:** React 19 with Vite

## MongoDB Database

### Collections
1. **students** - Stores student information
2. **attendances** - Stores attendance records

### Indexes
- Student rollNumber: Unique index
- Attendance date + studentId: Composite for fast queries

## API Routes Summary

### Student Routes (`/api/students`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Get all students |
| GET | /:id | Get student by ID |
| POST | / | Create new student |
| PUT | /:id | Update student |
| DELETE | /:id | Delete student |

### Attendance Routes (`/api/attendance`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /mark | Mark/Update attendance |
| GET | /date/:date | Get attendance by date |
| GET | /student/:studentId | Get student's attendance history |
| GET | /stats | Get today's statistics |
| GET | /all | Get last 100 records |

## Security Notes

⚠️ **This is a basic implementation for educational purposes.**

For production use, consider adding:
- User authentication (JWT)
- Role-based access control
- Input validation and sanitization
- Rate limiting
- HTTPS
- Environment variables for sensitive data
- Database connection pooling
- Error logging
- API documentation (Swagger)

## Performance Optimization

Current optimizations:
- Mongoose populate for efficient joins
- Limited queries (last 100 records)
- Index on unique fields
- Client-side caching of student list

Future improvements:
- Pagination for large datasets
- Caching layer (Redis)
- Database query optimization
- Code splitting on frontend
- Lazy loading of components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)

## Mobile Responsiveness

The system uses Bootstrap 5 and is fully responsive:
- Mobile phones: Single column layout
- Tablets: Adaptive grid
- Desktop: Full multi-column layout
