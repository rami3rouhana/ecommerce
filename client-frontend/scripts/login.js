import { useState } from "../../admin-electron/scripts/useState.js";

let [email, setEmail] = useState("");
let [password, setPassword] = useState("");
export const login = async () => {
    if (document.getElementById("login-btn")) {
        document.getElementById("login-btn").addEventListener("click", async () => {
            console.log("gg");
            const url = "http://localhost/ecommerce/ecommerce-server/login.php";
            setEmail(document.getElementById("login-username").value);
            setPassword(document.getElementById("login-password").value);
            const data = JSON.stringify({
                email: email(),
                password: password()
            })
            console.log(data);
            const user = await axios.post(url, data);
            console.log(user);
            if (user.data.jwt != undefined) {
                localStorage.setItem("token", user.data.jwt)
                user.data.role === "Seller" ? window.location.href = 'http://127.0.0.1:5500/seller-frontend/products.html' : window.location.href = 'http://127.0.0.1:5500/client-frontend/products.html';
            }
        })
    }
}