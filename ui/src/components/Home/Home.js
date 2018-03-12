import React from 'react';

import EventDisplay from './EventDisplay';

const style = {

  body: {
    position: 'relative',
    backgroundColor: 'lightgray',
    width: '100%',
    height: '100vh'
  },

  headlineContainer: {
    backgroundColor: '#999999',
    height: '100px',
  },

  headline: {
    color: 'white',
    position: 'relative',
    marginLeft: '350px',
    top: '35%'
  }
}

class Home extends React.Component {
  render() {
    return (
      <div style={style.body}>
        <div style={style.headlineContainer}>
          <h4 style={style.headline}>A tool for easier learning</h4>
        </div>
        <EventDisplay />
      </div>
    );
  }
}

export default Home;
