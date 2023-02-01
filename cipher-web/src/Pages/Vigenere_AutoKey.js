import { useState } from 'react';
import { InputString } from '../components/Form';

function AutoKey() {
  const [resultP, setResultP] = useState('');
  const [resultC, setResultC] = useState('');

  return (
    <div className="App">
      <div className='cryptPart'>
        <h1>Encrypt Your Plaintext</h1>
        <InputString children="ENCRYPT"
         result={resultP}
         endpoint="autoVigenere/encode"
         setResult={setResultP} />
      </div>
      <br />
      <div className='cryptPart'>
        <h1>Decrypt Your Plaintext</h1>
        <InputString children="DECRYPT"
         result={resultC}
         endpoint="autoVigenere/decode"
         setResult={setResultC} />
      </div>
    </div>
  );
}

export default AutoKey;