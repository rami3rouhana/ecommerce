import { DeleteSpecificSeller } from "./Axios/DeleteSpecificSeller.js";
import { GetSellers } from "./Axios/GetSellers.js";
import { useState } from "./useState.js";

export const DeleteSeller = async () => {
    //await GetSellers();
    let [email, setEmail] = useState("");
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    let [id, setId] = useState(0);
    let [currentTarget, setCurrentTarget] = useState(0);

    //if(document.getElementById)

    if(document.getElementById("delete-button")){
        document.getElementById("delete-button").addEventListener("click", () => {
            console.log("gg");
        })
    }

    if (document.getElementsByClassName("clickable-delete").length > 0 && document.getElementById("seller-popup-form")) {
        const edits = Array.prototype.slice.call(document.getElementsByClassName("clickable-delete"));
        console.log("delete");
        edits.forEach(edit => {
            edit.addEventListener("click", (e) => {
                document.getElementById("delete-seller-popup").classList.remove('hidden');
                document.getElementById("cover").classList.remove('hidden')
                
                setId(e.currentTarget.parentElement.parentElement.id);
                setCurrentTarget(e.currentTarget.parentElement.parentElement);
                document.getElementById("delete-button").addEventListener("click", (e) => {
                    console.log(id());
                    DeleteSpecificSeller(id());
                    currentTarget().remove();
                    document.getElementById("delete-seller-popup").classList.add('hidden');
                    document.getElementById("cover").classList.add('hidden');
                })
            })
        });
    }

    if(document.getElementById("delete-close-btn"))
    document.getElementById("delete-close-btn").addEventListener("click", () => {
        document.getElementById("delete-seller-popup").classList.add('hidden')
        document.getElementById("cover").classList.add('hidden')
    })

}