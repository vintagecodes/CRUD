import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div>
    <Product/>
    </div>

  )}

export default App;

import './App.css';
import { useState } from "react";

function App() {
  const[firtsname, setFirstname] = useState("");
  const[lastname, setLastname] = useState("");
  const[age, setAge] = useState(0);
  const[phone, setPhone] = useState(0);
  const[city, setCity] = useState("");
  const[gender, setGender] = useState("");
  const[zip, setZip] = useState(0);
  const[account, setAccount] = useState(0);
  const[bank, setBank] = useState("");
  const [addrtype] = useState(["Select Roles", "Database", "FileStorage"])

  const Add = addrtype.map(Add => Add)
  console.log(Add[2]);
  const handleAddrTypeChange = (e) => { 
    console.clear();
     
    setRole(addrtype[e.target.value]) 
      }
  var e;
  console.log((addrtype[e.target.value]));
  
  const [role, setRole] = useState('Normal')


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log
    (`
    Firstname: ${firtsname}
    LastName: ${lastname} 
    Age: ${age}
    PhoneNumber: ${phone} 
    City: ${city}
    Gender: ${gender}
    ZipCode: ${zip}
    AccountNumber: ${account} 
    BankBranch: ${bank}
    Role: ${role}
    `);
  };
  
  // const displayInfo = () =>{
  //   console.log(firtsname + lastname + age + phone + city + gender + zip + account + bank + storage);
  // };

  

  

  return (
    <div className="App">
      <div className="information">

      <label>FirstName: </label>
      <input 
      type="text" 
      onChange={(event) =>{
        setFirstname(event.target.value);
      }}
      />

      <label>LastName: </label>
      <input 
      type="text"
      onChange={(event) =>{
        setLastname(event.target.value);
      }}
      />
      

      <label>Age: </label>
      <input 
      type="number" 
      onChange={(event) =>{
        setAge(event.target.value);
      }}/>

      <label>PhoneNumber: </label>
      <input 
      type="number"
      onChange={(event) =>{
        setPhone(event.target.value);
      }}
       />

      <label>City: </label>
      <input type="text" 
      onChange={(event) =>{
        setCity(event.target.value);
      }}/>

      <label>Gender: </label>
      <input type="text" 
      onChange={(event) =>{
        setGender(event.target.value);
      }}/>

      <label>ZipCode: </label>
      <input type="number" 
      onChange={(event) =>{
        setZip(event.target.value);
      }}/>

      <label>AccountNumber: </label>
      <input type="number" 
      onChange={(event) =>{
        setAccount(event.target.value);
      }}/>

      <label>BankBranch: </label>
      <input type="text" 
      onChange={(event) =>{
        setBank(event.target.value);
      }}/>
      
      <label htmlFor="role">Choose a Role:</label>
        < select
            onChange={e => handleAddrTypeChange(e)}
            className="browser-default custom-select" >
            {
                Add.map((address, key) => <option key={key} value={key}>{address} 
                   </option>)
            }
        </select >

        <button type="submit" onSubmit={handleSubmit}>Add Details</button>
      
      </div>
      
    </div>
  );
}

export default App;