import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
    max-width: 80%;

    figcaption {
        font-style: italic;
    }
`

export default function Figure(props) {
    const {date, importURL} = props
    return (
        <StyledFigure>
            <img src={importURL} />
            <figcaption>Picture taken on {date}</figcaption>
        </StyledFigure>            
    )
}