import React, { act } from "react"
import { NavLink } from "react-router-dom"
import { buildActiveClassTailwind } from "../../helpers/buildActiveClassTailwind"
import clsx from "clsx"

const NavLinkItem = ({ className, to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        clsx('px-4 py-2 w-full bg-teal-50',buildActiveClassTailwind(isActive, "text-teal-600 font-bold", "text-gray-500 hover:text-teal-600"), className)
      }
    >
      {children}
    </NavLink>
  )
}

export default NavLinkItem
