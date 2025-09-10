// import sendgrid from "@sendgrid/mail";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextResponse } from "next/server";

interface EmailRequest {
  name: string;
  message: string;
  captchaValue: string;
  email?: string;
  phone?: string;
}

export async function POST(request: Request): Promise<Response> {
  const { name, email, captchaValue, phone, message }: EmailRequest =
    await request.json();
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaValue}`,
    {
      method: "POST",
    }
  );

  const data = await response.json();

  if (!data.success) {
    console.error("Recaptcha verification failed");
    return NextResponse.json(
      { error: "Recaptcha verification failed" },
      { status: 400 }
    );
  }

  // const apiKey = process.env.SENDGRID_API_KEY;
  // if (!apiKey) {
  //   console.error("SendGrid API key is missing");
  //   return NextResponse.json(
  //     { error: "SendGrid API key is missing" },
  //     { status: 500 }
  //   );
  // }
  // sendgrid.setApiKey(apiKey);

  const region = process.env.AWS_REGION;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  if (!region || !accessKeyId || !secretAccessKey) {
    console.error("AWS SES configuration is missing");
    return NextResponse.json(
      { error: "AWS SES configuration is missing" },
      { status: 500 }
    );
  }

  const sesClient = new SESClient({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  const makeEmail = (
    name: string,
    message: string,
    email?: string,
    phone?: string
  ) => {
    let msgString =
      "<p>New Message from Macs Iron Works website contact form.</p>";
    const escapeHtml = (unsafe: string) => {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    if (name) msgString += `<p>Name: ${escapeHtml(name)}</p>`;
    if (email) msgString += `<p>Email: ${escapeHtml(email)}</p>`;
    if (phone) msgString += `<p>Phone: ${escapeHtml(phone)}</p>`;
    if (message) msgString += `<p>Message: ${escapeHtml(message)}</p>`;

    return msgString;
  };

  const params = {
    Source: "info@parkcrestdesign.com", // Your verified sender email
    Destination: {
      ToAddresses: ["casey.conlin@gmail.com", "MacsIronWorks@gmail.com"], // Recipient email
    },
    Message: {
      Subject: { Data: `Macs Iron Works Contact Form Submission from ${name}` },
      // Body: { Text: { Data: `Email: ${email}\nMessage: ${message}` } },
      Body: { Html: { Data: makeEmail(name, message, email, phone) } },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    await sesClient.send(command);
    return NextResponse.json("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json("Error sending email", { status: 500 });
  }
}

//     to: ["casey.conlin@gmail.com", "MacsIronWorks@gmail.com"],
//     from: "info@parkcrestdesign.com",
//     subject: `Macs Iron Works Contact Form Submission - ${name}`,
//     text: message,
//     html: makeEmail(name, message, email, phone),
//   };

//   try {
//     await sendgrid.send(msg);
//     return NextResponse.json("Email sent successfully", { status: 200 });
//   } catch (error) {
//     console.error("Error sending email: ", error);
//     return NextResponse.json("Error sending email", { status: 500 });
//   }
// }
