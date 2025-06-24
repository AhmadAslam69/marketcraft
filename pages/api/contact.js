// pages/api/contact.js
import { connectToDB } from "../../src/lib2/mongodb";
import Contact from "../../src/models/contact";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Method not allowed");

  const { name, phone, email, message } = req.body;

  try {
    await connectToDB();

    // Save to DB
    await Contact.create({ name, phone, email, message });

    // Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // Your email
      subject: "New Contact Submission",
      html: `
        <h2>Contact Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
  console.error("Mongo/Email Error:", err); // ← Detailed log
  res.status(500).json({ error: err.message || "Server error" });
}

}
