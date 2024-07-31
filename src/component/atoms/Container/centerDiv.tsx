import styled from "styled-components";

export const CenterDiv = styled.div<{ $height?: string, $width?: string, $margintop?: string, $color?: string}>`
    display: flex;
    flex-direction: column;
    position: absolute
    justify-content: center;
    text-align: center;
    align-items: center;
    width: ${props => props.$width ?? '40rem'};
    height: ${props => props.$height ?? '25rem'};
    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px #ccc;
    color: ${props => props.$color ?? 'black'};
    margin: 0 auto;
    margin-top: ${props => props.$margintop ?? '10rem'};
`;

export default CenterDiv;