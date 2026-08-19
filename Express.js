const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'view')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css', 'home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css', 'about.html'));
});


app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css', 'menu.html'));
});

app.get('/location', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css', 'location.html'));
});


 app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css', 'feedback.html'));
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});


app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} `);
});
