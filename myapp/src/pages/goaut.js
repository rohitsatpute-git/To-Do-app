import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from './Login';

//813132074617-iv6l0jvdgn206j1hhp1ikoombe4hcmth.apps.googleusercontent.com
function GoogleOA(){
    return(
        <GoogleOAuthProvider clientId="813132074617-l9jfdu273aeglrcok7e457l1k43rdama.apps.googleusercontent.com">
            <Login/>
        </GoogleOAuthProvider>
    )
}

export default GoogleOA;
