import React from 'react'

export default function Figure(props) {
    const {date, importURL} = props
    return (
        <figure>
            <img src={importURL} />
            <figcaption>Picture taken on {date}</figcaption>
        </figure>            
    )
}