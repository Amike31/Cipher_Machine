import React, { useState } from 'react';
import Button from './Button';
import InputBox from './InputBox';
import OutputBox from './OutputBox';

function InputString({children, endpoint, setResult, result}) {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  function handleTextChange(event) {
    setKey(event.target.value);
  }

  return (
    <div>
      <div className="InputForm">    
        <div className='text'>Enter Your Text :</div>
        <InputBox text={text} setText={setText}/>
        <p>Input value: {text} </p>
        <div className='Key'> 
          <div className='text'>Enter Your Key :</div>
          <textarea onChange={handleTextChange} value={key} rows={10} placeholder="Key Can be A String..!" />
          <p>Input value: {key}</p>
        </div>  
        <Button children={children} endpoint={endpoint} text={text} kunci={key} setResult={setResult} />
      </div>
      <div className="OutputForm">
        <OutputBox result={result} />
      </div>
    </div>
  );
}

function InputFormula({children, endpoint, setResult, result}) {
  const [text, setText] = useState('');
  const [formula, setFormula] = useState({formula1:'', formula2:''});
  function handleFormulaChange(event){
    setFormula({...formula,[event.target.name]: +event.target.value});
  }
  let mid = ` X + `;

  return (
    <div>
      <div className="InputForm">    
          <div className='text'>Enter Your Text :</div>
          <InputBox text={text} setText={setText}/>
          <p>Input value: {text} </p>
          <div className='Key'> 
            <label>
              Enter Your Key Formula:
              <input type="number" name='formula1' value={formula.formula1} onChange={handleFormulaChange} placeholder="3" />
              {mid}
              <input type="number" name='formula2' value={formula.formula2} onChange={handleFormulaChange} placeholder="1" />
            </label>
            <p>Input value: {formula.formula1}X + {formula.formula2}</p>
          </div>  
          <Button children={children} endpoint={endpoint} text={text} kunci={formula} setResult={setResult} />
      </div>
      <div className="OutputForm">
        <OutputBox result={result} />
      </div>  
    </div>
  );
}

function InputMatrix({children, endpoint, setResult, result}) {
  const [text, setText] = useState('');
  const [el, setEl] = useState(
    {el1:'', el2:'', el3:'',
     el4:'', el5:'', el6:'',
     el7:'', el8:'', el9:''}
    );
  function handleElChange(event) {
    setEl({...el, [event.target.name]: +event.target.value});
  }

  return (
    <div>
      <div className="InputForm">    
          <div className='text'>Enter Your Text :</div>
          <InputBox text={text} setText={setText}/>
          <p>Input value: {text} </p>
          <div className='Key'> 
            <div className='text'> Enter Your Matrix :</div>
            <div className='matrixRow'>
              <input type='number' name='el1' value={el.el1} onChange={handleElChange} placeholder="17" />
              <input type='number' name='el2' value={el.el2} onChange={handleElChange} placeholder="17" />
              <input type='number' name='el3' value={el.el3} onChange={handleElChange} placeholder="5" />
            </div>
            <div className='matrixRow'>
              <input type='number' name='el4' value={el.el4} onChange={handleElChange} placeholder="21" />
              <input type='number' name='el5' value={el.el5} onChange={handleElChange} placeholder="18" />
              <input type='number' name='el6' value={el.el6} onChange={handleElChange} placeholder="21" />
            </div>
            <div className='matrixRow'>
              <input type='number' name='el7' value={el.el7} onChange={handleElChange} placeholder="2" />
              <input type='number' name='el8' value={el.el8} onChange={handleElChange} placeholder="2" />
              <input type='number' name='el9' value={el.el9} onChange={handleElChange} placeholder="19" />
            </div>
            <p>Input Matrix:</p>
            <p>{el.el1} {el.el2} {el.el3}</p>
            <p>{el.el4} {el.el5} {el.el6}</p>
            <p>{el.el7} {el.el8} {el.el9}</p>
          </div>
          <Button children={children} endpoint={endpoint} text={text} kunci={el} setResult={setResult} />        
      </div>
      <div className="OutputForm">
        <OutputBox result={result} />
      </div>  
    </div>
    
  );
}

export {InputString, InputFormula, InputMatrix};