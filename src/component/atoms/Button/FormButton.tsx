import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ $width?: string; $height: string; $margin: string }>`
    width: ${props => props.$width ?? '20rem'};
    height: ${props => props.$height ?? '3rem'};
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1rem;
    border-radius: 5px;
    background-color: blue;
    color: white;
    ${props => props.$margin && `margin: ${props.$margin}`}
`;

const FormButton = (props: any) => {
    return (
        <StyledButton onClick={props.onClick} $margin={props.margin} $width={props.width} $height={props.height}>
            {props.children}
        </StyledButton>
    )
}

export default FormButton;