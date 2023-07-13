# Social Network API

Welcome to the Social Network API! This API serves as the backend for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It utilizes Express.js for routing, MongoDB as the database, and the Mongoose ODM for seamless interaction with the database.

## Features

- User authentication and authorization to ensure secure access to the API endpoints.
- CRUD operations for managing users, thoughts, reactions, and friend connections.
- Thought reactions, allowing users to like and comment on thoughts.
- Efficient handling of large amounts of data and unstructured content using MongoDB.
- Flexible data modeling and schema management with the Mongoose ODM.
- API endpoints for user registration, login, profile management, thought creation, and friend connections.

## Technologies Used

- Node.js as the runtime environment.
- Express.js, a minimalist web application framework, for handling routing and middleware.
- MongoDB, a NoSQL database, for storing data.
- Mongoose, an ODM (Object Data Modeling) library, for simplified interaction with MongoDB.
- Optional: JavaScript date library or native JavaScript Date object for handling timestamps.

## Getting Started

1. Clone the repository:


2. Install dependencies:


3. Set up the MongoDB connection by providing the database connection URL in the `.env` file.

4. Start the server:


5. The API will be accessible at `http://localhost:3000` by default.

## API Documentation

For detailed information on the available API endpoints and their usage, refer to the provided API documentation or postman collection.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---
