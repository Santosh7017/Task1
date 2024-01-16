import './App.css';
import {renderToString} from 'react-dom/server'
import EmailTemplate from './component/emailTemplate';

function App() {
  const handleFileUpload = async (to: string, subject: string, text: string) => {
    
      const data: any  = {
        to :  to,
        subject : subject,
        text: text,
        htmlTemplate : renderToString(<EmailTemplate />),
      }
      try {
        const response = await fetch('http://localhost:8000/sendmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        }); 

        const result = await response.json();
        console.log('this is the result', result);
        
      }catch(error){
          console.log("error in sending mail", error);
          
      }

}
  
  return (
   <div>
      <button style={{height: '3rem', width: '3rem'}} onClick={() => handleFileUpload('santoshmorya400@gmail.com', 'this is a pdf testing','this is the pdf' )}> Send file</button>
   </div>
  );
  }

export default App;
