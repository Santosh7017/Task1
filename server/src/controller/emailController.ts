import { Request, Response } from "express";
import { sendEmail } from "../config/nodemailer";


export const emailController = (req: Request, res: Response) => {
    console.log(req.body);
    
  const { to, subject, text, htmlTemplate } = req.body;
  if (!to || !subject || !text || !htmlTemplate) {
    return res.status(400).json({ error: "Missing required fieds" });
  }


  sendEmail(to, subject, text, htmlTemplate)
    .then(() => {
      
      res.status(200).json({ success: true })
  })
    .catch((error) => res.status(500).json({error: error.message}));
};
