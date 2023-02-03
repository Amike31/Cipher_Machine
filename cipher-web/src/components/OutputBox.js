import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileSaver from 'file-saver';

function OutputBox({result, fileType}){
    function handleChange(event) {
        result = result || {};
    }
    function handleSave() {
        const buffer = Uint8Array.from(result, c => c.charCodeAt(0));
        const blob = new Blob([buffer], {type: fileType});
        let name = 'result.' + fileType;
        console.log(fileType);
        FileSaver.saveAs(blob, {name});
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