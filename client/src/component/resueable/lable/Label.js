import React from 'react'
import './label.css'

const Label = props =>{
    return (
    <>
    <label for={props.for}>{props.text}</label>
    </>
    )
}
export default Label