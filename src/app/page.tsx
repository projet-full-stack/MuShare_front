'use client'
import ReaderMolecule from "@/component/molecules/readerMolecule/readerMolecule";
import HomeOrganism from "@/component/organisms/homeOrganism/homeOrganism";
import NavbarOrganism from "@/component/organisms/navbarOrganism.tsx/navbarOrganism";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Home() {
  let token = false;
  if(!token){
    // redirect('/login');
  }
  return (
    <>
    <HomeOrganism />
    <ReaderMolecule/>
    </>

  );
}
