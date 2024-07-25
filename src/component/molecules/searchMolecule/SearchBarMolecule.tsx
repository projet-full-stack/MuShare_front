import { InputField } from "@/component/atoms/Input";
import { useState } from "react";

function SearchBarMolecule({value='', ...props}) {
    return (
        <>
            <InputField placeholder="Rechercher" value={value} setValue={props.setValue}/>
        </>
    )
}

export default SearchBarMolecule;