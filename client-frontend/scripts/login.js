import { useState } from "../../admin-electron/scripts/useState.js";

let [email, setEmail] = useState("");
let [password, setPassword] = useState("");
export const login = () => {
    if (document.getElementById("login-btn")) {
        document.getElementById("login-btn").addEventListener("click", async () => {
            const url = "http://localhost/ecommerce/ecommerce-server/login.php";
            setEmail(document.getElementById("login-username").value);
            setPassword(document.getElementById("login-password").value);
            const data = JSON.stringify({
                email: email(),
                password: password()
            })
            const user = await axios.post(url, data);
            localStorage.setItem("token", user.data.jwt)
        })
}}