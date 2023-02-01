import { useState } from 'react';
import { InputString } from '../components/Form';

function Extended() {
  const [textP, setTextP] = useState('');
  const [keyP, setKeyP] = useState('');
  const [resultP, setResultP] = useState('');

  function handleComputeP(text,key) {
    setTextP(text);
    setKeyP(key);
    setResultP(textP+` `+keyP);
  }
  
  const [textC, setTextC] = useState('');
  const [keyC, setKeyC] = useState('');
  const [resultC, setResultC] = useState('');

  function handleComputeC(text,key) {
    setTextC(text);
    setKeyC(key);
    setResultC(textC+` `+keyC);
  }

  return (
    <div className="App">
      <div className='encryptPart'>
        <h1>Encrypt Your Plaintext</h1>
        <InputString handleCompute={handleComputeP} result={resultP} />
      </div>
      <br />
      <div className='decryptPart'>
        <h1>Decrypt Your Ciphertext</h1>
        <InputString handleCompute={handleComputeC} result={resultC} />
      </div>
    </div>
  );
}

export default Extended;