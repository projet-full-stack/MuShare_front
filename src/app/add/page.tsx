'use client'
import AddSongOrganism from "@/component/organisms/addSongOrganism/addSongOrganism";
import { redirect } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

function Add() {
    const token = useSelector((state: any) => state.authentication.token);
    if (!token) {
      redirect("/login");
    }

    return (
        <>
        
            <AddSongOrganism />
        </>
    )
}

export default Add;