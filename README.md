📦 Inventory System — Full Project

This is a simple Inventory Management System built using:

Node.js + Express (Backend API)

React (Basic Setup) (Frontend UI)

Sample in-memory data for demonstration

REST API for products

This project folder contains both:

inventory-system/
│
├── backend/   → Node.js REST API
└── frontend/  → React basic UI (fetches data from backend)

🚀 Features

View product list

Fetch items from backend API

Add new items (backend)

Lightweight and easy to deploy

Beginner–friendly setup

📁 Folder Structure
inventory-system/
│
├── backend/
│   ├── package.json
│   ├── server.js
│
└── frontend/
    ├── package.json
    ├── App.js

🛠️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/inventory-system.git
cd inventory-system

🖥 Backend Setup (Node.js + Express)
2️⃣ Install backend dependencies
cd backend
npm install

3️⃣ Run backend server
npm start


Backend runs at:

http://localhost:5000

API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
POST	/api/products	Add a product
🌐 Frontend Setup (React)

This is a simplified React structure with an App.js file that fetches products from backend.

4️⃣ Move to the frontend folder
cd ../frontend

5️⃣ Install dependencies (if needed)

If you want a full React setup, run:

npx create-react-app .
npm install

6️⃣ Start frontend development server
npm start


Frontend runs at:

http://localhost:3000

🔗 Connecting Frontend ↔ Backend

The frontend fetches data from the backend using:

fetch("http://localhost:5000/api/products")


Make sure your backend is running before starting the frontend.

🚀 Deployment (Optional)
Backend (Render)

Go to https://render.com

Create new Web Service

Select /backend folder

Build command: npm install

Start command: npm start

You will get a URL like:

https://your-backend.onrender.com

Frontend (Netlify or Vercel)

Deploy the frontend folder.

Netlify:

Base directory: frontend

Build command: npm run build

Publish directory: build

Update API URL in App.js:
fetch("https://your-backend.onrender.com/api/products")

📝 Notes

This project uses in-memory data, meaning items reset when server restarts.

For a full production-ready version, ask for:

MongoDB / MySQL database

Full CRUD UI (Add/Edit/Delete)

Admin dashboard UI

Authentication system
