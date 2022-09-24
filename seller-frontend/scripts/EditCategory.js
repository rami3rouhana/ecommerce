import { useState } from "./useState.js";

export const EditCategory = () => {
    let [name, setName] = useState("");

    if (document.getElementsByClassName("clickable-edit")) {
                document.getElementById("edit-btn").addEventListener("click", (e) => {
                    debugger
                    setName(document.getElementById("edit-name").value);
                    
                    
                    document.getElementById("edit-popup").classList.add('hidden');

                })
            }

    if(document.getElementById("close-btn-edit"))
    document.getElementById("close-btn-edit").addEventListener("click", () => {
        document.getElementById("edit-popup").classList.add('hidden');
    })

}