import React from 'react'

import "./GuidanceStep.css"

export default function GuidanceStep({ step }) {
    return (
        <div className="guidance-box">
            <span className="guidance__step">{step}</span>
        </div>
    )
}
