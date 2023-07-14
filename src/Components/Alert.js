// rfce    -->  React Function Export Component
import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (   
    <div style={{height: '50px'}}>    
    {     // now these are not open but are under a div so they needed curve bracket
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
    </div>
    }       
    </div>  // Wrap alert under div container
  )
}

export default Alert
