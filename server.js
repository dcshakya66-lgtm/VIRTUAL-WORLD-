const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Virtual World API!');
});

// Chatbot logic
app.post('/chatbot', (req, res) => {
    const userMessage = req.body.message;
    // Implement chatbot logic here
    const responseMessage = `You said: ${userMessage}`; // Placeholder response
    res.json({ reply: responseMessage });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
