import { useState } from "react";
import MensaheButtons from "../MensaheButtons/MensaheButtons";
import './MensaheLogIn.css';

const users = [
  { username: "elnie.ebasan", password: "Abc123**" },
  { username: "el.yan", password: "Abcd1234**" },
];

export default function MensaheLogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      console.log("Logged in as:", user.username);
      setUsername("");
      setPassword("");
    } else {
      console.log("Incorrect username or password");
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();
    console.log('Register');
  };

  return (
    <div className="Mensahe-form">
      <form onSubmit={handleLogIn}>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={handleUsernameChange}
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <br />
        <MensaheButtons onSignIn={handleLogIn} onRegister={handleSignup} />
      </form>
    </div>
  );
}
