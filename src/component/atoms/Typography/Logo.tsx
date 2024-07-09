import styled from "styled-components";

const StyledTitle = styled.p`
    color: #e0e006;
    font-weight: bold;
    font-style: italic;
    font-size: 220%;
    margin-left: 3%
}
`;

const ColorEndTitle = styled.span`
    color: #99003d;
}
`;

function Logo() {
    return (
        <img src="/img/MuShare.png" alt="MuShare" width="200"  style={{ position: "absolute"}}/>
    )
}

export default Logo;