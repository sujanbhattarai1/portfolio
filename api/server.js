import express from 'express';
import pkg from 'body-parser';  // Import the entire body-parser package
const { urlencoded } = pkg;  // Extract the urlencoded function
import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';  // Import CORS middleware


// api/server.js
export default function handler(req, res) {
    res.status(200).json({ message: 'Hello from your backend!' });
  }
  

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(urlencoded({ extended: true }));

// Enable CORS
app.use(cors({
    origin: 'https://sujanbhattarai1.com.np', // Replace with your frontend's actual URL
    methods: ['GET', 'POST'], // Allowed HTTP methods
    credentials: true, // Allow credentials if needed
}));

// Serve static files (e.g., your HTML form)
app.use(express.static('public'));

// Route to handle form submission
app.post('/send', async (req, res) => {
    const { name, email, message } = req.body;

    // Configure Nodemailer with environment variables
    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Gmail address from .env
            pass: process.env.EMAIL_PASS, // Gmail App password from .env
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Send email to your Gmail address
        subject: 'New Contact Form Submission',
        text: `You have received a new message from your website:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Message sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send the message. Please try again later.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
