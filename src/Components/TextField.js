import React, { useState } from 'react'

export default function TextField(props) {
    const [text, setText] = useState("");

    const upClick = () => {
        let val = text.toUpperCase();
        setText(val);
        console.log("Up clicked");
        props.showAlert("Converted To UpperCase!" , "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const downClick = () => {
        let val = text.toLowerCase();
        setText(val);
        console.log("Down clicked");
        props.showAlert("Converted To LowerCase!" , "success");
    }

    const clearClick = () => {
        setText("");
        console.log("Clear clicked");
        props.showAlert("Cleared Text!" , "success");
    }

    const copyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied To Clipboard!" , "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces","success");
    }

    // const words = () => {
    //     if(text.length === 0){
    //         return 0;
    //     }else if(text.endsWith(" ")){
    //         return text.split(" ").length - 1;
    //     }else{
    //         return text.split(" ").length;
    //     }
    // }

    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="8" style={{background: props.mode === "dark"?"#144181":"white" , color: props.mode === "dark"?"white":"black"}}></textarea>
                </div>
                <button type="button" disabled={text.length===0} className="btn btn-primary" onClick={upClick}>Convert To Uppercase</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={downClick}>Convert To Lowercase</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={clearClick}>Clear Text</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={copyClick}>Copy Text</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container">
                <h2 className="my-3">Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{ return element.length!==0 }).length} Minutes Read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing To Preview"}</p>
            </div>
        </>
    )
}
