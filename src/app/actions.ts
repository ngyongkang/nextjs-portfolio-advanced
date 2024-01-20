"use server";

import { Resend } from 'resend';
import { EmailTemplate } from '@/app/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL ? process.env.FROM_EMAIL : "";

async function send(prevState: any, formData: FormData) {
  const request = {
    email: formData.get("email")?.toString()!,
    subject: formData.get("subject")?.toString()!,
    message: formData.get("message")?.toString()!,
  };
  const {email, subject, message} = request;

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: ['nyk.com.sg@gmail.com', email],
    subject: subject,
    react: EmailTemplate({email : email, subject: subject, message: message }),
    text: "",
  });
  
  if(error) {
    // console.log(e); //For Debugging
    return prevState;
  }
    
  prevState.success = true;
  return prevState;
}

export { send };
