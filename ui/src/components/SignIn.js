import React from 'react';

var style = {

  body: {
    position: 'relative',
    backgroundColor: 'lightgray',
    width: '100%',
    height: '100vh'
  },

  box: {
    margin: '0 auto',
    width: '700px',
    height: '400px',
    top: '20%',
    border: 'solid 2px black'
  },

  container: {
    top: '50%',
    left: '50%',
  },

  fields: {
    listStyleType: 'none'
  }
}

const SignIn = () => {
  return (
    <div style={style.body}>
      <div style={style.box}>
        <div style={style.container}>
          <ul>
            <div style={style.fields}>
              <li><input type="text" placeholder="username" /></li>
              <li><input type="password" placeholder="password" /></li>
            </div>
            <li><button>Login</button></li>
          </ul>
          <ul>
            <div>
              <li><a>Forgot your password?</a></li>
              <li><a>Create account</a></li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
