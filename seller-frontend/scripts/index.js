import { useState } from "./useState.js";

window.onload = () => {
    const categories = ['category','potato','batata'];
    let options = "";
    categories.forEach( category => {
        options += `<option value="${category}">${category}</option>`
    })
    document.getElementById("add-product-categories").innerHTML = options;
}

let [category, setCategory] = useState("");
if(document.getElementById("add-category")){
    document.getElementById("add-category").addEventListener("click", () => {
        // Get user Value
        setCategory(document.getElementById("add-category-name").value);

        // add category api

        // Insert Value into table
        const categoryName = document.createElement('li');
        categoryName.classList.add('td');
        categoryName.innerText = category();
        document.getElementById("name").appendChild(categoryName);
        document.getElementById("add-category-name").value = '';
    })
}

let [product, setProduct] = useState([]);

if(document.getElementById("add-product")){
    document.getElementById("add-product").addEventListener("click", () => {
        // Get user Value
        setProduct(document.getElementById("add-product-name").value);
        setProduct([product(),document.getElementById("add-product-price").value]);
        setProduct([product(),document.getElementById("add-product-categories").value]);

        console.log(product());

        // add category api

        // Insert Value into table
        const categoryName = document.createElement('li');
        categoryName.classList.add('td'); 
        categoryName.classList.add('color-purple'); 
        categoryName.innerText = product()[0][0];
        document.getElementById("product").appendChild(categoryName);
        document.getElementById("add-product-name").value = "";
        document.getElementById("add-product-price").value  = "";
    })}