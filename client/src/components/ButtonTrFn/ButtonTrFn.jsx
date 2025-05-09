import clsx from "clsx"
import React from "react"

const ButtonTrFn = ({ onClick, title = "button", theme = "light" }) => {
  const styles = {
    light: "bg-teal-600 text-teal-100 hover:bg-teal-700 hover:text-teal-50",
    dark: "bg-teal-100 text-teal-900 hover:bg-teal-600 hover:text-teal-50",
  }
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-2 py-1  rounded-md  text-xl transition-all duration-200",
        styles[theme]
      )}
    >
      {title}
    </button>
  )
}

export default ButtonTrFn
