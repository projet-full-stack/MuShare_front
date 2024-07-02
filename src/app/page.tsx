'use client'
import HomeOrganism from "@/component/organisms/homeOrganism/homeOrganism";
import NavbarOrganism from "@/component/organisms/navbarOrganism.tsx/navbarOrganism";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  let token = false;
  if(!token){
    // redirect('/login');
  }
  return (
    <>
    <HomeOrganism />
    <NavbarOrganism/>
    </>

  );
}
