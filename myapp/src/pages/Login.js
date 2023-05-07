import React from "react";
import { GoogleLogin} from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import {useNavigate} from "react-router-dom";

function Login(){
    
    const navigate=useNavigate();

    function handleClick(userobject){
        navigate("/home" ,{state:{name:userobject.name,email:userobject.email}})
    }


     return (

      <GoogleLogin 
         onSuccess={response=>{
                console.log("Encoded JWT ID token"+response.credential)
                var userobject=jwtDecode(response.credential);
                console.log(userobject);
                handleClick(userobject);
          }} 
          onError={()=>{
                console.log("login failed");
      } 
      } 
      useOneTap/>
    

     )
}
 
export default Login;
