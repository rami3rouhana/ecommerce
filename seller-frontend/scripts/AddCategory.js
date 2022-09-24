import { useState } from "./useState.js";

export const AddCategory = (category, setCategory) => {

    let [editRow, setEditRow] = useState("");

    if (document.getElementById("add-category")) {
        document.getElementById("add-category").addEventListener("click", () => {
            // Get user Value
            setCategory(document.getElementById("add-category-name").value);

            // add category api

            // Insert Value into table
            const categoryRow = document.createElement('tr');
            categoryRow.classList.add('td');
            categoryRow.classList.add('color-purple');
            categoryRow.classList.add('border');
            const categoryName = document.createElement('td');
            const categoryActions = document.createElement('td');

            const delete_img = document.createElement('img');
            delete_img.classList.add('icon')
            delete_img.src = "./images/delete-button.svg"

            const edit_img = document.createElement('img');
            edit_img.classList.add('icon')
            edit_img.src = "./images/edit-button.svg"

            categoryName.innerHTML = category()[0][0];

            categoryActions.appendChild(delete_img);
            categoryActions.appendChild(edit_img);

            delete_img.addEventListener('click', () => {
                console.log('delete')
            })

            edit_img.addEventListener('click', () => {
                console.log('edit')
            })
            categoryRow.appendChild(categoryName);
            categoryRow.appendChild(categoryActions);

            document.getElementById("categories-table").appendChild(categoryRow);

            document.getElementById("add-category-name").value = '';
            const actions = document.createElement('li');
            actions.classList.add('td');

            const updateBtn = document.createElement('img');
            updateBtn.classList.add("clickable-edit");
            updateBtn.src = "./images/edit-button.svg";
            
            const deleteBtn = document.createElement('img');
            deleteBtn.classList.add("clickable-delete");
            deleteBtn.src = "./images/delete-button.svg";
            actions.appendChild(updateBtn);
            actions.appendChild(deleteBtn);
            document.getElementById("actions").appendChild(actions)
            updateBtn.addEventListener("click", (e) => {
                debugger
                document.getElementById("edit-popup").classList.remove("hidden");

            })
        })
    }
}

