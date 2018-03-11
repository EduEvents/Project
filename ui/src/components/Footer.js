import React from 'react';

const style = {

  body: {
    position: 'relative',
    top: '100%',
    height: '60px',
    width: '100%',
    margin: 'auto',
    backgroundColor: 'black'
  },

  footer: {
    color: 'white',
    float: 'right',
    marginRight: '350px'
  }
}

const Footer = () => {
  return (
    <div style={style.body}>
      <h6 style={style.footer}>Footer</h6>
    </div>
  );
}

export default Footer;
