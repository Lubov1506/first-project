import React from "react"
import NavLinkItem from "../NavLinkItem/NavLinkItem"

const NavBar = () => {
  return (
    <aside className='top-0 left-0 h-full w-1/5 p-4 pr-8 border-r-2 border-green-800 text-2xl'>
      <nav className='flex flex-col gap-1'>
        <NavLinkItem to={"/"}>Home</NavLinkItem>
        <NavLinkItem to={"/transactions"}>Transactions</NavLinkItem>
      </nav>
    </aside>
  )
}

export default NavBar
