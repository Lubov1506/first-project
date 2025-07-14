import clsx from "clsx"
import React from "react"

const AuthBar = (className) => {
  console.log(className)

  return (
    <div className={className}>
      <button className={clsx("", className)}>Sign in</button>
      <button>Log in</button>
      <button>Exit</button>
    </div>
  )
}

export default AuthBar
