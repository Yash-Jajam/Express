const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route to fetch all student data
app.get('/api/students', (req, res) => {
  const students = [
    { id: 100, name: 'Lydia Legan', classes: [{ classID: 'INFO 530', className: 'Systems Development' }] },
    // Add more student data here...
  ];
  res.json(students);
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
