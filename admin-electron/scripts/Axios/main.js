import { LoginValidation }  from "./LoginValidation.js";
import {GetSellers} from "./GetSellers.js";





//Login

if(document.getElementById("login-button"))
    document.getElementById("login-button").addEventListener("click", () => {
        console.log("3aw");
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        LoginValidation(email, password);
    })
    

//LoginValidation("admin@gmail.com", "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8");


//Receive Clients


