import React from 'react'
import { Link } from 'react-router-dom'

import "./MainButton.css"

export default function MainButton({ size, text }) {
    return (
        <Link to="https://react.dev/" className={`primary-button ${size === '1x' ? 'primary-button-sm' : 'primary-button-md'}`}>
            {text}
        </Link>
    )
}
