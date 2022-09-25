import { useState } from "./useState.js";

let [date, setDate] = useState([]);

export const AddDiscount =  () => {
    if (document.getElementById("discount-button"))
    document.getElementById("discount-button").addEventListener("click", async () => {

        // Api call
        const url = "http://localhost/ecommerce/ecommerce-server/add-discounts.php";
        const discount_percent = document.getElementById("discount-value").value;
        const category_id = document.getElementById("add-product-categories").value;
        const data = JSON.stringify({
            discount_percent,
            category_id
        })
        const dataJWt = await axios.post(url, data, {headers: {'Authorization': `token ${localStorage.getItem("token")}`}});
        if (typeof dataJWt.data.jwt !== "undefined")
            localStorage.setItem("token",dataJWt.data.jwt)
        debugger
        // Display Discount code
        document.getElementById("discount-code").value = dataJWt.data.code;
        document.getElementById("discount-value").value = "";
    })
} 