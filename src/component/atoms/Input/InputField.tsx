import React, { forwardRef, useState } from 'react'
import styled from 'styled-components';

const StyledInput = styled.input<{ $width?: string; $height: string; $margin: string; $disabled: boolean }>`
    width: ${props => props.$width ?? '20rem'};
    height: ${props => props.$height ?? '3rem'};
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
    // box-shadow: 1px 1px 5px 1px #ccc;
    padding: 0.5rem;
    font-size: 1rem;
    ${props => props.$margin && `margin: ${props.$margin};`}
     ${props => props.$disabled && `color: white;`}


`;
const InputField = forwardRef(function InputField(props: any, ref: any) {
    
    return (
        <>
            <StyledInput ref={ref} $margin={props.margin} $width={props.width} $height={props.height} type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} $disabled={props.disabled}
            />
        </>
    )
})

export default InputField