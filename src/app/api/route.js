
import { NextApiRequest, NextApiResponse } from 'next';

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank You for Joining Us!',
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
}
