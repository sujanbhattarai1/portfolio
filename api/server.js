import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';
import pkg from 'body-parser';
const { urlencoded } = pkg;

// Load environment variables from .env file
dotenv.config();

// Vercel serverless function handler
export default async function handler(req, res) {
  // CORS setup for your frontend origin
  const corsOptions = {
    origin: [
      'https://sujanbhattarai1.com.np', // Custom domain
      'https://portfolio-git-master-sujan-bhattarais-projects.vercel.app', // Vercel temporary URL for `master` branch
    ],
    methods: ['GET', 'POST'],
    credentials: true,
  };


  // Enable CORS for the request
  cors(corsOptions)(req, res, async () => {
    // Only handle POST requests
    if (req.method === 'POST') {
      // Parse form data (you may need to manually handle this if it's raw JSON)
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
    } else {
      // Handle other HTTP methods (GET, etc.)
      res.status(405).send('Method Not Allowed');
    }
  });
}
