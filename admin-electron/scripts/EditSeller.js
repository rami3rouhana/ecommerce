import { useState } from "./useState.js";
import { GetSellers } from "./Axios/GetSellers.js";
import { DeleteSeller } from "./DeleteSeller.js";
import { EditSpecificSeller } from "./Axios/EditSpecificSeller.js"

export const EditSeller = async () => {
    //Wait for server respone before populating the delete and edit buttons
    if(document.getElementById("main-table-sellers")){
        await GetSellers();
        await DeleteSeller();
    }

    
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
                    let nEmail = (document.getElementById("edit-email").value);
                    let nName = (document.getElementById("edit-name").value);
                    let nPass =(document.getElementById("edit-password").value);
                    console.log(id(), nEmail, nName, nPass);

                    //$query->bind_param("sssi", $password, $f_name , $email , $id);
                    EditSpecificSeller({"password": nPass,
                                        "f_name": nName,
                                        "email": nEmail,
                                        "id": id()})
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