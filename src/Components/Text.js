import React, { useState } from "react";

export default function Text(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleReverseClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text is Reversed", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra Spaces are removed", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to Clipboard", "success");
  };

  const handleCapitalizeClick = () => {
    let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
    setText(newText);
    props.showAlert("Text is Capitalized", "success");
  };

  const handleRemovePunctuation = () => {
    let newText = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
    setText(newText);
    props.showAlert("Punctuation Removed", "success");
  };

  const handleFindReplace = () => {
    let findText = prompt("Enter the word to find:");
    let replaceText = prompt("Enter the word to replace with:");
    if (findText !== null && replaceText !== null) {
      let newText = text.replace(new RegExp(findText, "g"), replaceText);
      setText(newText);
      props.showAlert("Text Replaced", "success");
    }
  };

  const handleTitleCaseClick = () => {
    let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setText(newText);
    props.showAlert("Converted to Title Case", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            placeholder="Enter text here"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to Lower Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>
          Reverse Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeClick}>
          Capitalize Each Word
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemovePunctuation}>
          Remove Punctuation
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleFindReplace}>
          Find and Replace
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTitleCaseClick}>
          Convert to Title Case
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length}{" "}
          Minutes to read
        </p>
        <p>
          {
            text.replace(/\s+/g, '').length
          } characters (excluding spaces)
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
