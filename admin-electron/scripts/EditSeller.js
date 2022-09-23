import { useState } from "./useState.js";
import { GetSellers } from "./Axios/GetSellers.js";

export const EditSeller = async () => {
    await GetSellers();
    
    let [email, setEmail] = useState("");
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    let [id, setId] = useState(0);



    if (document.getElementsByClassName("clickable-edit").length > 0 && document.getElementById("edit-seller-popup2")) {
        
        const edits = Array.prototype.slice.call(document.getElementsByClassName("clickable-edit"));
        console.log(edits.length)
        edits.forEach(edit => {

            edit.addEventListener("click", (e) => {
                if(document.getElementById("edit-seller-popup2")){
                    console.log("found-editform");
                }
                document.getElementById("edit-seller-popup2").classList.remove('hidden');
                document.getElementById("cover").classList.remove('hidden')
                setId(e.currentTarget.parentElement.parentElement.id);
                document.getElementById("edit-btn").addEventListener("click", () => {
                    console.log(id());
                    document.getElementById("edit-seller-popup2").classList.add('hidden');
                    document.getElementById("cover").classList.add('hidden');
                })
            })
        });
    }

    if(document.getElementById("close-btn-edit"))
    document.getElementById("close-btn-edit").addEventListener("click", () => {
        document.getElementById("edit-seller-popup2").classList.add('hidden')
        document.getElementById("cover").classList.add('hidden')
    })

}