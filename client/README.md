# 📝 TaskDo - Task Management Application

<div align="center">

![TaskDo Banner](https://img.shields.io/badge/TaskDo-Task%20Management-8b5cf6?style=for-the-badge)

A modern, full-stack task management application built with React, Express.js, and MongoDB featuring a beautiful dark mode interface with glassmorphism design.

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=vercel)](https://taskdo-app.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/YOUR-USERNAME/taskdo-app)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

</div>

---

## 🌟 Features

### Core Functionality
- ✅ **Create Tasks** - Add new tasks with titles and categories
- ✅ **Update Tasks** - Toggle completion status and edit task details
- ✅ **Delete Tasks** - Remove individual tasks or bulk delete completed ones
- ✅ **Filter Tasks** - View All, Active, or Completed tasks
- ✅ **Category System** - Organize tasks by Work, Personal, Shopping, Health, or Other
- ✅ **Real-time Statistics** - Track total, active, and completed tasks
- ✅ **Persistent Storage** - Data stored in MongoDB cloud database

### UI/UX
- 🌙 **Modern Dark Mode** - Eye-friendly dark theme
- 💎 **Glassmorphism Design** - Beautiful translucent UI elements
- 📱 **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Color-Coded Categories** - Visual distinction for different task types
- ⚡ **Smooth Animations** - Polished user interactions
- 📅 **Smart Date Display** - Shows "Today", "Yesterday", or formatted dates

---

## 🚀 Live Demo

**Frontend:** [https://taskdo-app.vercel.app](https://taskdo-app.vercel.app)

**Backend API:** [https://taskdo-backend.onrender.com](https://taskdo-backend.onrender.com)

**API Health Check:** [https://taskdo-backend.onrender.com/api/health](https://taskdo-backend.onrender.com/api/health)

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Vanilla CSS** - Styling with custom glassmorphism effects
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Deployment
- **Vercel** - Frontend hosting
- **Render** - Backend hosting
- **MongoDB Atlas** - Cloud database

---

## 📁 Project Structure

```
taskdo-app/
│
├── client/                     # Frontend (React + Vite)
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskInput.jsx   # Task creation form
│   │   │   ├── TaskList.jsx    # Task container component
│   │   │   ├── TaskItem.jsx    # Individual task component
│   │   │   └── FilterBar.jsx   # Filter controls
│   │   ├── App.jsx             # Main application component
│   │   ├── App.css             # Application styles
│   │   ├── index.css           # Global styles
│   │   └── main.jsx            # Application entry point
│   ├── .env                    # Frontend environment variables
│   ├── index.html              # HTML template
│   ├── package.json            # Frontend dependencies
│   ├── vite.config.js          # Vite configuration
│   └── vercel.json             # Vercel deployment config
│
├── server/                     # Backend (Node.js + Express)
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js     # MongoDB connection setup
│   │   ├── controllers/        # Route controllers (future)
│   │   ├── models/
│   │   │   └── Task.js         # Mongoose Task schema
│   │   ├── routes/
│   │   │   └── taskRoutes.js   # API route definitions
│   │   └── server.js           # Express server entry point
│   ├── .env                    # Backend environment variables
│   └── package.json            # Backend dependencies
│
├── .gitignore                  # Git ignore rules
├── package.json                # Root package.json (concurrently)
└── README.md                   # Project documentation
```

---

## 🏃‍♂️ Getting Started

### Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** - [Download here](https://git-scm.com/)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/taskdo-app.git
cd taskdo-app
```

#### 2. Install Dependencies

Install all dependencies for root, client, and server:

```bash
npm run install-all
```

Or install manually:

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

#### 3. Environment Configuration

##### Backend Environment Variables

Create `server/.env`:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/taskdo
# OR use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskdo?retryWrites=true&w=majority

# CORS Configuration
CLIENT_URL=http://localhost:5173

# JWT Configuration (for future auth features)
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
```

##### Frontend Environment Variables

Create `client/.env`:

```env
# API Configuration
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=TaskDo
```

#### 4. Setup MongoDB

**Option A: Local MongoDB**

1. Install MongoDB locally - [Installation Guide](https://www.mongodb.com/docs/manual/installation/)
2. Start MongoDB service:
   ```bash
   mongod
   ```

**Option B: MongoDB Atlas (Cloud)**

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create database user with password
4. Whitelist IP address (0.0.0.0/0 for development)
5. Get connection string and update `MONGODB_URI` in `server/.env`

#### 5. Run the Application

From the root directory:

```bash
npm run dev
```

This will start both frontend and backend concurrently:
- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:5000

---

## 📜 Available Scripts

### Root Directory

| Script | Description |
|--------|-------------|
| `npm run dev` | Run both client and server concurrently |
| `npm run client` | Run only frontend development server |
| `npm run server` | Run only backend development server |
| `npm run install-all` | Install dependencies for all folders |
| `npm run build` | Build frontend for production |

### Client Directory

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

### Server Directory

| Script | Description |
|--------|-------------|
| `npm start` | Start server in production mode |
| `npm run dev` | Start server with nodemon (auto-restart) |

---

## 🔌 API Endpoints

### Base URL
- **Development:** `http://localhost:5000`
- **Production:** `https://taskdo-backend.onrender.com`

### Endpoints

#### Get All Tasks
```http
GET /api/tasks
```
**Response:**
```json
{
  "success": true,
  "count": 10,
  "data": [...]
}
```

#### Create New Task
```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Complete project documentation",
  "category": "Work"
}
```

#### Update Task
```http
PUT /api/tasks/:id
Content-Type: application/json

{
  "isCompleted": true
}
```

#### Delete Task
```http
DELETE /api/tasks/:id
```

#### Bulk Delete Completed Tasks
```http
DELETE /api/tasks/completed/all
```

#### Health Check
```http
GET /api/health
```

---

## 🎨 Design System

### Color Palette

```css
/* Dark Mode Theme */
--bg-primary: #0f172a;      /* Main background */
--bg-secondary: #1e293b;    /* Secondary background */
--bg-card: #1e293b;         /* Card background */
--accent: #8b5cf6;          /* Primary accent (purple) */
--accent-hover: #7c3aed;    /* Accent hover state */
--text-primary: #f1f5f9;    /* Primary text */
--text-secondary: #94a3b8;  /* Secondary text */
--border: rgba(139, 92, 246, 0.2);  /* Border color */
--success: #10b981;         /* Success/active state */
--danger: #ef4444;          /* Danger/delete state */
```

### Category Colors

- **Work:** `#3b82f6` (Blue)
- **Personal:** `#8b5cf6` (Purple)
- **Shopping:** `#ec4899` (Pink)
- **Health:** `#10b981` (Green)
- **Other:** `#6b7280` (Gray)

---

## 🚀 Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Import repository to [Vercel](https://vercel.com)
3. Configure:
   - **Framework:** Vite
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add environment variable:
   - `VITE_API_URL` = Your backend URL
5. Deploy

### Backend (Render)

1. Create account on [Render](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Configure:
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add environment variables:
   - `PORT` = 5000
   - `NODE_ENV` = production
   - `MONGODB_URI` = Your MongoDB Atlas connection string
   - `CLIENT_URL` = Your Vercel frontend URL
6. Deploy

### Database (MongoDB Atlas)

1. Create free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create database user
3. Whitelist IP addresses (0.0.0.0/0 for all)
4. Get connection string
5. Update `MONGODB_URI` in backend environment variables

---

## 🧪 Testing

### Manual Testing

1. **Create Task:** Add a new task with different categories
2. **Toggle Completion:** Mark tasks as complete/incomplete
3. **Filter Tasks:** Test All, Active, and Completed filters
4. **Delete Task:** Remove individual tasks
5. **Clear Completed:** Bulk delete all completed tasks
6. **Responsive Design:** Test on mobile, tablet, and desktop

### API Testing with Postman/Thunder Client

Import these requests:

```
GET     http://localhost:5000/api/health
GET     http://localhost:5000/api/tasks
POST    http://localhost:5000/api/tasks
PUT     http://localhost:5000/api/tasks/:id
DELETE  http://localhost:5000/api/tasks/:id
DELETE  http://localhost:5000/api/tasks/completed/all
```

---

## 🐛 Troubleshooting

### Common Issues

#### Backend won't start
- **Issue:** `MongoDB Connection Error: bad auth`
- **Solution:** Check MongoDB connection string and credentials in `.env`

#### Frontend can't connect to backend
- **Issue:** CORS error or network error
- **Solution:** Verify `VITE_API_URL` in `client/.env` matches backend URL

#### Build fails on Vercel
- **Issue:** TypeScript config errors
- **Solution:** Delete all `tsconfig*.json` files and redeploy

#### Tasks not persisting
- **Issue:** MongoDB not connected
- **Solution:** Check MongoDB service is running and connection string is correct

---

## 📈 Future Enhancements

- [ ] User authentication (JWT)
- [ ] Task priority levels (High, Medium, Low)
- [ ] Due dates and reminders
- [ ] Task search functionality
- [ ] Drag-and-drop task reordering
- [ ] Task tags and labels
- [ ] Dark/Light mode toggle
- [ ] Export tasks to PDF/CSV
- [ ] Recurring tasks
- [ ] Task attachments
- [ ] Collaborative task boards
- [ ] Mobile app (React Native)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style
- Write meaningful commit messages
- Test your changes before submitting
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@YOUR-USERNAME](https://github.com/YOUR-USERNAME)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [React](https://react.dev/) - The library for web and native user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework
- [MongoDB](https://www.mongodb.com/) - The application data platform
- [Vercel](https://vercel.com/) - Platform for frontend developers
- [Render](https://render.com/) - Cloud application hosting

---

## 📊 Project Stats

- **Lines of Code:** ~2,000+
- **Components:** 4 React components
- **API Endpoints:** 5 RESTful endpoints
- **Database Models:** 1 Mongoose schema
- **Styling:** 100% Vanilla CSS (no frameworks)

---

## 📸 Screenshots

### Desktop View
![Desktop View](https://via.placeholder.com/800x600/0f172a/8b5cf6?text=TaskDo+Desktop+View)

### Mobile View
![Mobile View](https://via.placeholder.com/400x800/0f172a/8b5cf6?text=TaskDo+Mobile+View)

### Task Management
![Task Management](https://via.placeholder.com/800x600/0f172a/8b5cf6?text=Task+Management)

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing [GitHub Issues](https://github.com/YOUR-USERNAME/taskdo-app/issues)
3. Create a new issue with detailed information

---

<div align="center">

Made with ❤️ by [Your Name](https://github.com/YOUR-USERNAME)

⭐ Star this repository if you found it helpful!

</div>
