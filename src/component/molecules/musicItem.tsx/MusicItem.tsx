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

const StyledTitle = styled.div`
    color: #e6e600;
    font-weight: bold;
    font-size: 120%;
}`;

const StyledAuthor = styled.div`
    font-size: 90%;
}`;

const StyledUser = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 80%;
    font-weight: bold;
    color: #99003d;
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
margin-left: 175px;
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
            <StyledTitle>{title}</StyledTitle>
            <StyledAuthor>{author}</StyledAuthor>
            <StyledUser>Ajoutée par : {username}</StyledUser>
            <StyledDivider/>
            {hover && <StyledPlayer>
                    <Icon icon='play_circle' hover="white"/>                
                </StyledPlayer>
            }
        </StyledDiv>
        
    )
}

export default MusicItem;