# 📝 Feedback Collector

A web-based feedback collection system where users can submit feedback, and selected users can be toggled as admins to view all submissions.

---

## 🚀 Project Overview

**Feedback Collector** is a simple MERN stack web app built as part of an internship assignment. It allows users to:
- Submit feedback via a simple UI.
- Toggle user roles (user ↔ admin).
- Admins can view all submitted posts.

---

## 🧱 Tech Stack

**Frontend**
- React (with Vite)
- Tailwind CSS

**Backend**
- Node.js + Express
- MongoDB (Database)
- Render (Hosting)

**Dev Tools**
- Prettier (for code formatting)
- Nodemon (for auto server reload)

**CI/CD**
- GitHub
- Vercel (Frontend auto-deploy)
- Render (Backend auto-deploy)

---

## 📁 Project Structure

### 📂 Backend (`/Backend`)

```
Backend/
├── src/
│   ├── controllers/         # Logic for admin and user operations
│   ├── db/                  # MongoDB connection logic
│   ├── middlewares/         # Custom middleware (error handling, etc.)
│   ├── models/              # MongoDB schema definitions
│   ├── routes/              # Express routes for users/admins
│   ├── utils/               # Reusable utilities (error, response handlers)
│   ├── app.js               # Express app config
│   ├── constants.js         # App constants
│   └── index.js             # App entry point
├── .env / .env.sample       # Environment variables
```

### 🎨 Frontend (`/Frontend`)

```
Frontend/
├── src/
│   ├── App.jsx              # Root React component
│   ├── main.jsx             # React DOM entry point
│   └── index.css            # Global styles
├── tailwind.config.js       # Tailwind setup
├── vite.config.js           # Vite configuration
├── index.html               # HTML template
```

---

## 🛠️ Setup & Installation

### 🔧 Backend

```bash
cd Backend
npm install         # Installs dependencies
npm install -D nodemon prettier   # Optional dev dependencies
```

- Rename `.env.sample` to `.env` and fill in the required environment variables.

### 🎨 Frontend

```bash
cd Frontend
npm install
```

---

## 🚀 Deployment

- **Frontend**: [Vercel](https://vercel.com/) (auto-deployed from GitHub)
- **Backend**: [Render](https://render.com/) (auto-deployed from GitHub)

No manual deployment steps are needed due to auto-deploy setup.

---

## 📌 Notes

- No authentication is implemented.
- Data is stored using MongoDB.
- Admin functionality is based on a toggle mechanism.

