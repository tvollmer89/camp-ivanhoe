// Import all plugins
import * as bootstrap from 'bootstrap';

// Or import only needed plugins
// import { Tooltip as Tooltip, Toast as Toast, Popover as Popover } from 'bootstrap';

// Or import just one
// import Alert as Alert from '../node_modules/bootstrap/js/dist/alert';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Main from './components/Main';

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

let App = document.getElementById('app');

ReactDOM.render(<HelloMessage name="World" />, App);
