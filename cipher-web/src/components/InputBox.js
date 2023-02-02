import React from 'react';

function InputBox({text, setText}){
    function handleTextChange(event) {
        setText(event.target.value);
    }
    return <textarea onChange={handleTextChange} value={text} rows={8} cols={30} placeholder="Enter Your Text Here..!"></textarea>
}

export default InputBox;