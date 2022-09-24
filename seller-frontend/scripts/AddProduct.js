import { useState } from "./useState.js";

export const AddProduct = (e) =>{
    let [product, setProduct] = useState([]);

    if (document.getElementById("add-product")) {
        document.getElementById("add-product").addEventListener("click", () => {
            // Get user Value
            setProduct(document.getElementById("add-product-name").value);
            setProduct([product(), document.getElementById("add-product-price").value]);
            setProduct([product(), document.getElementById("add-product-categories").value]);

    
            // add category api
    
            // Insert Value into table
            const category = document.createElement('tr');
            category.classList.add('td');
            category.classList.add('color-purple');
            category.classList.add('border');
            const categoryName = document.createElement('td');
            const categoryActions = document.createElement('td');

            const delete_img = document.createElement('img');
            delete_img.classList.add('icon')
            delete_img.src = "./images/delete-button.svg"

            const edit_img = document.createElement('img');
            edit_img.classList.add('icon')
            edit_img.src = "./images/edit-button.svg"

            categoryName.innerHTML = product()[0][0];

            categoryActions.appendChild(delete_img);
            categoryActions.appendChild(edit_img);
            category.appendChild(categoryName);
            category.appendChild(categoryActions);

            document.getElementById("products-table").appendChild(category);
            document.getElementById("add-product-name").value = "";
            document.getElementById("add-product-price").value = "";
        })
    }
}

