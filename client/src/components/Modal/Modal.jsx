import { useEffect } from "react"

const Modal = ({ children, title = "Default modal", onClose }) => {
  const handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [onClose])
  return (
    <div
      className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'
      onClick={handleBackDropClick}
    >
      <div
        className='relative overflow-hidden max-w--[1000px] rounded-md bg-white p-4'
      >
        <>
          <h1 className='text-3xl font-bold'>{title}</h1>
        </>
        <button className='absolute top-2 right-2' onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
