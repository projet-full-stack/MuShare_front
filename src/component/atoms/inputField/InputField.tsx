import React from 'react'
import StyledInput from './StyledInput'


function InputField({ placeholder = "", ...props} ) {
    return (
        <>
            <StyledInput $margin={props.margin} $width={props.width} $height={props.height} type={props.type} placeholder={placeholder} />
        </>
    )
}

export default InputField