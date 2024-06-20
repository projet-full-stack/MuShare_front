import styled from 'styled-components';

export const StyledInput = styled.input<{ $width?: string; $height: string; $margin: string }>`
    width: ${props => props.$width ?? '20rem'};
    height: ${props => props.$height ?? '3rem'};
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px #ccc;
    padding: 0.5rem;
    font-size: 1rem;
    ${props => props.$margin && `margin: ${props.$margin}`}

`;

export default StyledInput; 