import React from 'react';
import './MensaheButtons.css'

function MensaheButtons(props) {
  return (
    <div>
      <button type="button" onClick={props.onSignIn}>
        Sign In
      </button>
      <button type="button" onClick={props.onRegister}>
        Register
      </button>
    </div>
  );
}

export default MensaheButtons;
