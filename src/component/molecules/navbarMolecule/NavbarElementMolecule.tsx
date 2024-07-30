import Typography from "@/component/atoms/Typography";
import styled from "styled-components";
import Media from "@/component/atoms/Media" 
import { useState } from "react";
import { cursorTo } from "readline";
import { useRouter } from 'next/navigation'

const StyledDiv = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    margin-left: 10px;
    margin-bottom: 5px;
    margin-top: 5px;
    max-width: 200px;
    &:hover {
        cursor: pointer;
    }
}
`;

const NavbarElementMolecule = ({icon = '', alt = '', text = '', location=''}) => {
    const router = useRouter();
    const [hoverColor, setHoverColor] = useState("#b3b3b3");
    return (
    <>
        <StyledDiv onMouseOver={() => {
             setHoverColor('white');
             
            }}
            onMouseOut={
                () => {
                    setHoverColor('#b3b3b3');
                }
            }
            onClick={() => {
                router.push(location);
            }
            }>
            <Media.Icon icon={icon} hover={hoverColor}/>
            <Typography.NavbarText hover={hoverColor}>{text}</Typography.NavbarText>
        </StyledDiv>

    </>
    )
}

export default NavbarElementMolecule;