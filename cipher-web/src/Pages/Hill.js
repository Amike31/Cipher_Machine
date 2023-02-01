import { useState } from 'react';
import { InputMatrix } from '../components/Form';

function Hill() {
  const [resultP, setResultP] = useState('');
  const [resultC, setResultC] = useState('');

  return (
    <div className="App">
      <div className='cryptPart'>
        <h1>Encrypt Your Plaintext</h1>
        <InputMatrix children="ENCRYPT"
         result={resultP}
         endpoint="hill/encode"
         setResult={setResultP} />
      </div>
      <br />
      <div className='cryptPart'>
        <h1>Decrypt Your Plaintext</h1>
        <InputMatrix children="DECRYPT"
         result={resultC}
         endpoint="hill/decode"
         setResult={setResultC} />
      </div>
    </div>
  );
}

export default Hill;