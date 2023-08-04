const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/signup', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    // Save user data to database (simplified for demonstration)
    console.log(`New user signed up: Name: ${name}, Email: ${email}`);
    
    // Redirect to login page
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    // Check user's email and password (simplified for demonstration)
    if (email === 'user@example.com' && password === 'password') {
        res.send('Login successful');
    } else {
        res.send('Login failed');
    }
});



app.get('/payment', (req, res) => {
    res.sendFile(__dirname + '/payment.html');
});

app.post('/submit-payment', (req, res) => {
    const token = req.body.token;
    
    // Process payment using the token (simplified for demonstration)
    console.log('Payment received:', token);
    
    // Redirect to confirmation page
    res.json({ success: true });
});



app.get('/success', (req, res) => {
    res.sendFile(__dirname + '/success.html');
});

app.get('/failure', (req, res) => {
    res.sendFile(__dirname + '/failure.html');
});

app.get('/cancel-payment', (req, res) => {
    // Logic to cancel payment (simplified for demonstration)
    res.send("Payment canceled.");
});

app.get('/change-plan', (req, res) => {
    // Logic to change plan (simplified for demonstration)
    res.send("Change plan page.");
});
