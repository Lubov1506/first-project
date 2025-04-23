import clsx from "clsx"

export const buildActiveClassTailwind = (
  isActive,
  activeClasses = "text-blue-600 font-bold",
  inactiveClasses = "text-gray-500 hover:text-blue-600"
) => {
  return `transition-colors duration-200 ${
    isActive ? activeClasses : inactiveClasses
  }`
}
