const express = require('express');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080; // Cloud Run requires port 8080

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// API Endpoint (The "Secure" Line)
app.post('/api/chat', async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const userMessage = req.body.message;

        // Dito mo ilalagay ang System Prompt ni Aura
        const prompt = `
        System: You are Aura, an AI Guide for Charlene's Portfolio. 
        Context: Charlene is an AI Solutions Architect with 7+ years exp.
        User: ${userMessage}`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.json({ reply: text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Aura is currently offline." });
    }
});

// Serve the HTML file for any other request
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});