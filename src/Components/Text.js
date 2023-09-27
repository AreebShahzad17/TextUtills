import React,{useState} from 'react'

export default function Text(props) {

    const handleUpClick =()=>{
        console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLowClick =()=>{
      console.log("Lower case was clicked");
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase","success")
  }
  const handleReverseClick = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text is Reversed","success")
  };
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces are removed","success")
  }
  const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to Clipboard","success")
  }
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    
  return (
<>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}> 
    <h1 className='my-3'>{props.heading}</h1> 
<div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8" placeholder='Enter text here' onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text}></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Upper Case</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick} >Convert to Lower Case Case</button>
<button className="btn btn-primary mx-1" onClick={handleReverseClick} >Reverse text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
<button className="btn btn-primary mx-1" onClick={handleCopy} >Copy text</button>


    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something here to preview it" }</p>
    </div>
    </> 
  )
}
