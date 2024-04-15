import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; 

function App() {
  var [value, setValue] = useState("Mas Informacion");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Projecte MME
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        ><input type='text' onChange={(e) => setValue(e.currentTarget.value)} />
          {value}
        </a>
      </header>
    </div>
  );
}//git test

export default App;
