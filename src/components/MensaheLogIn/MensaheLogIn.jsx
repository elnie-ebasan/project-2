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
  const [loginStatus, setLoginStatus] = useState("");

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
      setLoginStatus("success");
      console.log("Logged in as:", user.username);
      setUsername("");
      setPassword("");
      setTimeout(() => {
        setLoginStatus("");
      }, 2000);
    } else {
      setLoginStatus("error");
      console.log("Incorrect username or password");
      setTimeout(() => {
        setLoginStatus("");
      }, 2000);
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();
    console.log('Register');
  };

  return (
    <div className="Mensahe-form">
      {loginStatus && (
        <div className={`login-message ${loginStatus}`}>
          {loginStatus === "success" ? "Login successful!" : "Incorrect username or password."}
        </div>
      )}
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
