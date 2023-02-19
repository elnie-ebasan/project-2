import React from "react";
import "./MensaheInput.css";

const MensaheInput = (props) => {
  return (
    <div className="input-container">
      <label className="input-label">{props.label}</label>
      <input className="input-field" type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default MensaheInput;

// import React from 'react';

// function MensaheInput(props) {
//   return (
//     <input
//       type={props.type}
//       value={props.value}
//       placeholder={props.placeholder}
//       onChange={props.onChange}
//     />
//   );
// }

// export default MensaheInput;
