import './App.css';

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import React from 'react';
import logo from './logo.svg';

class App extends React.Component {
  componentDidMount() {
    window.Echo = new Echo({
      broadcaster: 'reverb',
      key: '5kpwmxrlto6zmji68kjf',
      wsHost: 'chat.irpsc.com',
      wsPort: 2122,
      wssPort: 2122,
      disableStats: true,
      forceTLS: false,
      encrypted: true,
      enabledTransports: ['wss', 'ws'],
      authEndpoint: 'https://chat.irpsc.com/api/broadcasting/auth',
      auth: {
        headers: {
          Authorization: 'Bearer ' + '22|m0FSiY1wQwGfnE3Y94V25P9okVmIjF5KRwSvnGhH',
          Accept: 'application/json'
        },
      },
    });
    
    window.Echo.channel('test-channel')
      .listen('.test-event', (e) => {
        console.log(e)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
