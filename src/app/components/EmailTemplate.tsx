import * as React from "react";

interface EmailTemplateProps {
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  subject,
  message,
}) => (
  <div>
    <h1>{subject}</h1>
    <h2>Email was sent by {email}</h2>
    <p>Thank you for contacting us!</p>
    <p>New message submitted</p>
    <p>{message}</p>
    <br />
    <p>NextJS Portfolio Website</p>
  </div>
);
