# Basic Task Manager

A simple full-stack Task Manager application built using React, Node.js, Express, and MongoDB.

The goal of this project was to create a secure task management system where users can register, log in, and manage their tasks. Authentication is handled using JWT, and user passwords are securely hashed before being stored in the database.

## Live Demo

**Frontend:** YOUR_FRONTEND_URL

**Backend API:** https://basic-task-manager-chi.vercel.app/

**GitHub Repository:** https://github.com/Abhishek3561/Basic-Task-Manager

---

## Features

* User Registration and Login
* JWT Authentication
* Protected Routes
* Create, Read, Update and Delete Tasks
* MongoDB Database Integration
* Role-Based Access Control
* Swagger API Documentation
* Responsive Frontend built with React

---

## Tech Stack

### Frontend

* React
* Vite
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs

### Deployment

* Vercel
* MongoDB Atlas

---

## Project Structure

```text
Basic-Task-Manager
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   └── swagger
│   │
│   ├── .env.example
│   ├── package.json
│   └── vercel.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── services
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## API Endpoints

### Authentication

```http
POST /api/v1/auth/register
POST /api/v1/auth/login
```

### Tasks

```http
GET    /api/v1/tasks
POST   /api/v1/tasks
PUT    /api/v1/tasks/:id
DELETE /api/v1/tasks/:id
```

### Admin

```http
GET    /api/v1/admin/users
GET    /api/v1/admin/tasks
DELETE /api/v1/admin/tasks/:id
```

---

## Running Locally

### Clone the Repository

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

## What I Learned

While building this project, I gained hands-on experience with:

* Building REST APIs using Express.js
* Working with MongoDB and Mongoose
* Implementing JWT Authentication
* Protecting routes and managing user sessions
* Connecting a React frontend with a Node.js backend
* Deploying full-stack applications on Vercel
* Managing environment variables and project structure

---

## Future Improvements

Some features I would like to add in the future:

* Task priorities
* Due dates
* Search and filtering
* User profile management
* Password reset functionality
* Better UI/UX
* Dark mode support

---

## Author

**Abhishek Tyagi**

GitHub: https://github.com/Abhishek3561

---
