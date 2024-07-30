import { MaterialSymbol } from "react-material-symbols";

function Icon({icon="", hover='', fill=false, size=40}: {icon: string, hover: string, fill?: boolean, size?: number}) {
    return (
        <MaterialSymbol icon={icon as any} color={hover} size={size} fill={fill}/>
    )
}

export default Icon;