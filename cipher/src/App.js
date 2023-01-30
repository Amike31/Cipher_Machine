import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {InputString, InputFormula, InputMatrix} from './components/InputKey';

function App() {
  var name = 'Vigenere Standard';
  var inputType;
  if (name==='Hill') {
    inputType = 'matrix';
  }
  else if (name==='Affine') {
    inputType = 'formula';
  }
  else {
    inputType = 'string';
  }
    
  return (
    <div className="App">
      <Navbar />
      <div className='encryptPart'>
        <h1>Encrypt Your Plaintext</h1>
        <GetInput type={inputType}/>
        <ShowResult />
      </div>
      <br />
      <div className='decryptPart'>
        <h1>Decrypt Your Ciphertext</h1>
        <GetInput type={inputType}/>
        <ShowResult />
      </div>
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
        <div className='text'>Enter Your Text :</div>
        <textarea type="text" value={text} onChange={handleTextChange} />
        <p>Input value: {text}</p>
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
        <div className='text'>Result :</div>
        <textarea value={result}></textarea>
      </div>
    </div>
  );
}

export default App;