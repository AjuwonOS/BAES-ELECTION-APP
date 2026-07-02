# Live Voting Application

## Project Description

The **Live Voting Application** is a secure, full-stack web-based election management platform designed to facilitate online elections. The system enables eligible voters to register, authenticate, cast their votes, and view election results in real time.

The application was developed to eliminate the inefficiencies of traditional paper-based elections by providing a centralized, transparent, and responsive voting system. It supports role-based voting rules, allowing voters to see only the candidates they are eligible to vote for based on their level and department.

The platform was successfully used in a Bowen Association of Engineering Students general election for the 2025/2026 session. The application catered for over **350 active voters**, demonstrating its ability to handle concurrent users while maintaining data integrity and real-time synchronization.

---

# Features

### Authentication and Authorization

* Secure user authentication using JSON Web Tokens (JWT).
* Protected routes for authenticated users.
* Prevention of duplicate voting through server-side validation.

### Voter Management

* Voter registration and authentication.
* Import and management of voter records.
* Storage of voter information and voting status.

### Candidate Management

* Candidate registration and management.
* Profile image upload functionality.
* Department and level-based candidate filtering.

### Voting System

* Online ballot casting.
* Validation to ensure all positions are voted for before submission.
* Prevention of multiple votes from the same voter.

### Real-Time Updates

* Live vote tally updates using WebSockets and Socket.IO.
* Automatic synchronization of election results across connected clients.

### Security Features

* HTTPS encryption.
* Input validation and error handling.
* Secure password storage.
* Authorization middleware for API endpoints.

### Administration

* Database migration from SQLite to PostgreSQL.
* Automated data import using SQL scripts and CSV files.
* Production deployment on a Linux server.

---

# Architecture Overview

The application follows a **three-tier architecture** consisting of the presentation layer, application layer, and data layer.

```text
┌────────────────────┐
│     React Client    │
│  (Frontend UI)      │
└─────────┬───────────┘
          │ HTTP/HTTPS
          │ WebSockets
          ▼
┌────────────────────┐
│ Node.js + Express  │
│     REST API       │
│    Socket.IO       │
└─────────┬───────────┘
          │
          ▼
┌────────────────────┐
│    PostgreSQL      │
│     Database       │
└────────────────────┘
```

### Frontend

The frontend is built using React and TypeScript and provides:

* Authentication pages
* Candidate selection interfaces
* Real-time vote update dashboards
* Responsive user experience across desktop and mobile devices

### Backend

The backend is built with Node.js and Express and is responsible for:

* User authentication and authorization
* Vote processing and validation
* Candidate and voter management
* Real-time communication using Socket.IO
* File upload handling using Multer

### Database Layer

PostgreSQL serves as the primary data store and manages:

* Voter information
* Candidate records
* Voting data
* Election results

### Production Infrastructure

The application is deployed on a Linux-based DigitalOcean server with:

* Nginx acting as a reverse proxy.
* HTTPS provided by Let's Encrypt and Certbot.
* Node.js application server hosting the backend APIs and WebSocket services.

---

# Tech Stack

## Frontend

* React
* TypeScript
* Tailwind CSS
* Jotai
* React Router

## Backend

* Node.js
* Express.js
* Socket.IO
* Multer
* JSON Web Tokens (JWT)

## Database

* PostgreSQL
* SQLite (initial development)

## DevOps and Deployment

* Ubuntu Linux
* DigitalOcean Droplets
* Nginx
* Let's Encrypt
* Certbot
* Git
* GitHub

## Development Tools

* npm
* Vite
* ESLint
* Prettier

---

# Key Highlights

* Full-stack web application.
* Real-time voting and result synchronization.
* Role-based candidate filtering.
* Secure JWT authentication.
* Production deployment with HTTPS.
* Successfully supported over **350 active voters** in a live election.
