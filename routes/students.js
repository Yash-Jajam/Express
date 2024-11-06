// routes/students.js
const express = require('express');
const router = express.Router();
const db = require('../db');  // Import the database connection

router.get('/:studentId', (req, res) => {
  const studentId = req.params.studentId;
  
  const studentQuery = `
    SELECT students.student_id, students.name, students.email, students.phone, 
           classes.class_id, classes.class_name, classes.class_date, classes.class_time, 
           classes.class_location, classes.map, classes.syllabus 
    FROM students
    JOIN student_classes ON students.student_id = student_classes.student_id
    JOIN classes ON student_classes.class_id = classes.class_id
    WHERE students.student_id = ?
  `;
  
  db.query(studentQuery, [studentId], (err, results) => {
    if (err) {
      console.error('Error fetching student data:', err);
      res.status(500).send('Error fetching student data');
    } else if (results.length === 0) {
      res.status(404).send('Student not found');
    } else {
      res.json(results);  // Send student and class details as JSON
    }
  });
});

module.exports = router;
