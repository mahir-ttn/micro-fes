import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

import './index.css';

const App = () => (
  <div className="container">
    <div>Name: mf1</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Button title="Click to show alert" />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
