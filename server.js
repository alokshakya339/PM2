// Load the express module
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to simulate an infinite blocking operation
function infiniteBlock(req, res, next) {
    // Simulate an infinite loop blocking the event loop
    while (true) {
        // Busy-wait loop to block the thread indefinitely
    }
    // This line will never be reached
}

// Route that blocks the thread indefinitely
app.get('/block-thread', infiniteBlock, (req, res) => {
    // This response will never be sent
    res.send('This will never be reached because the thread is blocked indefinitely.');
});

// Default route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
