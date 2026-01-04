import React from 'react'

const Option = ({value,text}) => {
    console.log(value);
    
  return (
   <>
   <option value={`${value}`} >{text}</option>
   </>
  )
}

export default Option