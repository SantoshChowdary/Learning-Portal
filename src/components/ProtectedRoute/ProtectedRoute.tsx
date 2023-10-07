import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ( props : any ) => {
    const isUserAuthenticated = useSelector((state:any) => state.user.isUserLoggedIn) 
    
    if (isUserAuthenticated === false){
        return <Redirect to="/login" />
    }

    return <Route {...props} />
    
}

export default ProtectedRoute