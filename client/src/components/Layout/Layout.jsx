import React from "react"
import NavBar from "../NavBar/NavBar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className='flex w-screen h-screen overflow-hidden '>
      <NavBar />
      <main className='h-max-full w-4/5'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
