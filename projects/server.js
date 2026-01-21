const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json({ limit: '10mb' })); // Increased limit for image data
app.use(cors());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/api/transform', async (req, res) => {
    const { message, style } = req.body;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: `Rewrite the message in a ${style} style. Keep names the same.` },
                { role: "user", content: message }
            ],
        });
        res.json({ transformedText: response.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: "AI error" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server live on port ${PORT}`));