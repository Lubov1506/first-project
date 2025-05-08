import { useEffect } from "react"
import { IoClose } from "react-icons/io5"
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
      className='fixed top-0 left-0 w-full h-full bg-zinc-500/50 flex justify-center items-center transition-transform backdrop-blur-xs duration-200'
      onClick={handleBackDropClick}
    >
      <div className='relative  max-w--[1000px] rounded-md bg-white p-6'>
        <>
          <h1 className='text-2xl text-teal-950 italic font-bold '>{title}</h1>
        </>
        <button className='absolute top-2 right-2' onClick={onClose}>
          <IoClose />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
