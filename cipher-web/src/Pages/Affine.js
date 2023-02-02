import { useState } from 'react';
import { InputFormula } from '../components/Form';

function Playfair() {
  const [resultP, setResultP] = useState('');
  const [resultC, setResultC] = useState('');
  const title1 = `<<-  Encryption  ->>`;
  const title2 = `<<-  Decryption  ->>`;
  
  return (
  <div className="App">
    <h1>AFFINE CIPHER</h1>
      <InputFormula children="ENCRYPT"
        result={resultP}
        endpoint="affine/encode"
        setResult={setResultP}
        title={title1} />
      <br />
      <InputFormula children="DECRYPT"
        result={resultC}
        endpoint="affine/decode"
        setResult={setResultC}
        title={title2} />
    </div>
  );
}

export default Playfair;