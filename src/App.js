import React from 'react';
import video from './videos/sculpture.mp4';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Art Videos</h1>
      </header>
      <div>
        <video src={video} controls height={200}></video>
      </div>
    </div>
  );
}

export default App;
