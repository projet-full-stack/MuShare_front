import styled from "styled-components";

const StyledTitle = styled.h1`
        font-size: 2rem;
        font-weight: bold;
        margin: 1rem;
        color: white;
`;

function Title({children = ''}) {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    );
}

export default Title;