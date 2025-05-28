import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const PrivateRoute = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    console.log(isLoggedIn);
    
    return isLoggedIn ? children : <Navigate to='/home' />
}

export default PrivateRoute;
