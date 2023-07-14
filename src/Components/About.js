import React from 'react'  // Import React & useState

export default function About(props) {
    
return (
<div className="container" style={{backgroundColor: props.mode==='dark'?'#003030':'#DEB887', color: props.mode==='dark'?'white':'#042743'}}>
    <h3 className='my-2'>About our company</h3>
    <div className="accordion" id="accordionExample">

    <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#005050':'#CD853F', color: props.mode==='dark'?'white':'#042743'}}>
        <h2 className="accordion-header">
        <button className="accordion-button" style={{backgroundColor: props.mode==='dark'?'#008080':'#F4A460', color: props.mode==='dark'?'white':'#042743'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your text </strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">  
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
        </div>
        </div>
    </div>
    <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#005050':'#CD853F', color: props.mode==='dark'?'white':'#042743'}}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark'?'#008080':'#F4A460', color: props.mode==='dark'?'white':'#042743'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use </strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#005050':'#CD853F', color: props.mode==='dark'?'white':'#042743'}}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark'?'#008080':'#F4A460', color: props.mode==='dark'?'white':'#042743'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatibility </strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc
        </div>
        </div>
    </div>
    </div>
</div>
  )
}




