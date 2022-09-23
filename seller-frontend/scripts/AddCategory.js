import { useState } from "./useState.js";

export const AddCategory = (category,setCategory) =>{

    

    if (document.getElementById("add-category")) {
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
            const actions = document.createElement('li');
            actions.classList.add('td');

            const updateBtn = document.createElement('img');
            updateBtn.classList.add("clickable-edit");
            updateBtn.src="./images/edit-button.svg";
            const deleteBtn = document.createElement('img');
            deleteBtn.classList.add("clickable-delete");
            deleteBtn.src="./images/delete-button.svg";
            actions.appendChild(updateBtn);
            actions.appendChild(deleteBtn);
            document.getElementById("actions").appendChild(actions)
            debugger
        })
    }
}

