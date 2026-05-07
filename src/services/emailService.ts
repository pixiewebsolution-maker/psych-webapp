import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export async function sendBookingConfirmation(to: string, data: {
  doctorName: string;
  date: string;
  time: string;
}) {
  const html = `
    <div style="font-family: 'Inter', sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f1f5f9; rounded: 24px;">
      <div style="background-color: #3b82f6; width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
        <span style="color: white; font-weight: bold; font-size: 24px;">E</span>
      </div>
      <h1 style="font-size: 24px; font-weight: 800; margin-bottom: 8px;">Appointment Confirmation</h1>
      <p style="color: #64748b; font-size: 16px; margin-bottom: 32px;">Your session with ${data.doctorName} has been booked successfully.</p>
      
      <div style="background-color: #f8fafc; padding: 24px; border-radius: 16px; margin-bottom: 32px;">
        <div style="margin-bottom: 16px;">
          <p style="text-transform: uppercase; font-size: 10px; font-weight: 800; color: #94a3b8; letter-spacing: 0.1em; margin-bottom: 4px;">Date</p>
          <p style="font-weight: 700; font-size: 16px;">${data.date}</p>
        </div>
        <div>
          <p style="text-transform: uppercase; font-size: 10px; font-weight: 800; color: #94a3b8; letter-spacing: 0.1em; margin-bottom: 4px;">Time</p>
          <p style="font-weight: 700; font-size: 16px;">${data.time} (30 mins)</p>
        </div>
      </div>
      
      <a href="${process.env.NEXTAUTH_URL}/dashboard/patient" style="background-color: #3b82f6; color: white; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: 700; display: inline-block; margin-bottom: 32px;">Manage Booking</a>
      
      <hr style="border: 0; border-top: 1px solid #f1f5f9; margin-bottom: 32px;" />
      <p style="font-size: 12px; color: #94a3b8;">If you didn't request this appointment, please contact support immediately.</p>
      <p style="font-size: 12px; color: #94a3b8;">© ${new Date().getFullYear()} Ethera Wellness. 123 Health St, London.</p>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject: `Booking Confirmed: Session with ${data.doctorName}`,
    html,
  });
}
