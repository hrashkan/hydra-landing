import React from 'react'

import "./MainTitle.css"

export default function MainTitle({ title, subtitle }) {
    return (
        <>
            <div className="advertise__title">
                <h2 className="advertise__title-heading">{title}</h2>
                {
                    subtitle ? (
                        <span className="advertise__subtitle">{subtitle}</span>
                    )
                        : ('')
                }
            </div>
            <div className="advertise__icon">
                <svg width="228" height="100" viewBox="0 0 228 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M198.833 50L157.167 50M198.833 50L182.167 66.6667M198.833 50L182.167 33.3334" stroke="#C0B7E8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M157.5 50H0" stroke="#C0B7E8" strokeWidth="3" />
                </svg>
            </div>
        </>
    )
}
