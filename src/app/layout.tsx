'use client'
import React from "react"
import { Provider } from "react-redux"
import store  from "@/store/store"
import 'react-material-symbols/rounded';
import NavbarOrganism from "@/component/organisms/navbarOrganism.tsx/navbarOrganism";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <html lang="en" style={{backgroundColor: "black"}}>
        <body >{children}
        <NavbarOrganism/></body>
      </html>
    </Provider>
  )
}
