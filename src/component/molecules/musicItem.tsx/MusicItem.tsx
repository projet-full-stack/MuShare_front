import { Icon } from "@/component/atoms/Media";
import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    &:hover {
        cursor: pointer;
    }
}
`;

const StyledTitle = styled.div<{hover:boolean}>`
    color: #e6e600;
    font-weight: bold;
    font-size: 120%;
    ${props => props.hover && `opacity: 80%;`}
}`;

const StyledAuthor = styled.div<{hover:boolean}>`
    font-size: 90%;
    ${props => props.hover && `opacity: 80%;`}
}`;

const StyledUser = styled.div<{hover:boolean}>`
    display: flex;
    justify-content: flex-end;
    font-size: 80%;
    font-weight: bold;
    color: #99003d;
    ${props => props.hover && `opacity: 80%;`}
}
`;

const StyledDivider = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    border-top: 1px solid grey;
`;

const StyledPlayer = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
margin-left: 180px;
margin-top: 7px;    
}
`;

function MusicItem({title='', author='', username=''}) {
    const [hover, setHover] = useState(false);
    return (
        <StyledDiv onMouseOver={() => {
            setHover(true);
        }}
        onMouseOut={() => {
            setHover(false);
        
        }}
        >
            <StyledTitle hover={hover}>{title}</StyledTitle>
            <StyledAuthor hover={hover}>{author}</StyledAuthor>
            <StyledUser hover={hover}>Ajoutée par : {username}</StyledUser>
            <StyledDivider/>
            {hover && <StyledPlayer>
                    <Icon icon='play_circle' hover="white"/>                
                </StyledPlayer>
            }
        </StyledDiv>
        
    )
}

export default MusicItem;