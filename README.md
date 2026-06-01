# Basic Task Manager

A full-stack Task Management application built with React, Node.js, Express, and MongoDB. The application allows users to securely register, log in, and manage their tasks through a clean and responsive interface.

This project demonstrates backend development concepts such as authentication, authorization, API design, database management, security practices, and frontend integration.

## Live Links

**Frontend:**  
https://basic-task-manager-wdb9.vercel.app/login

**Backend API:**  
https://basic-task-manager-chi.vercel.app/

**Swagger Documentation:**  
https://basic-task-manager-chi.vercel.app/api-docs

**GitHub Repository:**  
https://github.com/Abhishek3561/Basic-Task-Manager

---

## Features

### Authentication & Authorization
- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcryptjs
- Protected Routes
- Role-Based Access Control (User/Admin)

### Task Management
- Create Tasks
- View Tasks
- Update Tasks
- Delete Tasks
- User-Specific Task Access

### Security
- Password Hashing
- JWT-Based Authentication
- Input Validation using express-validator
- Input Sanitization
- Environment Variable Management
- Helmet Security Middleware

### API & Backend
- RESTful API Design
- API Versioning (/api/v1)
- Centralized Error Handling
- Swagger API Documentation
- Modular Project Structure
- Request Logging using Morgan

### Frontend
- React + Vite
- Protected Dashboard
- Authentication Flow
- CRUD Operations for Tasks
- API Integration using Axios
- Success & Error Handling

---

## Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- express-validator
- Swagger

### Deployment
- Vercel (Frontend)
- Vercel (Backend)
- MongoDB Atlas

---

## Project Structure

Basic-Task-Manager
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── swagger
│   │   ├── validators
│   │   └── server.js
│   │
│   ├── .env.example
│   ├── package.json
│   └── vercel.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md

---

## API Endpoints

### Authentication
- POST `/api/v1/auth/register`
- POST `/api/v1/auth/login`

### Tasks
- GET `/api/v1/tasks`
- POST `/api/v1/tasks`
- PUT `/api/v1/tasks/:id`
- DELETE `/api/v1/tasks/:id`

### Admin
- GET `/api/v1/admin/users`
- GET `/api/v1/admin/tasks`
- DELETE `/api/v1/admin/tasks/:id`

---

## Local Setup

### Clone Repository
```bash
git clone https://github.com/Abhishek3561/Basic-Task-Manager.git
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Assignment Requirements Covered

### Backend

* User Registration & Login APIs
* Password Hashing
* JWT Authentication
* Role-Based Access Control
* CRUD APIs for Tasks
* API Versioning
* Error Handling
* Validation & Sanitization
* Swagger Documentation
* MongoDB Database Integration

### Frontend

* React-Based UI
* Authentication Screens
* Protected Dashboard
* CRUD Operations
* API Integration
* Error & Success Messages

### Security & Scalability

* Secure Password Storage
* JWT Authentication
* Input Validation
* Input Sanitization
* Modular Architecture
* Deployment Ready Structure
* Logging Middleware

---

## What I Learned

Through this project, I gained practical experience with:

* Building REST APIs using Express.js
* Working with MongoDB and Mongoose
* Implementing JWT Authentication
* Securing applications with hashing and validation
* Connecting React applications with backend APIs
* Deploying full-stack applications on Vercel
* Organizing scalable backend architectures

---

## Future Improvements

* Task Priorities
* Due Dates
* Search & Filtering
* Pagination
* Password Reset
* Email Verification
* Dark Mode
* Real-Time Updates

---

## Author

**Abhishek Tyagi**

GitHub: https://github.com/Abhishek3561



---