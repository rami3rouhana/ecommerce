import { useState } from "./useState.js";

let [discount, setDiscount] = useState(0);
let [category, setCategory] = useState("");
let [date, setDate] = useState([]);

export const AddDiscount = () => {
    if (document.getElementById("discount-button"))
    document.getElementById("discount-button").addEventListener("click", () => {
        // Set data
        setDiscount(document.getElementById("discount-value").value);
        setCategory(document.getElementById("add-product-categories").value);
        setDate(document.getElementById("date").value);

        // Api call

        // Display Discount code
        document.getElementById("discount-code").value = "hello";
        document.getElementById("discount-value").value = "";
    })
} 