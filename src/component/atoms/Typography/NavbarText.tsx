import styled from "styled-components";

const StyledNavbarText = styled.p<{hover:string}>`
    font-weight: bold;
    font-size: 100%;
    margin-left: 20px;
    ${props => props.hover && `color: ${props.hover};`}
}
`;

function NavbarText({children='', hover=''}) {
    return (
        <StyledNavbarText hover={hover}>
            {children}
        </StyledNavbarText>
    )
}

export default NavbarText;