
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Automatic files load karne ke liye
app.use(express.static(__dirname));

// Express ko har page batayein (Exact file name ke sath)
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/menu', (req, res) => res.sendFile(path.join(__dirname, 'Menu.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'About.html')));
app.get('/location', (req, res) => res.sendFile(path.join(__dirname, 'location.html')));
app.get('/feedback', (req, res) => res.sendFile(path.join(__dirname, 'feedback.html')));
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));