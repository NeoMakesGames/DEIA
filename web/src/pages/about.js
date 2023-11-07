import Navbar from "@/components/navbar"
import NavbarSinsesion from "@/components/navbarSinsesion"
import { inSession } from "./hooks/server.hooks"
import { useState } from "react"

export default function About(){

    const [session, setSession] = useState(false)

    return(
        <main>
            {!session ? (
                <NavbarSinsesion/>
              ) : (<Navbar/>)}
              <div className="bg-[#DBE3FF] min-h-screen flex">

              </div>
        </main>
    )
}