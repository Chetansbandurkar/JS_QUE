const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const SECRET_KEY = 'your-secret-key';

app.use(express.json());
app.use(cookieParser());

// Middleware to verify JWT in cookies
function authenticateJWT(req, res, next) {
  const token = req.cookies.token; // Get the token from cookies

  if (!token) {
    return res.sendStatus(403); // If there's no token, access is forbidden
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Invalid token
    }
    req.user = user; // Store the user information in the request object
    next(); // Proceed to the next middleware or route handler
  });
}

// Route to log in and issue JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Example: In a real application, you would validate the user's credentials
  if (username === 'user' && password === 'password') {
    const user = { username }; // Create a user payload
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });

    // Send the token as an HTTP-only cookie
    res.cookie('token', token, { httpOnly: true });
    return res.json({ message: 'Logged in successfully' });
  }

  res.status(401).json({ message: 'Invalid credentials' });
});

// A protected route
app.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: `Hello ${req.user.username}, you have access to this protected route!` });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
