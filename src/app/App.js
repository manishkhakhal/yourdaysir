import React from 'react';
import './App.css';
import { BackgroundImg } from '../components/BackgroundImg/BackgroundImg';
import { Quote } from '../components/Quote/Quote';
import { Weather } from '../components/Weather/Weather';
import { Journal } from '../components/Journal/Journal';
import { LeftControl } from '../components/BackgroundImg/LeftControl';
import { RightControl } from '../components/BackgroundImg/RightControl';

function App() {
  return (
    <div className="App">
      <BackgroundImg />
      <header>
        <Weather />
      </header>
      <aside className="left-wallpaper-control wallpaper-control">
        <LeftControl />
      </aside>
      <main>
        <Journal />
      </main>
      <aside className="right-wallpaper-control wallpaper-control">
        <RightControl />
      </aside>
      <footer>
        <Quote />
      </footer>
    </div>
  );
}

export default App;
