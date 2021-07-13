import React from 'react'
import './Button.css'

const Button = ({onClick}) => {
    return (
        <button onClick={onClick} className="button_add">Add Todo</button>
    )
}

export default Button;