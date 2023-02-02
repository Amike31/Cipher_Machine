import { useState } from 'react';
import { InputString } from '../components/Form';

function Playfair() {
  const [resultP, setResultP] = useState('');
  const [resultC, setResultC] = useState('');
  const title1 = `<<-  Encryption  ->>`;
  const title2 = `<<-  Decryption  ->>`;
  
  return (
    <div className="App">
      <h1>PLAYFAIR CIPHER</h1>
      <InputString children="ENCRYPT"
        result={resultP}
        endpoint="playfair/encode"
        setResult={setResultP}
        title={title1}/>
      <br />
      <InputString children="DECRYPT"
        result={resultC}
        endpoint="playfair/decode"
        setResult={setResultC}
        title={title2}/>
    </div>
  );
}

export default Playfair;