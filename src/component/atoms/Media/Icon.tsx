import { MaterialSymbol } from "react-material-symbols";
import styled from "styled-components";
import { useState } from "react";


const StyledIcon = styled.span<{hover:string}>`
    width: 25px;
    height: 25px;
}
`;

function Icon({icon="", hover=''}: {icon: string, hover: string}) {
    return (
        <MaterialSymbol icon={icon as any} color={hover} size={40}/>
    )
}

export default Icon;