# Pet API Application

This project is a full-stack application built with Node.js, Express.js, React, and MySQL. It provides a backend server to handle authentication, manage animal data, and serve associated images, along with a front-end interface for interacting with these features.

## Features

- **Authentication**: Secure user login and registration with passwords hashed using `bcryptjs`.
- **Data Validation**: Ensure data integrity with validation schemas using `zod`.
- **Animal Management**: Create, read, update, and delete (CRUD) operations for managing animal data.
- **Image Handling**: Upload and serve images associated with different animals.
- **Responsive UI**: A user-friendly interface built with React.

## Screenshots

![Application Screenshot](https://github.com/user-attachments/assets/38e09650-7552-44f9-98cd-861e1bba0dba)

## Installation

### Front-End

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```

### Back-End

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**

   Create a `.env` file in the backend folder and add your database configuration and JWT secret:
   ```plaintext
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret
   ```

3. **Start the Server**
   ```bash
   npm start
   ```

## Technologies Used

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, Express.js, MySQL
- **Authentication**: JWT (JSON Web Tokens), `bcryptjs` for password hashing
- **Data Validation**: `zod` for schema validation
- **Database**: MySQL
- **Version Control**: Git

## Getting Started

Follow the installation instructions above to set up both the front-end and back-end components. Ensure you have Node.js and MySQL installed on your system before starting.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you'd like to improve the project.
