const express = require('express');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080; // Cloud Run requires port 8080

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Header Middleware
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    next();
});

// Debug Logger
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// API Endpoint: Send Email (Real Transmission)
app.post('/send-email', async (req, res) => {
    // Standardize to matching req.body.email or req.body.from
    const { email, from, subject, message } = req.body;
    const finalFrom = email || from; // The user's email address

    // Check for credentials
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('[CONFIG ERROR] Missing Email Credentials');
        return res.status(503).json({ error: 'Email uplinks offline (Configuration Missing).' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false // Localhost Trust
            }
        });

        // Verify connection configuration
        await transporter.verify();

        const mailOptions = {
            from: '"Charlene Cordero" <hello@charlenecordero.com>', // Alias Identity
            replyTo: finalFrom, // So you can reply to the user
            to: process.env.EMAIL_USER, // Redirect to your real inbox
            subject: `[PORTFOLIO UPLINK] ${subject}`,
            text: `FROM: ${finalFrom}\n\nMESSAGE:\n${message}`,
            html: `<p><strong>From:</strong> ${finalFrom}</p><p><strong>Message:</strong></p><pre>${message}</pre>`
        };

        await transporter.sendMail(mailOptions);
        console.log(`[SUCCESS] Email sent from ${finalFrom}`);
        // Return JSON even though user asked for action, so fetch works smoothly
        res.status(200).json({ success: true, message: "Transmission Successful" });

    } catch (error) {
        console.error('[EMAIL ERROR]', error);
        res.status(500).json({ error: 'Transmission Failed: Signal Lost.' });
    }
});

// API Endpoint (The "Secure" Line)
app.post('/api/chat', async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const userMessage = req.body.message;

        // System Prompt for Aura
        const prompt = `
        System: You are Aura, an AI Guide for Charlene's Portfolio. You are helpful, professional, yet witty—matching the "Cyberpunk x Cottagecore" aesthetic.

        3. Context & Knowledge Base:
        1. WHO IS CHARLENE:
           - Charlene Cordero is a **Business Insights Analyst** at **TaskUs** (2024-Present).
           - She is **starting to transition** into **AI & Automation** (aspiring AI & Automation Developer).
           - Previously: Amdocs (Ops Analyst), Accenture (DevOps), Multisys (QA).
           - She leverages 7+ years of technical rigor (DevOps, QA, Analytics) to bridge the gap between data and intelligent systems.

        2. PORTFOLIO DESIGN ("Cyberpunk x Cottagecore"):
           - A unique blend of high-tech neon aesthetics (Cyberpunk) and organic nature elements (Cottagecore).
           - Key Elements: Neon Mint (#4AF2A1) & Pink (#FF2E88) accents, glassmorphism, scanlines, and digital moss.
           - Philosophy: "High Tech, Soft Life" — using technology to build resilience and sustainable systems.

        3. CODE ARCHITECTURE:
           - Frontend: Alpine.js (State), Tailwind CSS (Style), Chart.js (Data Viz), HTML5 (Semantic).
           - Backend: Node.js + Express.js.
           - AI: Google Gemini 1.5 Flash (via API).
           - Infrastructure: Google Cloud Run (Serverless), Docker.

        4. PROJECTS:
           - GreetStyle AI: AI greeting card generator (Gemini 2.5, GitHub Pages). Solves "cringey" greetings.
           - Weird Wanderess: Personal travel blog.
           - Ibasari: E-commerce platform.
           - CyberCottage.ai: Future AI startup brand.
           - Portfolio Dashboard: This site (SPA).

        5. DEFINITIONS:
           - AI: Artificial Intelligence, specifically Generative AI used here.
           - Dashboard: The main landing view showing real-time stats and map.
           - Cottagecore: Aesthetic celebrating simple, rural life (used here metaphorically for organic growth).

        6. BLOGS:
           - "GreetStyle AI": The story behind the app.
           - "The Ghost in the Shell Script": Automating daily life with bash.
           - "Neon Gardening": IoT hydroponics project.
           - "AI Architectures for the Lazy Developer": Practical AI over hype.

        Task: Answer the user's question securely based on this context. specific instructions:
        - If asked to summarize, give a concise bulleted list.
        - If asked about "Who am I", tell Charlene's story.
        - If asked about the code, explain the Alpine/Node/Gemini stack.
        - Keep responses under 3-4 sentences unless asked for deep detail.
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
