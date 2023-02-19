import React from 'react';
import './MensaheButtons.css'

function MensaheButtons(props) {
  const { onLogin, onSignup } = props;
  return (
    <div className="buttons-container">
      <button onClick={props.onLogin}>Sign in</button>
      <button onClick={props.onSignup}>Register</button>
      {/* <button onClick={props.onForgotPassword}>Forgot password</button> */}
    </div>
  );
}

export default MensaheButtons;
