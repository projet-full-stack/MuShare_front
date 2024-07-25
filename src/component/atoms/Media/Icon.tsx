import { MaterialSymbol } from "react-material-symbols";
import styled from "styled-components";
import { useState } from "react";


const StyledIcon = styled.span<{hover:string}>`
    width: 25px;
    height: 25px;
}
`;

function Icon({icon="", hover='', fill=false, size=40}: {icon: string, hover: string, fill?: boolean, size?: number}) {
    return (
        <MaterialSymbol icon={icon as any} color={hover} size={size} fill={fill}/>
    )
}

export default Icon;