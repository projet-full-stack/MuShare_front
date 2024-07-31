import InputField  from "@/component/atoms/Input";
import { useState } from "react";

function SearchBarMolecule({value='', ...props}) {

    function handleOnChange(e: any) {
        props.setValue(e.target.value);
    }

    return (
        <>
            <InputField.InputField placeholder="Rechercher" value={value} onChange={handleOnChange}/>
        </>
    )
}

export default SearchBarMolecule;