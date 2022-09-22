import { useState } from "./useState.js";


let [adName, setAdName] = useState([]);
let [adUrl, setAdUrl] = useState([]);
let [addescription, setAdDescription] = useState([]);

export const SubmitAd = (category,setCategory) =>{

    if (document.getElementById("submit-ad"))
    document.getElementById("submit-ad").addEventListener("click", () => {
        // Set data
        setAdName(document.getElementById("ad-name").value);
        setAdUrl(document.getElementById("ad-url").value);
        setAdDescription(document.getElementById("ad-description").value);
        // Api call

        // Display ads empty
        document.getElementById("ad-name").value = "";
        document.getElementById("ad-url").value = "";
        document.getElementById("ad-description").value = "";
    })
}