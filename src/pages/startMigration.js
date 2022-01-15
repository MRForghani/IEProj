import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';



var appointment ="";
function Payment() {
  return(
    
    <div
    style={{
     
      display: 'flex',
      justifyContent: 'Center',
      alignItems: 'Center',
      height: '100vh',
      
   
      
      
    }}
  >
    
   <div 
   style={{
    
        
        
    
textAlign: 'center',    
  
    
  }}
>






    
    
    <h2 >موکل گرامی یعد از چند روز وکیلتان با شما ارتبازط برقرار خواهد کرد . با تشکر<br></br>
  
  نوع مهاجرت انتخابی : {appointment}</h2>
  
  

  </div>
  </div>
  );
}
function App() {
  const getInitialState = () => {
    const value = "؟";
    
    return value;
    
  };

  const [value, setValue] = useState(getInitialState);

  
  const handleChange = (e) => {
    setValue(e.target.value);
    
  };

  return (
   
    <div
      style={{
       
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh',
        lineHeight: '5'
        
        
      }}
    >
      
     <div 
     style={{
      
          
          

  textAlign: 'center',    
    
      
    }}
>
<h1 style={{color: "red"}}>!!! شروع مهاجرت</h1>
<h2 > ! وکالت با بهترین وکبلان ما</h2>
<h3 >تعیین نوع مهاجرت</h3>

      <select value={value} onChange={handleChange}>
        <option value="مهاجرت کاری">مهاجرت کاری</option>
        <option value="مهاجرت تحصیلی">مهاجرت تحصیلی</option>
     
      </select>
      <p>{`انتخاب شما : ${value}`}</p>
      
      <Button
  onClick={() => {
    // const txt = `پرداخت موفقیت آمیز بود .نوبت شما : ${value}`;
    // alert(txt);
    appointment = value;
    ReactDOM.render(<Payment />, document.getElementById('root'));
  }}
>
  تایید
</Button>

{/* <p>{`نوبت شما : ${appointment}`}</p> */}
    </div>
    </div>
  );
  

  
}


export default App;