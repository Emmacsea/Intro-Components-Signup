import { useState } from 'react'
import { SignUp } from "./Components/Intro"

function App() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [emailaddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');


  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  }

  const handleLastname = (e) => {
    setLastname(e.target.value);
  }

  const handleEmailAddress = (e) => {
    setEmailAddress(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  

  return (
    <>
     <SignUp
     firstname={firstname}
     lastname={lastname}
     emailaddress={emailaddress}
     password={password}
     onChangeFirstname={handleFirstname}
     onChangeLastname={handleLastname}
     onChangeEmailaddress={handleEmailAddress}
     onChangePassword={handlePassword}
     />
    </>
  )
}

export default App
