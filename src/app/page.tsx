'use client'
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  let token = false;
  if(!token){
    // redirect('/login');
  }
  return (
    <main >
      <div>
        ALED
      </div>
    </main>
  );
}
