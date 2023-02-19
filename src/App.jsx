import { useState } from 'react'
import './App.css'
import MensahePage from './components/MensahePage/MensahePage'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };
  
  return (
    <div className="App">
      
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <MensahePage />
    </section>

   
    </div>
  )
}

export default App
