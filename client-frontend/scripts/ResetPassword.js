import { useState } from './useState.js';


export const ResetPassword = () => {
    if (document.getElementById("reset-btn")) {
        let [email,setEmail] = useState('');
        document.getElementById("reset-btn").addEventListener("click", async () => {
            const url = "http://localhost/ecommerce/ecommerce-server/reset-request.php";
            setEmail(document.getElementById("email-reset").value);
            const data = JSON.stringify({
                email: email(),
            })
            const user = await axios.post(url, data);
            debugger
            if(typeof user.data.success == "undefined"){
                if(JSON.parse(user.data.split("\n")[user.data.split("\n").length-1].split('[')[0]).success)
                    alert ("Reset Password Sent!");
                  }
            else{
                alert ("Wrong email!");
            }           
        })
}}