import './App.css';
import { useState } from 'react';

function App() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneNumberRegex = /^01{1}[0125]{1}\d{8}/;

  
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="section">
      <form>
        <input type="text" id="fname" name="fname" className='dataInputs' placeholder='First Name: Ahmed' onChange={(e) => setfname(e.target.value)}/>
        <input type="text" id="lname" name="lname" className='dataInputs' placeholder='Last Name: Mohamed' onChange={(e) => setlname(e.target.value)}/>
        <input type="text" id="email" name="email" className='dataInputs' placeholder='Email: ahmedmohamed@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" id="phone" name="phone" className='dataInputs' placeholder='Phone: 01(0/1/2/5)xxxxxxxx' value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <button className='btn' onClick={(e) => {
          if (!emailRegex.test(email))
          {
            e.preventDefault();
            alert("invalid email address :(")
          }
          if (!(phoneNumberRegex.test(  phone)))
          {
            e.preventDefault(); 
            alert("invalid phone number :(");
          }
          }}>Submit</button>
      </form>
      <div className='dataEntered'>
        <h1>Data Entered </h1>
        <hr />
        <h3>First Name: {fname}</h3>
        <h3>last Name: {lname}</h3>
        <h3>Email: {email}</h3>
        <h3>phone: {phone}</h3>
      </div>
    </div>
  );
}

export default App;
