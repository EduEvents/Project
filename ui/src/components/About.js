import React from 'react';

import SubHeader from './SubHeader';

const style = {

  body: {
    position: 'relative',
    backgroundColor: 'lightgray',
    width: '100%',
    height: '100vh'
  }
}

const About = () => {
  return (
    <div style={style.body}>
      <SubHeader subheader="About" />
    </div>
  );
}

export default About;
