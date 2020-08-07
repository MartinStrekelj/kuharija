import React from "react";
import { Redirect } from "react-router-dom";

const ProtectedPage = ({loggedIn, children}) => {
    return(
        loggedIn ?
        ( children ) :
        (<Redirect
            from="/food/:id" 
            to="/signin"
        />)
    )
}

export default ProtectedPage;

