import styled from "styled-components";

export const RandomDiv = styled.div<{ $height?: string, $width?: string, $margin?: string, $color?: string }>`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: ${props => props.$width ?? '40rem'};
    height: ${props => props.$height ?? '25rem'};
    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px #ccc;
    margin: ${props => props.$margin ?? 'start'};
    color: ${props => props.$color ?? 'black'};
    padding: 1rem;
`;

export default RandomDiv;