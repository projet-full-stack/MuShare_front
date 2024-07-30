'use client'
import ProfilOrganism from '@/component/organisms/ProfilOrganism/profilOrganism'
import { redirect } from "next/navigation";
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


const Profil = () => {
    const token = useSelector((state: any) => state.authentication.token)

  
  if (!token) {
    redirect("/login");
  }
  return (
    <>
      <ProfilOrganism />
    </>
  )
}

export default Profil