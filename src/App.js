import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
      const updateWindowWidth = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }

      window.addEventListener('resize', updateWindowWidth);

      return () => {
        window.removeEventListener('resize', updateWindowWidth)
      }
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          { width } x { height }
        </p>
      </header>
    </div>
  );
}

export default App;
