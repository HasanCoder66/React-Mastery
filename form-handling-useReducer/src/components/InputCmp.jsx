import React from 'react'

const InputCmp = ({placeholder, type, handler, field}) => {
  return (
    <div>

        <input type={type} placeholder={placeholder} 
        onChange={(e) => {
           handler({
            field : field,
            value : e.target.value
           })
        }}
            
                />
    </div>
  )
}

export default InputCmp