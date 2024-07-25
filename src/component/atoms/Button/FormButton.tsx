import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 20rem;
    height: 3rem;
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1rem;
    border-radius: 5px;
`;

const FormButton = (props: any) => {
    return (
        <StyledButton onClick={props.onClick}>
            {props.children}
        </StyledButton>
    )
}

export default FormButton;