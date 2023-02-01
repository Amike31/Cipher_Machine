import { useState } from 'react';
import { InputFormula } from '../components/Form';

function Playfair() {
  const [resultP, setResultP] = useState('');
  const [resultC, setResultC] = useState('');

  return (
  <div className="App">
      <div className='cryptPart'>
        <h1>Encrypt Your Plaintext</h1>
        <InputFormula children="ENCRYPT"
         result={resultP}
         endpoint="affine/encode"
         setResult={setResultP} />
      </div>
      <br />
      <div className='cryptPart'>
        <h1>Decrypt Your Plaintext</h1>
        <InputFormula children="DECRYPT"
         result={resultC}
         endpoint="affine/decode"
         setResult={setResultC} />
      </div>
    </div>
  );
}

export default Playfair;