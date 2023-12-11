import { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import OfflineWarning from "../../utilities/offlineWarning";


const ProtectedRoute = ( props : any ) => {
    const [isOnline, setOnlineStatus] = useState(navigator.onLine)
    
    const isUserAuthenticated = useSelector((state:any) => state.user.isUserLoggedIn);
    
    if (!isOnline){
        setInterval(()=>{
            setOnlineStatus(navigator.onLine)
        }, 1000)
    }
    

    if(!isOnline) {
        return <OfflineWarning />
      }
    
    if (isUserAuthenticated === false){
        return <Redirect to="/login" />
    }

    return <Route {...props} />
    
}

export default ProtectedRoute