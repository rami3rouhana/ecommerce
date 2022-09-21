import { useState } from "./useState.js";

let [category,setCategory] = useState("");

document.getElementById("add-category").addEventListener("click", () =>{
    // Get user Value
    setCategory(document.getElementById("add-category-name").value);

    // add category api

    //
})