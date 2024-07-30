'use client'
import React, { useState } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import store  from "@/store/store"
import 'react-material-symbols/rounded';
import NavbarOrganism from "@/component/organisms/navbarOrganism/navbarOrganism";
import ReaderMolecule from "@/component/molecules/readerMolecule/readerMolecule";
import { useAppSelector } from "./hooks";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <Provider store={store}>
      <html lang="en" style={{backgroundColor: "#0B162C"}}>
        <body >{children}
        <NavbarOrganism/></body>
      </html>
    </Provider>
  )
}
