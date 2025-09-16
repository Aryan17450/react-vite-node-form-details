const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let savedData = {};

// Save data endpoint
app.post('/api/save', (req, res) => {
  savedData = req.body;
  res.json({ message: 'Data saved successfully', data: savedData });
});

// Get data endpoint
app.get('/api/data', (req, res) => {
  res.json(savedData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});