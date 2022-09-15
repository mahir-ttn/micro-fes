import React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/TextBox';

import './index.css';

const App = () => (
  <div className="container">
    <div>Name: mf2</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>

    <Box />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
