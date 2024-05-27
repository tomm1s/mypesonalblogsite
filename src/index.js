const express = require('express');
const path = require('path');
const app = express();
const collection = require('./mongodb'); // Assuming mongodb.js is also in src directory

// Serve static files from the 'docs' directory
app.use(express.static(path.join(__dirname, '../docs')));

// Example of serving specific HTML files at specific routes
app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'home.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'about.html'));
});

app.get('/contacts.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'contacts.html'));
});

app.get('/lifestyle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'lifestyle.html'));
});

app.get('/myblog.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'myblog.html'));
});

// Serve other static files like CSS, images, etc.
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'style.css'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'script.js'));
});

app.get('/image.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'image.jpg'));
});

app.get('/tiktok.png', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'tiktok.png'));
});

app.get('/twitch.png', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'twitch.png'));
});

app.get('/youtube.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'youtube.jpg'));
});

app.get('/videofile.mp4', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'videofile.mp4'));
});

app.get('/login.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'login.css'));
});

app.get('/signup.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'signup.css'));
});

app.get('/background.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'background.jpg'));
});

app.get('/moon.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'moon.jpg'));
});

app.get('/Youtube_logo.png', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'Youtube_logo.png'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Login and signup routes serving HTML files
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'index.html'));
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, '../docs', 'signup.html'));
});

app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    };

    await collection.insertMany([data]);

    res.redirect("/home.html");
});

app.post('/login', async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.name });

        if (check.password === req.body.password) {
            res.redirect("/home.html");
        } else {
            res.send("wrong password");
        }
    } catch {
        res.send("wrong details");
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
