import fs from 'fs';
import PDFDocument from 'pdfkit';

interface InvoiceDetails {
  username: string;
  email: string;
  number: string;
  itemprice: number;
  tax: number;
  totalPrice: number;
  id: number;
}

// Function to generate pdf based on invoice details
const generatePDF = (invoiceDetails: InvoiceDetails): string => {
  const doc = new PDFDocument();
  const pdfFilePath = `pdfs/${invoiceDetails.id}.pdf`;

  // pipe the pdf to a file
  doc.pipe(fs.createWriteStream(pdfFilePath));

  // content of pdf
  doc.text(`Invoice Number: ${invoiceDetails.id}`);
  doc.text(`Username: ${invoiceDetails.username}`);
  doc.text(`Email: ${invoiceDetails.email}`);
  doc.text(`Item Price: ${invoiceDetails.itemprice}`);
  doc.text(`Tax: ${invoiceDetails.tax}`);
  doc.text(`Total Price: ${invoiceDetails.totalPrice}`);

  doc.end();
  return pdfFilePath;
};

export default generatePDF;
