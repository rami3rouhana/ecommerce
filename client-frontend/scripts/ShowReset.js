import { ResetPassword } from "./ResetPassword.js";

export const ShowReset = () =>{
    if(document.getElementById("reset-password"))
    document.getElementById("reset-password").addEventListener("click", (e)=>{
        e.preventDefault();
        document.getElementById('popup-reset-password').classList.remove('hidden');
        ResetPassword();
    });
    if(document.getElementById("close-btn"))
    document.getElementById('close-btn').addEventListener("click", ()=> {
        document.getElementById('popup-reset-password').classList.add('hidden');
    })
}