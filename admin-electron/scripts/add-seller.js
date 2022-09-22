import { useState } from "./useState";

export const addSeller = () =>{

    if (document.getElementById("add-seller")) {
        document.getElementById("add-seller").addEventListener("click", () => {
            debugger
            document.getElementById("seller-popup").classList.remove('hidden')
            document.getElementById("cover").classList.remove('hidden')
            // Get user Value
            setProduct(document.getElementById("email").value);
            setProduct([product(), document.getElementById("add-product-price").value]);
            setProduct([product(), document.getElementById("add-product-categories").value]);
    
            console.log(product());
    
            // add category api
    
            // Insert Value into table
            const categoryName = document.createElement('li');
            categoryName.classList.add('td');
            categoryName.classList.add('color-purple');
            categoryName.innerText = product()[0][0];
            document.getElementById("product").appendChild(categoryName);
            document.getElementById("add-product-name").value = "";
            document.getElementById("add-product-price").value = "";
        })
    }
}