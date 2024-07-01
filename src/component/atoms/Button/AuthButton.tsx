import React from 'react'
import { useRouter } from 'next/navigation'
import styled from "styled-components";


const AuthButton = (props : any) => {
  const StyledButton = styled.button<{ $width?: string; $height: string; $margin: string}>`
    width: ${props => props.$width ?? '20rem'};
    height: ${props => props.$height ?? '3rem'};
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px #ccc;
    padding: 0.5rem;
    font-size: 1rem;
    background-color: blue;
    color: white; 
    ${props => props.$margin && `margin: ${props.$margin}`}
`;
  const router = useRouter()
  return (
    <StyledButton $width={props.width}  onClick={() => router.push(props.location)} $height={props.height} $margin='2rem 0 0 0'>
        {props.children}
    </StyledButton>
  )
}

export default AuthButton