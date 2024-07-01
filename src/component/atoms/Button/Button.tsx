import React from 'react'
import { StyledButton } from './StyledButton'

function Button({ onClickCallback = () => {} , ...props}) {
  return (
    <StyledButton $width={props.width} $height={props.height} $margin='2rem 0 0 0'>
        {props.children}
    </StyledButton>
  )
}

export default Button