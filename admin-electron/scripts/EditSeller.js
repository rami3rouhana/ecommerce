import { useState } from "./useState.js";

export const EditSeller = () => {
    let [email, setEmail] = useState("");
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    let [id, setId] = useState(0);

    // if (document.getElementById("edit-seller-btn")) {
    //     document.getElementById("edit-seller-btn").addEventListener("click", () => {
    //         console.log("test")
    //         popup open
    //         document.getElementById("edit-seller-popup").classList.remove('hidden')
    //         document.getElementById("cover").classList.remove('hidden')
    // Get user Value
    /*document.getElementById("edit-btn").addEventListener("click", () => {
        setEmail(document.getElementById("edit-email").value);
        setName(document.getElementById("edit-name").value);
        setPassword(document.getElementById("edit-password").value);
        // add category api
        console.log(name() + password());
        // Insert Value into table
        document.getElementById("edit-email").value = "";
        document.getElementById("edit-name").value = "";
        document.getElementById("edit-password").value = "";
        document.getElementById("edit-seller-popup").classList.add('hidden')
        document.getElementById("cover").classList.add('hidden')
    })*/
    //console.log(document.getElementsByClassName("clickable").length);
    //console.log(document.getElementById("edit-seller-popup"));
    //console.log(document.getElementsByClassName("clickable"));
    if (document.getElementsByClassName("clickable").length > 0 && document.getElementById("edit-seller-popup")) {
        const edits = Array.prototype.slice.call(document.getElementsByClassName("clickable"));
        edits.forEach(edit => {
            edit.addEventListener("click", (e) => {
                document.getElementById("edit-seller-popup").classList.remove('hidden');
                setId(e.currentTarget.parentElement.parentElement.id);
                document.getElementById("edit-btn").addEventListener("click", () => {
                    console.log(id());
                    document.getElementById("edit-seller-popup").classList.add('hidden');
                })
            })
        });
    }

    document.getElementById("close-btn-edit").addEventListener("click", () => {
        document.getElementById("edit-seller-popup").classList.add('hidden')
        document.getElementById("cover").classList.add('hidden')
    })

}