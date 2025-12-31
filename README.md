# 🍔 Food Delivery App

A modern, full-stack food delivery application built with the **MERN Stack** (MongoDB, Express, React, Node.js).
Features a beautiful UI, smooth animations, user authentication, and a comprehensive admin dashboard.

![Project Banner](https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000)


## ✨ Features

- **🎨 Modern UI/UX**:
  - Glassmorphism design & responsive layout.
  - **AOS Animations** for smooth scroll reveals.
  - Interactive "Chef's Suggestions" section.
- **🔐 Authentication**:
  - Semantic and secure login via **Clerk**.
  - Protected Admin routes.
- **🛒 Shopping Cart**:
  - Application-wide state management for cart operations.
  - Real-time price calculation.
- **👨‍🍳 Admin Dashboard**:
  - **CRUD Operations**: Add, Edit, and Delete food items.
  - Real-time updates with optimistic UI.
  - Image URL support.
- **⚡ Performance**:
  - Optimized with **Vite**.
  - Lazy loading & component code splitting.

## 🛠️ Tech Stack

**Frontend:**
- ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) **React** (Vite)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **Vanilla CSS** (Variables & Animations)
- ![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF) **Clerk Auth**
- ![AOS](https://img.shields.io/badge/AOS-Animation-blue) **AOS Library**

**Backend:**
- ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) **Node.js**
- ![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white) **Express.js**
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) **MongoDB**

## 📸 Screenshots

| Home Page | Admin Dashboard |
|:---:|:---:|
| ![Home](https://via.placeholder.com/400x200?text=Home+Page+Screenshot) | ![Admin](https://via.placeholder.com/400x200?text=Admin+Dashboard+Screenshot) |
| *Smooth Animations & Hero* | *Manage Menu Items* |

| Food Menu | Login Modal |
|:---:|:---:|
| ![Menu](https://via.placeholder.com/400x200?text=Menu+Screenshot) | ![Login](https://via.placeholder.com/400x200?text=Login+Screenshot) |

*(Tip: Upload your screenshots to an `assets` folder or paste them into a GitHub issue to get a URL, then replace these links!)*

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account (for DB URI)
- Clerk account (for Auth Keys)

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/bandarupavankumar/Restaurant-Website.git
   cd Restaurant-Website
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   # Create a .env file in /backend
   # MONGO_URI=your_mongodb_connection_string
   npm start
   ```

3. **Setup Frontend**
   ```bash
   # Open a new terminal root
   npm install
   # Create a .env file in root
   # VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
   # VITE_API_URL=http://localhost:5000
   npm run dev
   ```

## 🌍 Deployment

### Frontend (Vercel)
- Connect repo to Vercel.
- Set Environment Variables:
  - `VITE_API_URL`: Your Render Backend URL.
  - `VITE_CLERK_PUBLISHABLE_KEY`: Your Clerk Key.

### Backend (Render)
- Connect repo to Render.
- Root Directory: `backend`.
- Build Command: `npm install`.
- Start Command: `node server.js`.
- Env Var: `MONGO_URI`.

---
Made with ❤️ by [Pavan Kumar](https://github.com/bandarupavankumar)
