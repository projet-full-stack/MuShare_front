import React from 'react'
import styled from "styled-components";

const StyledLink = styled.a`
    color: blue;
    text-decoration: underline;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 2rem;
}
`;

function Link({href='', children=''}) {
  return (
    <StyledLink href={href}>{children}</StyledLink>
  )
}

export default Link