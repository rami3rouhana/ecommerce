import { useState } from "./useState.js";

export const AddSeller = () => {
    let [email, setEmail] = useState("");
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");

    if (document.getElementById("add-seller")) {
        document.getElementById("add-seller").addEventListener("click", () => {
            // popup open
            document.getElementById("seller-popup").classList.remove('hidden')
            document.getElementById("cover").classList.remove('hidden')
            // Get user Value
            document.getElementById("add-btn").addEventListener("click", () => {
                setEmail(document.getElementById("add-email").value);
                setName(document.getElementById("add-name").value);
                setPassword(document.getElementById("add-password").value);
                // add category api
                console.log(name() + password());
                // Insert Value into table
                document.getElementById("add-email").value = "";
                document.getElementById("add-name").value = "";
                document.getElementById("add-password").value = "";
                document.getElementById("seller-popup").classList.add('hidden')
                document.getElementById("cover").classList.add('hidden')
            })
            document.getElementById("close-btn-add").addEventListener("click", () => {
                document.getElementById("seller-popup").classList.add('hidden')
                document.getElementById("cover").classList.add('hidden')
            })

        })
    }
}
