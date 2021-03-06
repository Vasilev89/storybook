import React from 'react';

const buttonStyles = {
  border: '1px solid #e82d36',
  borderRadius: 5,
  color:'#fff',
  backgroundColor: '#FF323C',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const Button = ({ children, onClick }) => (
  <button
    style={buttonStyles}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
