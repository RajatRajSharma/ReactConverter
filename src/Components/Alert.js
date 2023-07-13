// rfce    -->  React Function Export Component
import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (   // This Syntax is similar to if props.alert is false then apply <div>
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
      {/*    // if we are giving timer to alert function then there is no need of " X " button in Alert .
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      */}
    </div>
  )
}

export default Alert
