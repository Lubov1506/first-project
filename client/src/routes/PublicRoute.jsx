import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../redux/auth/selectors"
import { Navigate } from "react-router-dom"

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  console.log(isLoggedIn);
  
  return isLoggedIn ? <Navigate to='/' /> : children
}

export default PublicRoute
