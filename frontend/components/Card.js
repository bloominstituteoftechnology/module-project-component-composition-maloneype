import React from 'react'
import Figure from './Figure'

export default function Card(props) {
    const {title, text, importURL, date} = props
    return (
        <div className='card'>
            <h2>{title}</h2>
            <p>{text}</p>
            <Figure date={date} importURL={importURL} />
        </div>

    )
}