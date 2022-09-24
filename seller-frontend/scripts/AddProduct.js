import { useState } from "./useState.js";

export const AddProduct = (e) =>{
    let [product, setProduct] = useState([]);

    if (document.getElementById("add-product")) {
        document.getElementById("add-product").addEventListener("click", () => {
            // Get user Value
            setProduct(document.getElementById("add-product-name").value);
            setProduct([product(), document.getElementById("add-product-price").value]);
            setProduct([product(), document.getElementById("add-product-categories").value]);
    
            console.log(product());
    
            // add category api
    
            // Insert Value into table
            const categoryName = document.createElement('tr');
            categoryName.classList.add('td');
            categoryName.classList.add('color-purple');
            categoryName.innerText = product()[0][0];
            document.getElementById("product").appendChild(categoryName);
            e.document.getElementById("actions").appendChild('<i class="fa fa-trash-o" aria-hidden="true"></i>');
            document.getElementById("add-product-name").value = "";
            document.getElementById("add-product-price").value = "";
        })
    }
}

