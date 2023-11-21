import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import OfflineWarning from "../../utilities/offlineWarning";


const ProtectedRoute = ( props : any ) => {
    const isUserAuthenticated = useSelector((state:any) => state.user.isUserLoggedIn);
    const isOnLine = navigator.onLine;

    if(!isOnLine) {
        return <OfflineWarning />
      }
    
    if (isUserAuthenticated === false){
        return <Redirect to="/login" />
    }

    return <Route {...props} />
    
}

export default ProtectedRoute