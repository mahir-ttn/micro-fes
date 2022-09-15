import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Box from 'mf2/Box';

const Button = React.lazy(() => import('mf1/btn'));

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>

    <React.Suspense fallback="Loading Button">
      <Button title="Click Me from MF1 Component" />
      <Box />
    </React.Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
