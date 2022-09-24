import { ResetPassword } from "./ResetPassword.js";

export const ShowReset = () =>{
    if(document.getElementById("reset-password"))
    document.getElementById("reset-password").addEventListener("click", (e)=>{
        e.preventDefault();
        if(document.getElementById("email-reset").classList[0] === "hidden-reset"){
        document.getElementById("email-reset").classList.remove("hidden-reset");
        document.getElementById("email-reset").classList.add("reset");
        document.getElementById("login-btn").innerText = "Reset";
        document.getElementById("login-btn").id = "reset-btn";
        ResetPassword();
        }else{
            document.getElementById("email-reset").classList.remove("reset");
            document.getElementById("email-reset").classList.add("hidden-reset");
            document.getElementById("reset-btn").innerText = "Login";
            document.getElementById("reset-btn").id = "login-btn";
        }
    });
}