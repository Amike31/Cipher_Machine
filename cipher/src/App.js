import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {InputString, InputFormula, InputMatrix} from './components/InputKey';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GetInput type="matrix"/>
      <ShowResult />
    </div>
  );
}

function GetInput(props) {
  const [text, setText] = useState('');
  function handleTextChange(event) {
    setText(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Masukkan Text: ${text}`);
    // alert(`Input 2: ${key}`);
  }

  let inputKey;
  if (props.type === "string") {
    inputKey = <InputString />
  }
  else if (props.type === "formula") {
    inputKey = <InputFormula />
  }
  else if (props.type === "matrix"){
    inputKey = <InputMatrix />
  }

  return (
    <div className="InputForm">    
      <form onSubmit={handleSubmit}>
        <div className='IOtext'>
          <label>
            Enter Your Text:
          </label>
          <textarea type="text" value={text} onChange={handleTextChange} />
          <p>Input value: {text}</p>
        </div>
        {inputKey}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function ShowResult(props) {
  let [result, setResult] = useState('');
  result = "Dari komputasi";
  function handleResultChange(event) {
    setResult(event.target.value);
  }
  
  return(
    <div className="OutputForm">
      <div className='IOtext'>
        <label>Result:
        </label>
        <textarea value={result}></textarea>
      </div>
    </div>
  );
}


export default App;
