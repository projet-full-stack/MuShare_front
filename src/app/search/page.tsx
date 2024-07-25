'use client'

import SearchOrganism from "@/component/organisms/searchOrganism/SearchOrganism";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

function page() {
    const token = useSelector((state: any) => state.authentication.token);
    if (!token) {
      redirect("/login");
    }
    return (
        <>
            <SearchOrganism />
        </>
    )
}

export default page;