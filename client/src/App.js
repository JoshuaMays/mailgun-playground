import React, { Component } from 'react';
import './App.css';

import MailGunner from './components/MailGunner';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MailGunner/>
      </div>
    );
  }
}

export default App;
