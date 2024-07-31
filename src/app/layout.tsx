'use client'
import React, { useState } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import store from "@/store/store"
import 'react-material-symbols/rounded';
import NavbarOrganism from "@/component/organisms/navbarOrganism/navbarOrganism";
import Typography from "@/component/atoms/Typography";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();

  return (
    <Provider store={store}>
      <html lang="en" style={{ backgroundColor: "#0B162C" }}>
        <body >{children}
          {pathname !== '/login' &&
            <>
              <Typography.Logo />
              <NavbarOrganism />
            </>
          }
        </body>
      </html>
    </Provider>
  )
}
