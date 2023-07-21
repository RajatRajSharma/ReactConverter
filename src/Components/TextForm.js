import React, {useState} from 'react' 

document.body.style.backgroundColor = "#DEB887"; // >>>>  Default background color

export default function TextForm(props) {
    const handleUpClick = ()=>{             
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick = ()=>{            
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick = ()=>{             
      let newText = '';
      setText(newText);
      props.showAlert("All Text is Cleared from TextBox ","danger");
    }
    const handleCopy = () => {            
      navigator.clipboard.writeText(text);  //new way to copy
      props.showAlert("All the Text is Copied","info");
    }
    const handleExtraSpace = () => {             
      let newText = text.split(/[ ]+/);
      setText(newText.join(""))
      props.showAlert("Extra Space Removed","primary");
    }
    const handleOnChange = (event)=>{  
        setText(event.target.value);  //This allows us to make changes and even save it
      }
    const [text, setText] = useState('Enter your Thoughts');
      // Updation is done by setText of handleOnChange function
  return (
    <>
    <div className=" container" style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h2  className='mb-4'>{props.heading}</h2>
      <form>
      <div className="mb-3">
        <label htmlFor="TextArea" className="form-label">TextArea for Thoughts</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#008080':'	#F4A460', color: props.mode==='dark'?'white':'#042743'}} id="TextArea" rows="6"></textarea>
      </div>                                             
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick} type="button">Convert to Uppercase</button> 
                                                                  {/* Here type="button" will not let screen refreshed on clicking */}
      <button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleLowClick} type="button">Convert to Lowercase</button>                             
      
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleClearClick} type="button">Clear Text</button>                             

      <button disabled={text.length===0} className="btn btn-secondary mx-2 my-1" onClick={handleCopy} type="button">Copy Text</button>                             

      <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleExtraSpace} type="button">Remove Extra spaces</button>                             

        </form>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>  

      <h3>Your text Summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and {text.length} characters</p>
          {/* it will split white spaces one or more */}
{/* It will not count enter to next line as a word and word will be counted after first letter*/}
      <p>Average time required to read this is {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} min</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to Preview !!!"}</p>
    </div>
    </>   
  )
}
