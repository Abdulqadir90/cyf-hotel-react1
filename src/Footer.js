import React from "react";

const Footer = props => {
  return (
    <div>
      <footer>
        <ul>
          {props.Address.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
