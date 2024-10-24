// lib/twilio.ts
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
const client = twilio(accountSid, authToken);

export const sendVerificationCode = (phoneNumber: string, code: string) => {
  return client.messages.create({
    body: `Your verification code is: ${code}`,
    to: phoneNumber,
    from: process.env.TWILIO_PHONE_NUMBER, 
  });
};
