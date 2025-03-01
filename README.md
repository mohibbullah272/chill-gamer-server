# 🕹️ Chill Gamer - Server
## 📌 Introduction
Chill Gamer is a game review-based platform where users can find honest reviews about specific games and share their thoughts on games they have played. This repository contains the server-side code that powers the backend of the platform.

## 📖 Table of Contents
- Features
- Tech Stack

- API Endpoints
🚀 Features
- ✅ User authentication & authorization (sign-up, login)
- ✅ Game review system (write, edit, delete reviews)
- ✅ Fetch game details & ratings
- ✅ RESTful API for seamless integration

## 🛠️ Tech Stack
- Backend Framework: Express.js
- Database: MongoDB 
- Authentication: JWT 
- Cloud Storage:  Firebase 
 


## 📡 API Endpoints
- Method	Endpoint	Description
- GET	/api/games	Get all games
- GET	/api/games/:id	Get game details
- POST	/api/reviews	Submit a review
- PUT	/api/reviews/:id	Update a review
- DELETE	/api/reviews/:id	Delete a review
- POST	/api/users/signup	Register a new user
- POST	/api/users/login	Authenticate user
