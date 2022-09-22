import { useState } from "./useState.js";

let [voucher, setVoucher] = useState(0);
let [date, setDate] = useState([]);

export const AddVoucher = () => {
    if (document.getElementById("voucher-button"))
    document.getElementById("voucher-button").addEventListener("click", () => {
        // Set data
        setVoucher(document.getElementById("voucher-value").value);
        setDate(document.getElementById("date").value);

        // Api call

        // Display Discount code
        document.getElementById("voucher-code").value = "hello";
        document.getElementById("voucher-value").value = "";
        document.getElementById("date").value = "";
    })
}