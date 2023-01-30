import React, { useState } from 'react';
import './InputKey.css';

function InputString(props) {
  const [text, setText] = useState('');
  function handleTextChange(event) {
      setText(event.target.value);
  }

  const [key, setKey] = useState();
  function handleKeyChange(event) {
    setKey(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.handleCompute(text, key);
  }

  return (
    <div>
      <div className="InputForm">    
        <form onSubmit={handleSubmit}>
          <div className='text'>Enter Your Text :</div>
          <textarea type="text" name='inputtext' value={text} onChange={handleTextChange} placeholder="Put Your Text Here..!" />
          <p>Input value: {text} </p>
          <div className='Key'> 
            <div className='text'>Enter Your Key :</div>
            <input type="text" name="keyString" value={key} onChange={handleKeyChange} placeholder="Key can be a string.." />
            <p>Input value: {key}</p>
          </div>  
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="OutputForm">
        <div className='IOtext'>
            <div className='text'>Result :</div>
            <textarea type='text' name='outputtext' value={props.result} placeholder="The Result Will be Aappeared Here..!"></textarea>
        </div>
      </div>
    </div>
  );
}

function InputFormula(props) {
  const [text, setText] = useState('');
  function handleTextChange(event) {
    setText(event.target.value);
  }

  const [formula, setFormula] = useState({formula1:null, formula2:null});
  function handleFormulaChange(event){
    setFormula({...formula,[event.target.name]: +event.target.value});
  }
  let mid = ` X + `;

  function handleSubmit(event) {
    event.preventDefault();
    props.handleCompute(text, formula);
  }

  return (
    <div>
      <div className="InputForm">    
        <form onSubmit={handleSubmit}>
          <div className='text'>Enter Your Text :</div>
          <textarea type="text" name='inputtext' value={text} onChange={handleTextChange} placeholder="Put Your Text Here..!" />
          <p>Input value: {text} </p>
          <div className='Key'> 
            <label>
              Enter Your Key Formula:
              <input type="text" name="formula1" value={formula.formula1} onChange={handleFormulaChange} placeholder="3" />
              {mid}
              <input type="text" name="formula2" value={formula.formula2} onChange={handleFormulaChange} placeholder="1" />
            </label>
            <p>Input value: {formula.formula1}X + {formula.formula2}</p>
          </div>  
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="OutputForm">
        <div className='IOtext'>
            <div className='text'>Result :</div>
            <textarea type='text' name='outputtext' value={props.result} placeholder="The Result Will be Aappeared Here..!"></textarea>
        </div>
      </div>  
    </div>
  );
}

function InputMatrix(props) {
  const [text, setText] = useState('');
  function handleTextChange(event) {
    setText(event.target.value);
  }

  const [el, setEl] = useState(
    {el1:null, el2:null, el3:null,
     el4:null, el5:null, el6:null,
     el7:null, el8:null, el9:null}
    );
  function handleElChange(event) {
    setEl({...el, [event.target.name]: +event.target.value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.handleCompute(text, el);
  }

  return (
    <div>
      <div className="InputForm">    
        <form onSubmit={handleSubmit}>
          <div className='text'>Enter Your Text :</div>
          <textarea type="text" name='inputtext' value={text} onChange={handleTextChange} placeholder="Put Your Text Here..!" />
          <p>Input value: {text} </p>
          <div className='Key'> 
            <div className='text'> Enter Your Matrix :</div>
            <div className='matrixRow'>
              <input type="text" name='el1' value={el.el1} onChange={handleElChange} placeholder="17" />
              <input type="text" name='el2' value={el.el2} onChange={handleElChange} placeholder="17" />
              <input type="text" name='el3' value={el.el3} onChange={handleElChange} placeholder="15" />
            </div>
            <div className='matrixRow'>
              <input type="text" name='el4' value={el.el4} onChange={handleElChange} placeholder="21" />
              <input type="text" name='el5' value={el.el5} onChange={handleElChange} placeholder="18" />
              <input type="text" name='el6' value={el.el6} onChange={handleElChange} placeholder="21" />
            </div>
            <div className='matrixRow'>
              <input type="text" name='el7' value={el.el7} onChange={handleElChange} placeholder="2" />
              <input type="text" name='el8' value={el.el8} onChange={handleElChange} placeholder="2" />
              <input type="text" name='el9' value={el.el9} onChange={handleElChange} placeholder="19" />
            </div>
            <p>Input Matrix:</p>
            <p>{el.el1} {el.el2} {el.el3}</p>
            <p>{el.el4} {el.el5} {el.el6}</p>
            <p>{el.el7} {el.el8} {el.el9}</p>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="OutputForm">
        <div className='IOtext'>
            <div className='text'>Result :</div>
            <textarea type='text' name='outputtext' value={props.result} placeholder="The Result Will be Aappeared Here..!"></textarea>
        </div>
      </div>  
    </div>
    
  );

}
export {InputString, InputFormula, InputMatrix};