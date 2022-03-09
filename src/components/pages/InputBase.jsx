import React from 'react'

const InputBase = ({name,className,...props}) => {
  return (
      <>
        <label className="h4 mt-2" htmlFor="" >{name}</label>
        <input className={className} {...props} required />
      </>

  )
}

export default InputBase