import { GetClients } from "./Axios/GetClients.js";
import { useState } from "./useState.js";
import { AddSpecificSeller } from "./Axios/AddSpecificSeller.js";

export const AddSeller = () => {
    let [email, setEmail] = useState("");
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");

    if (document.getElementById("add-seller-btn")) {
        document.getElementById("add-seller-btn").addEventListener("click", () => {
            // popup open
            document.getElementById("add-popup").classList.remove('hidden')
            document.getElementById("cover").classList.remove('hidden')
            // Get user Value
            document.getElementById("add-btn").addEventListener("click", () => {
                setEmail(document.getElementById("add-email").value);
                setName(document.getElementById("add-name").value);
                setPassword(document.getElementById("add-password").value);
                // add category api
                //console.log(name() + password() + email());
                // Insert Value into table
                let data = {name: name(), email: email(), password: password()};
                console.log(data)
                AddSpecificSeller(data);
                document.getElementById("add-email").value = "";
                document.getElementById("add-name").value = "";
                document.getElementById("add-password").value = "";
                document.getElementById("add-popup").classList.add('hidden')
                document.getElementById("cover").classList.add('hidden')
            })
            document.getElementById("close-btn-add").addEventListener("click", () => {
                
                document.getElementById("add-popup").classList.add('hidden')
                document.getElementById("cover").classList.add('hidden')
            })

        })
    }
}
