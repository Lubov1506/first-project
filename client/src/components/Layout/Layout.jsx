import React from "react"
import NavBar from "../NavBar/NavBar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="flex ">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
