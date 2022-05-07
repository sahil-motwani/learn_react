import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to upper case!','success');
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
    props.showAlert('cleared text!','success');
  };
  const handleCopy = ()=>{
    let txt=document.getElementById('exampleFormControlTextarea1');
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showAlert('text copied to clipboard!','success');
  };
  return (
    <>
      <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="exampleFormControlTextarea1"
            rows="8" 
            style={{backgroundColor : props.mode === 'dark'?'grey':'white',color : props.mode === 'dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUp}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          copy text
        </button>
      </div>
      <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>
          {text === "" ? "0" : text.trim().split(" ").length} word, {text.length-(text.split(" ").length-1)} characters
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
