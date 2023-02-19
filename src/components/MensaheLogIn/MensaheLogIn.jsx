import React, { useState} from 'react'
import MensaheButtons from '../MensaheInput/MensaheButtons';
import MensaheInput from '../MensaheInput/MensaheInput';
import './MensaheLogIn.css'
import logo from '../UI-images/mensahe-logo.jpg'

const MensaheLogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in...');
  };

  const handleSignup = () => {
    // Implement your signup logic here
    console.log('Signing up...');
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log('Forgot password...');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${username}`);
    console.log(`Password: ${password}`);
  };

  return (
    <div className='Mensahe-form'>
      {/* <p><img src={logo} alt="" className='logo'/>
      ensahe</p> */}
      
      
        <form onSubmit={handleSubmit}>
        <MensaheInput
          type="text"
          value={username}
          placeholder="Username"
          onChange={handleUsernameChange}
        />
       
        <br />
        <br />
        <MensaheInput
          type="password"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <br />
        <br />
        <MensaheButtons
          onLogin={handleLogin}
          onSignup={handleSignup}
          onForgotPassword={handleForgotPassword}
        />
       </form>
         
    </div>
  );
}

export default MensaheLogIn
