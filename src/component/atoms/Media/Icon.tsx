import { MaterialSymbol } from "react-material-symbols";

function Icon({icon="", hover='', fill=false, size=40, onClick = () => {}}: {icon: string, hover: string, fill?: boolean, size?: number, onClick?: (event: any) => void}) {
    return (
        <div onClick={onClick}>
            <MaterialSymbol icon={icon as any} color={hover} size={size} fill={fill}/>
        </div>
    )
}

export default Icon;