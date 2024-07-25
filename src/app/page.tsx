'use client'
import HomeOrganism from "@/component/organisms/homeOrganism/homeOrganism";

import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const token = useSelector((state: any) => state.authentication.token);
  if (!token) {
    redirect("/login");
  }

  return (
    <>
    
    <HomeOrganism />
    </>

  );
}
