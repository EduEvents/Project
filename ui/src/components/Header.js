import React from 'react';

import { Link } from 'react-router-dom';
import Radium from 'radium';

import './Header.css';

var style = {

  brandName: {
    font: '',
    position: 'fixed',
    textDecoration: 'none',
    paddingTop: '15px',
    color: 'white',
    float: 'left',
    marginLeft: '350px',

    ":active": {
      color: 'black'
    }
  },

  ul: {
    listStyleType: 'none',
    width: '100%',
    left: '0px',
    margin: '0 auto',
    padding: '0',
    overflow: 'hidden',
    backgroundColor: '#3baf36',
  },

  link: {
    float: 'right',
    display: 'block',
    textDecoration: 'none',
    color: 'white',
    padding: '30px 18px',

    ":hover": {
      backgroundColor: 'black'
    }
  },

  navbar: {
    marginRight: '350px'
  },
};

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul style={style.ul}>
            <li><Link to={"/"} style={style.brandName}><h1>EduEvents</h1></Link></li>
            <div style={style.navbar}>
              <li><Link to={"/about"} style={style.link}>About</Link></li>
              <li><Link to={"/sign_up"} style={style.link}>Sign up</Link></li>
              <li><Link to={"/sign_in"} style={style.link}>Sign in</Link></li>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Radium(Header);
