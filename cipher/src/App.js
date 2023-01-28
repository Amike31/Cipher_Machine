import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar />
      <GetInput />
      <ShowResult />
    </div>
  );
}

function GetInput(props) {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleKeyChange(event) {
    setKey(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Input 1: ", text);
    console.log("Input 2: ", key);
  }

  return (
    <div className="InputForm">    
      <form onSubmit={handleSubmit}>
        <label>Enter Your text:</label>
        <input type="text" value={text} onChange={handleTextChange} />
        <p>Input value: {text}</p>
        <br />
        <label>Enter Your Key:</label>
        <input type="text" value={key} onChange={handleKeyChange} />
        <p>Input value: {key}</p>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function ShowResult(props) {
  const [result, setResult] = useState('');
  function handleResultChange(event) {
    setResult(event.target.value);
  }
  
  return(
    <div className="OutputForm">
      <label>Result:</label>
      <input values = {result}></input>
    </div>
  );
}


export default App;
