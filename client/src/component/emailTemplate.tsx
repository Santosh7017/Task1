import React, { useState } from 'react'

const EmailTemplate = () => {
    const [template, setTemplate] = useState('this is template');
  return (
    <>
    <div>This is demo code</div>
    <div>{template}</div>
    </>
  )
}

export default EmailTemplate