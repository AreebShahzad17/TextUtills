
import React,{ useState } from 'react'

export default function About() {
const [myStyle,setMyStyle] = useState({
  color : "black",
  backgroundColor:"white" ,
  
})
const [btnText , setBtnText] = useState("Enable Dark Mode")

const toggleStyle = () =>{
  if(myStyle.color === "black"){
    setMyStyle({
      color : "white",
  backgroundColor:"black" ,
  border:" 1px solid white"
    })
    setBtnText("Enable Light Mode")
  }
  else{
    setMyStyle({
      color : "black",
      backgroundColor:"white" 
    })
    setBtnText("Enable Dark Mode")
  }
}


  return (
    <div className='container my-3' style={myStyle}>
      <h1> About Us</h1>
    <div class="list-group">
  <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
    The current button
  </button>
  <button type="button" className="list-group-item list-group-item-action" style={myStyle}>A second button item</button>
  <button type="button" className="list-group-item list-group-item-action" style={myStyle}>A third button item</button>
  <button type="button" className="list-group-item list-group-item-action" style={myStyle}>A fourth button item</button>
  <button type="button" className="list-group-item list-group-item-action" disabled style={myStyle}>A disabled button item</button>
</div>
<div className="container my-3">
<button type="button" className="btn btn-primary" onClick={toggleStyle} >{btnText}</button>
</div>

    </div>
  )
}
