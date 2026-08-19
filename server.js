const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Static files (CSS, Images, JS) load karne ke liye
app.use(express.static(__dirname));

// Main Pages Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/About', (req, res) => res.sendFile(path.join(__dirname, 'About.html')));
app.get('/Menu', (req, res) => res.sendFile(path.join(__dirname, 'Menu.html')));
app.get('/feedback', (req, res) => res.sendFile(path.join(__dirname, 'feedback.html')));
app.get('/location', (req, res) => res.sendFile(path.join(__dirname, 'location.html')));

// Wildcard 404 Route (Har ghalt URL par yeh chalega - SAB SE AAKHIR MEIN)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});