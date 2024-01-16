import express from "express";
import generatePDF from './generatePDF';
import fs from 'fs';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/generate-pdf',(req, res) => {
    let pdfFilePath=null;
    try {
        const invoiceDetails= {
            username: "John Doe",
            email: "john@example.com",
            number: "INV123",
            itemprice: 50,
            tax: 5,
            totalPrice: 55,
            id: 1,
        };

        const pdfFilePath =generatePDF(invoiceDetails);

        res.download(pdfFilePath,`${invoiceDetails.id}.pdf` ,(err) => {
            if (err) {
                res.status(500).send('Error sending pdf');
            }
            

        });
    } catch (error) {
        console.error('Error',error);
        res.status(500).send('Error generating PDF');
    }
});

app.listen(port, () => {
    console.log("express server is running on ", port);
});

const cleanupPDF = (pdfFilePath: string) => {
    fs.unlink(pdfFilePath, (err) => {
        if (err) {
            console.error('Error deleting PDF file', err);
        } else {
            console.log('PDF file deleted successfully');
        }
    });
};
