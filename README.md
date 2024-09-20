# User Management App

This project is a full-stack User Management Application built using **JavaScript**. The front-end is developed with **React**, and the back-end uses **Node.js**, **Express**, and **MongoDB** for the database. This app allows users to perform basic CRUD (Create, Read, Update, Delete) operations.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features
- Create new users
- List all users
- Delete users
- Front-end built with React for user interaction
- Back-end API powered by Node.js, Express, and MongoDB for data management

## Technologies Used
- **Front-End:**
  - React
  - Axios (for HTTP requests)
  
- **Back-End:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose (MongoDB ODM)

## Project Structure
```
user_management/
│
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── server.js
│   ├── package.json
│   └── .env (environment variables)
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── UserForm.js
    │   │   └── UserList.js
    │   ├── App.js
    │   ├── index.js
    ├── public/
    │   ├── index.html
    ├── package.json
    └── .env
```

## Installation
### Prerequisites:
- **Node.js** and **npm** installed
- **MongoDB** installed locally or access to MongoDB Atlas

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/user-management-app.git
cd user-management-app
```

### Step 2: Set Up the Backend
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` folder to store environment variables (e.g., MongoDB URI):
   ```bash
   MONGO_URI=mongodb://localhost:27017/userManagementDB
   PORT=3000
   ```

### Step 3: Set Up the Frontend
1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```

## Running the App

### Step 1: Start MongoDB
Ensure MongoDB is running on your local machine:
```bash
sudo systemctl start mongod
```

### Step 2: Run the Backend Server
Navigate to the `backend` directory and start the Node.js server:
```bash
cd backend
npm run dev
```
The backend will be running on `http://localhost:3000`.

### Step 3: Run the Frontend App
Navigate to the `frontend` directory and start the React development server:
```bash
cd ../frontend
npm start
```
The React app will be running on `http://localhost:3000`.

## API Endpoints
### Create a New User
- **URL:** `/users`
- **Method:** `POST`
- **Description:** Create a new user in the system.

### Get All Users
- **URL:** `/users`
- **Method:** `GET`
- **Description:** Fetch all users from the system.

### Delete a User
- **URL:** `/users/:id`
- **Method:** `DELETE`
- **Description:** Delete a user by their ID.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
