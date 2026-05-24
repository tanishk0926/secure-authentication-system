# Secure Authentication System

A secure backend authentication system built using Node.js, Express.js, MongoDB, and JWT authentication. This project implements user authentication with email verification, refresh token rotation, session management, and secure cookie handling.

---

## Features

* User Registration
* User Login
* JWT Authentication
* Access Token & Refresh Token Flow
* Refresh Token Rotation
* Session Management
* Email OTP Verification
* Logout
* Logout From All Devices
* Secure HTTP-Only Cookies
* Password Hashing using SHA256
* Nodemailer Email Service Integration

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* Nodemailer
* Cookie Parser
* Dotenv
* Morgan

---

## Project Structure

```bash
src/
│
├── config/
│   ├── config.js
│   └── database.js
│
├── controllers/
│   └── auth.controller.js
│
├── models/
│   ├── user.model.js
│   ├── session.model.js
│   └── otp.model.js
│
├── routes/
│   └── auth.routes.js
│
├── services/
│   └── email.service.js
│
├── utils/
│   └── utils.js
│
├── app.js
│
server.js
```

---

## API Endpoints

### Authentication Routes

| Method | Endpoint                  | Description             |
| ------ | ------------------------- | ----------------------- |
| POST   | `/api/auth/register`      | Register User           |
| POST   | `/api/auth/login`         | Login User              |
| GET    | `/api/auth/get-me`        | Get Logged In User      |
| GET    | `/api/auth/refresh-token` | Refresh Access Token    |
| GET    | `/api/auth/logout`        | Logout User             |
| GET    | `/api/auth/logout-all`    | Logout From All Devices |
| GET    | `/api/auth/verify-email`  | Verify Email OTP        |

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/secure-authentication-system.git
```

### Move to Project Directory

```bash
cd secure-authentication-system
```

### Install Dependencies

```bash
npm install
```

### Create `.env` File

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_USER=your_email@gmail.com
GOOGLE_APP_PASSWORD=your_google_app_password
```

### Run Development Server

```bash
npm run dev
```

---

## Authentication Flow

1. User registers using email and password
2. OTP is generated and sent through email
3. User verifies OTP
4. User logs in
5. Access token and refresh token are generated
6. Refresh token stored securely in cookies
7. Session stored in database
8. User can refresh tokens without logging in again

---

## Security Features

* Refresh Token Hashing
* Secure Cookies
* Session Tracking
* OTP Verification
* Refresh Token Rotation
* Logout From All Devices
* Password Hashing

---

## Future Improvements

* Use bcrypt instead of SHA256
* Add Rate Limiting
* Add Password Reset Feature
* Add OAuth Authentication
* Add Role-Based Authorization
* Add Redis Session Storage

---
