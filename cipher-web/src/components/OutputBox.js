import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function OutputBox({result}){
    return (
        <div>
            {/* <div className='ResultText'>{result}</div> */}
            <textarea rows={10} placeholder="Your Result will be Appeared Here..!" value={result}></textarea>
            <CopyToClipboard text={result} onCopy={function(){alert("Hasil Telah Disalin ke Clipboard")}}>
                <button>Copy</button>
            </CopyToClipboard>
        </div>
    );
};

export default OutputBox;
// acdefghijklmopqrstuxyz