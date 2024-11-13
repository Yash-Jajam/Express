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
      // If there are classes found for the student, collect them in an array
      if (r.length > 0) {
        const student = {
          name: r[0].name,    // Student name (all classes will belong to this student)
          email: r[0].email,  // Student email (same for all classes)
          classes: []         // Initialize empty array for classes
        };

        // Loop through all results to add each class to the student's class list
        r.forEach(row => {
          student.classes.push({
            class_name: row.class_name,
            class_date: row.class_date,
            class_time: row.class_time,
            class_location: row.class_location,
            syllabus: row.syllabus,
            map: row.map
          });
        });

        res.json(student); // Send the student data with all classes
      } else {
        res.json({ message: 'Student not found or no classes assigned.' });
      }
    } else {
      next(e);  // Pass error to the error handler
    }
  });
});

module.exports = router;
