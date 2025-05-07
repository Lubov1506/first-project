import React from "react"
import NavBar from "../NavBar/NavBar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="flex border-4 border-green-600 w-screen h-screen overflow-hidden">
      <NavBar />
      <main className="h-max-full w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
