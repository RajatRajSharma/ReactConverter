// rfc     React function based component
import React, {useState} from 'react' 
// We imported "useState" hook from react

export default function TextForm(props) {
    const handleUpClick = ()=>{             // UpperCase function
        console.log("Uppercase was Clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick = ()=>{             // LowerCase function
      console.log("Lowercase was Clicked"+text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick = ()=>{             // Clear function
      console.log("Clear text was Clicked"+text);
      let newText = '';
      setText(newText);
      props.showAlert("All Text is Cleared from TextBox ","danger");
    }
    const handleCopy = () => {             // Copy function
      console.log("I copy of text has happened");
      var text = document.getElementById("TextArea");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("All the Text is Copied","info");
    }
    const handleExtraSpace = () => {             // Remove Extra spaces function
      let newText = text.split(/[ ]+/);
      setText(newText.join(""))
      props.showAlert("Extra Space Removed","primary");
    }
    const handleOnChange = (event)=>{  // create an event out of it
        console.log("On Change");
        setText(event.target.value);  //This allows us to make changes and even save it
      }
    const [text, setText] = useState('Enter your Ideology');
// Datatype of entered data is text and 'Enter your Ideology' is the default text for TextArea Box
// We can't change text directly but the updation is done through "setText" function
  return (
    <>
    <div className=" container" style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h2>{props.heading}</h2>
      <form>
      <div className="mb-3">
        <label htmlFor="TextArea" className="form-label">TextArea for Ideology</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#008080':'	#F4A460', color: props.mode==='dark'?'white':'#042743'}} id="TextArea" rows="6"></textarea>
      </div>                                             {/* Calling on change function */}
                                                        {/* Style is written in {___} and then second {__} is for obj */}
      <button className="btn btn-primary mx-2" onClick={handleUpClick} type="button">Convert to Uppercase</button> 
                                                                  {/* Here type="button" will not let screen refreshed on clicking */}
      <button className="btn btn-info mx-2" onClick={handleLowClick} type="button">Convert to Lowercase</button>                             
      
      <button className="btn btn-danger mx-2" onClick={handleClearClick} type="button">Clear Text</button>                             

      <button className="btn btn-secondary mx-2" onClick={handleCopy} type="button">Copy Text</button>                             

      <button className="btn btn-success mx-2" onClick={handleExtraSpace} type="button">Remove Extra spaces</button>                             

        </form>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>  
            {/* */}
      <h3>Your text Summary</h3>
      <p>{text.split(" ").length} and {text.length} characters</p>
        {/* text.split(" ").length will divide a paragraph on basis of " " and count them*/}
      <p>Average time required to read this is {0.008*text.split(" ").length} min</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>   
  )
}
