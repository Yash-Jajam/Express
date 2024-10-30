const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/students');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/students', studentRoutes);

module.exports = app;
