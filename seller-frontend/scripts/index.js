import { useState } from "./useState.js";

let [category,setCategory] = useState("");

document.getElementById("add-category").addEventListener("click", () =>{
    // Get user Value
    setCategory(document.getElementById("add-category-name").value);

    // add category api

    // Insert Value into table
    const categoryName = document.createElement('li');
    categoryName.classList.add('td');
    categoryName.innerText =category();
    document.getElementById("name").appendChild(categoryName);
    document.getElementById("add-category-name").value ='';
})