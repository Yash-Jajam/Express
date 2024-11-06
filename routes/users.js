const express = require('express');
const mysql = require('mysql');
const db = require('../db.js');
const router = express.Router();  // Ensure that you initialize router here
const cors = require('cors');

// Create MySQL connection
const connection = mysql.createConnection(db.conn_info);
connection.connect();

// Enable CORS
var corsOptions = {
  origin: "*",
};

// Get student details by student_id
router.get('/', cors(corsOptions), function(req, res, next) {
  const studentId = req.query.student_id;

  // SQL query to get student and class details
  const query = `
    SELECT s.name, s.email, c.class_name, c.class_date, c.class_time, c.class_location, c.syllabus, c.map
    FROM students s
    JOIN student_classes sc ON s.student_id = sc.student_id
    JOIN classes c ON sc.class_id = c.class_id
    WHERE s.student_id = ?;
  `;

  connection.query(query, [studentId], (e, r) => {
    if (!e) {
      res.json(r[0]);  // Send the first result (single student-class data)
    } else {
      next(e);  // Pass error to the error handler
    }
  });
});

module.exports = router;
