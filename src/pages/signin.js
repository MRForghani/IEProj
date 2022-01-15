import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import { Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
var Link = require('react-router').Link;
// import { BrowserRouter as Router, Switch, RouteوRedirect } from 'react-router-dom';





var appointment ="";






function Fnc() {
  
    return (
  




        
      <div >
  
          <h1>شما {appointment} هستید</h1>
  
    
  
          {(() => {
  
    
  
             switch (appointment) {
  
                case 'وکیل':


        

return (
    <div>
                          <h1>ورود به پنل وکالت
                          </h1>
                    
                          <a href="http://localhost:3000/lawyer-app" rel="noreferrer">
    برای ورود به پنل وکالت کلیک کنید.
  </a>
  

</div>
         );              
                    
                    
                case 'منشی':
  
              
return (
  <div>
                        <h1>ورود به پنل منشی
                        </h1>
                  
                        <a href="http://localhost:3000/clerk-app" rel="noreferrer">
  برای ورود به پنل منشی کلیک کنید.
</a>


</div>
       ); 
                default:
  
                    return (
  
                      <div>
                          <h1>بازگشت به سایت
                          </h1>
                    
                          <a href="http://localhost:3000/homePage" rel="noreferrer">
    برای بازگشت به سایت کلیک کنید.
  </a>
  

</div>
                    )
  
             }
  
    
  
          })()}
  
    
  
      </div>
  
    );
          
  }


    
//   return(
    
//     <div
//     style={{
     
//       display: 'flex',
//       justifyContent: 'Center',
//       alignItems: 'Center',
//       height: '100vh',
            
//     }}
//   >
    
//    <div 
//    style={{
      
// textAlign: 'center',    
  
//   }}
// >
  
//     <h2 >موکل گرامی یعد از چند روز وکیلتان با شما ارتبازط برقرار خواهد کرد . با تشکر<br></br>
  
//   نوع مهاجرت انتخابی : {appointment}</h2>
  
//   </div>
//   </div>
//   );





const SignIn = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [mobile, setMobile] = useState("");


  const getInitialState = () => {
    const value = "موکل";
    
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
   
    }}
  >
    
   <div 
   style={{
    
        
textAlign: 'center',    
  
    
  }}
>


      <h2>ثبت نام</h2>
      <TextField
        value={name}
        label="نام کاربری"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h3>نام کاربری: {name} </h3>


      
      <TextField
        value={pass}
        label="رمز"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <h3>رمز: {pass} </h3>


      <TextField
        value={mobile}
        label="موبایل"
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      />
      <h3>موبایل: {mobile} </h3>

<h3>نقش خود را انتخاب کنید.</h3>
      <select value={value} onChange={handleChange}
   
      
      >
        <option value="موکل">موکل</option>
        <option value="وکیل">وکیل</option>
        <option value="منشی">منشی</option>


      </select>
      <p>{`انتخاب شما : ${value}`}</p>


      
      <Button

      
  onClick={() => {
    // const txt = `پرداخت موفقیت آمیز بود .نوبت شما : ${value}`;
    // alert(txt);
    
    
    appointment = value;
   
    ReactDOM.render(<Fnc />, document.getElementById('root'));
  }}

  to='/homePage' activeStyle
>
  تایید
</Button>





    </div>
    </div>
  );
};
  
export default SignIn;