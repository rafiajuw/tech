import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the POST handler for the API route
export async function POST(request: Request) {
  try {
    // Parse the form data from the request
    const { name, email, ipBlock, message } = await request.json();

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Use your email provider's SMTP server (Gmail in this example)
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER, // Your email address (set in .env.local)
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password (set in .env.local)
      },
    });

    // Define the email options
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender's name and email
      to: 'your-email@example.com', // Your email address where you want to receive the form data
      subject: 'New IP Selling Request',
      text: `
        New IP Selling Request:
        Name: ${name}
        Email: ${email}
        IP Block: ${ipBlock}
        Message: ${message}
      `,
      html: `
        <h2>New IP Selling Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>IP Block:</strong> ${ipBlock}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}