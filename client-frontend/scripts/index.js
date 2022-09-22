import { GetProducts } from "./GetProducts.js";
import { login } from "./login.js";

GetProducts();


if (document.getElementById("login-btn")) {
    document.getElementById("login-btn").addEventListener("click", () => {
        login();
    })


}
