import * as nodemailer from "nodemailer";
import smtpTransport from 'nodemailer-smtp-transport';


let transporter  = nodemailer.createTransport(
    smtpTransport({
        service: 'gmail',
        
        auth: {
            user: 'smorya994@gmail.com',
            pass: 'ennkkmrcuktqcivx'
        }
    })
);


export const sendEmail = (to: string, subject: string, text: string, htmlTemplate: string ) => {
    const mailOptions: nodemailer.SendMailOptions = {
        from: 'smorya994@gmail.com',
        to: to,
        subject: subject,
        text: text,
        html: htmlTemplate
    };
   
    return transporter.sendMail(mailOptions);
}