# Hobby Hub

**Master's Capstone Project**

A full‑stack platform that connects hobby enthusiasts by enabling community creation, event organization, and seamless user interactions.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- User Authentication (Register, Login, Profile Management)
- Community Management (Create, View, Join Hobby Communities)
- Event Scheduling (Create, Browse, RSVP to Hobby Events)
- Contact Form for Inquiries
- Image Uploads for Profiles and Community Banners
- Responsive UI built with React and Tailwind CSS

## Technologies
- **Frontend:** React, TypeScript, Vite, Redux Toolkit, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt.js, Multer

## Architecture
The application follows a standard client‑server model:
1. **Frontend (React + Vite)** makes HTTP requests to the backend API.
2. **Backend (Express + MongoDB)** handles authentication, business logic, and data persistence.
3. **MongoDB** stores user, community, and event data.

## Getting Started

### Prerequisites
- Node.js (v14 or higher) & npm
- MongoDB (running locally or accessible via a connection string)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hobby-hub.git
   cd hobby-hub
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```
   - By default, the MongoDB URI is set to `mongodb://127.0.0.1:27017/CommunityWebsite` in `config/db.js`.
   - To use a different URI, update the connection string in `config/db.js` or implement a `.env` file and modify the code accordingly.

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### Configuration
- **Backend:**
  - Edit `backend/config/db.js` to point to your MongoDB instance.
- **Frontend:**
  - In `frontend/src/utils/urls.ts`, set `SERVER_PATHNAME` to your backend URL (e.g., `http://localhost:5000`).

### Running the Application

- **Backend**
  ```bash
  cd backend
  npm start
  ```
  The server will run on `http://localhost:5000`.

- **Frontend**
  ```bash
  cd frontend
  npm run dev
  ```
  The client will be available at `http://localhost:5173`.

## Project Structure
```
hobby-hub/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── routes/
│   ├── communityImages/
│   ├── server.js
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    ├── README.md
    └── package.json
```

## API Endpoints
- **Users:** `/api/users` (register, login, profile)
- **Communities:** `/api/community` (create, read, update, delete)
- **Events:** `/api/events` (create, read, update, delete)
- **Contact:** `/api` (submit contact forms)

## Contributing
Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request.

## License
This project is licensed under the MIT License.

