# User Authentication App (Node.js + Express + MongoDB)
This is a simple User Authentication web app using Node.js, Express, MongoDB, and bcrypt. It provides registration and login functionality with password hashing and serves static HTML pages.

## Project Structure

.

├── models/

│   └── user.js

├── public/

│   ├── login.html

│   └── register.html

├── .env

├── index.js

├── package.json

└── README.md

## Features

- User Registration (/register)

- User Login (/login)

- Password hashing with bcrypt

- MongoDB connection with mongoose

- Simple frontend using static HTML

## Setup Instructions
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/auth-app.git
cd auth-app
```
### 2. Install Dependencies
```bash
npm install
```
### 3.  Add a .env File
Create a .env file in the root directory:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=3000
```
  Replace your_mongodb_connection_string with your actual MongoDB URI.
### 4. Run the Application
```bash
node server.js
```
### 5. Visit in Browser

- Registration Page: http://localhost:3000/register

- Login Page: http://localhost:3000/login

## API Endpoints

### POST /register

Register a new user.

Body Parameters:
```bash
{
  "username": "yourname",
  "email": "your@email.com",
  "password": "yourpassword"
}
```

### POST /login

Login with registered email and password.

Body Parameters:
```bash
{
  "email": "your@email.com",
  "password": "yourpassword"
}
```

## ScreenShots
### register
![image](https://github.com/user-attachments/assets/21f38f9c-31ef-4ab4-8565-67bc572f8aae)
### login
![image](https://github.com/user-attachments/assets/d544bbd4-b995-44ad-9110-c614361d37da)

## Tech Stack

- Node.js

- Express.js

- MongoDB & Mongoose

- Bcrypt (for password encryption)

- dotenv

- HTML/CSS

##  Security Note

Passwords are hashed using bcrypt before saving to the database.

For production, consider implementing sessions or JWTs for user authentication.

