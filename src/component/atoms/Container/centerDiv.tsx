import styled from "styled-components";

export const CenterDiv = styled.div<{ $height?: string, $width?: string, $margintop?: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${props => props.$width ?? '40rem'};
    height: ${props => props.$height ?? '25rem'};
    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px #ccc;
    margin: 0 auto;
    margin-top: ${props => props.$margintop?? '10rem'};
`;

export default CenterDiv;