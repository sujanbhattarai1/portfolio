import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // Configure Nodemailer
      const transporter = createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, // Gmail address from .env
          pass: process.env.EMAIL_PASS, // Gmail App password from .env
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Your Gmail address
        subject: 'New Contact Form Submission',
        text: `You have received a new message from your website:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send the message. Please try again later.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
