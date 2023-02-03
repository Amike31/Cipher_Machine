import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileSaver from 'file-saver';

function OutputBox({result}){
    function handleChange(event) {
        result = result || {};
    }
    function handleSave() {
        const blob = new Blob([result], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "result.txt");
      }

    return (
        <div className='out-form'>
            <div className='btns'>
                <div>
                    <CopyToClipboard text={result} onCopy={function(){alert("Hasil Telah Disalin ke Clipboard")}}>
                        <button>Copy</button>
                    </CopyToClipboard>
                </div>
                <div>
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>  
            <div>
                <div className='text'>Your Result:</div>
                <textarea onChange={handleChange} rows={8} cols={30} placeholder="Your Result will be Appeared Here..!" value={result} />
            </div>
            
        </div>
        
    );
};

export default OutputBox;
// acdefghijklmopqrstuxyz