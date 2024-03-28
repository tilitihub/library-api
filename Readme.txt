Library Loan System
0. Summary
This software application offers a comprehensive solution for libraries to simplify the process of borrowing books. The RESTful architecture, the principles of clean code, and well-documented source code ensure the efficiency, maintainability, and ease of use of the system.

1. Introduction
This documentation outlines the purpose, technical description, technical prerequisites, and a brief overview of the use of the Library Loan System. The system enables libraries to manage book loans, user data, and track the availability of books.

2. Technical Description
2.1 Server-side Component
The server-side component provides a RESTful API that allows client-side applications to manage book, user, and loan data. The server uses Node.js and Express.js frameworks, with MariaDB as the database.

The use of MariaDB allows the utilization of relational database advantages, such as complex queries, transactions, and comprehensive data integrity management. This choice is well-suited for libraries to manage book, user, and loan data.

2.2 Client-side Components
Web Client: A React.js application that allows users and administrators to manage books, users, and loans.
Mobile Client: A React Native application that enables users to borrow and return books on mobile devices.
Desktop Client: An Electron.js application that allows administrators to manage library data in a desktop application format.
3. Technical Prerequisites
Server: Node.js 14.x or newer, Express.js 4.x or newer, MariaDB 10.x or newer.
Client-side Applications: Modern web browser (Chrome, Firefox, Safari), Node.js 14.x or newer for React.js and React Native development, Android Studio and Android SDK for React Native development, and Electron.js 13.x or newer for Electron.js development.
4. Usage
4.1 RESTful API
The RESTful API endpoints are used as follows:

Books:
GET /api/books: List all books.
POST /api/books: Add a new book.
PUT /api/books/:id: Modify book data.
DELETE /api/books/:id: Delete a book.
Users:
GET /api/users: List all users.
POST /api/users: Add a new user.
PUT /api/users/:id: Modify user data.
DELETE /api/users/:id: Delete a user.
Loans:
GET /api/loans: List all loans.
POST /api/loans: Add a new loan.
PUT /api/loans/:id: Modify loan data.
DELETE /api/loans/:id: Delete a loan.
4.2 Client-side Applications
Web Client: Open http://localhost:3000 in your web browser to use the web client.
Mobile Client: Install the application on your Android device or run it on an iOS device using the React Native CLI.
Desktop Client: Install and run the Electron.js application from the source code or the downloaded package.
4.3 Administration Interface
The administration interface allows managing books, users, and loans in a desktop application format.

5. Development and Testing
During development and testing, it's important that the code is clean, modular, and that tests cover all functionalities of the application. Tests can be run using the npm test command.