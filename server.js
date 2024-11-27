// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// // Database connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '', // Replace with your MySQL password
//     database: 'user_dashboard'
// });

// db.connect(err => {
//     if (err) throw err;
//     console.log('Connected to database!');
// });

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// // Add complaint
// app.post('/complaints', (req, res) => {
//     const { name, contact, text } = req.body;
//     const query = 'INSERT INTO complaints (name, contact, text) VALUES (?, ?, ?)';
//     db.query(query, [name, contact, text], (err, result) => {
//         if (err) return res.status(500).send(err);
//         res.send({ message: 'Complaint added successfully!' });
//     });
// });

// // Get all complaints
// app.get('/complaints', (req, res) => {
//     const query = 'SELECT * FROM complaints';
//     db.query(query, (err, results) => {
//         if (err) return res.status(500).send(err);
//         res.send(results);
//     });
// });

// // Start server
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
