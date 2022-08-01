import React from 'react'
import './inputBox.css'


const InputBox = props=>{

   
    return (
        <>
        <input type={props.type} name={props.text} placeholder={props.placeholder} 
        // onChange={onChange}
        />
        </>
    )
}

export default InputBox