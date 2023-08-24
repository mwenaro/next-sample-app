const nodemailer = require('nodemailer');
type Mailer = (
  to: string,
  subject: string,
  body: string,
  isHTML?: boolean| undefined,
  sender?: string | undefined
) => any;

export const sendTestEmail: Mailer = async (to, subject, body,sender = undefined,  isHTML = undefined) => {
  // Create a nodemailer transport object
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,

    // service:'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PWD,
    },
  });

  // Define the email message
  const message: {
    from: any;
    to: string;
    subject: string;
    text?: string;
    html?: string;
  } = {
    // from: process.env.NEXT_PUBLIC_EMAIL_USER as string,
    from: sender? sender: "Mombasa DigitalSolutions<mweroabdalla@gmail.com>",
    to,
    subject: subject || 'Test Email',
    text: body || 'Test email text',
  };

  if (isHTML) {
    delete message['text'];
    message['html'] = body;
  }
 
  try {
    // Send the email
    const info = await transporter.sendMail(message);
    console.log(`Email sent: ${info.messageId}`);
    return {flag:true, info}
  } catch (error:any) {
    console.error('Error occurred while sending email:', error);
    return {flag:false, msg:error.message}
  }
};

// Call the function to send the test email
// sendTestEmail();