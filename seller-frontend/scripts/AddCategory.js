import { EditCategory } from "./EditCategory.js";
import { useState } from "./useState.js";

export const AddCategory = (category, setCategory) => {


    if (document.getElementById("add-category")) {
        document.getElementById("add-category").addEventListener("click", async () => {
            // Get user Value
            setCategory(document.getElementById("add-category-name").value);

            // add category api
            const url = "http://localhost/ecommerce/ecommerce-server/add-category.php";
            const catName = category();
            const data = JSON.stringify({
                catName
            });
            
            await axios.post(url, data, {headers: {'Authorization': `token ${localStorage.getItem("token")}`}});

            // Insert Value into table
            const categoryRow = document.createElement('tr');
            categoryRow.classList.add('td');
            categoryRow.classList.add('color-purple');
            categoryRow.classList.add('border');
            const categoryName = document.createElement('td');
            const categoryActions = document.createElement('td');

            const popup = document.getElementById('edit-popup');
           
            const delete_img = document.createElement('img');
            delete_img.classList.add('icon')
            delete_img.src = "./images/delete-button.svg"
            
            const edit_img = document.createElement('img');
            edit_img.classList.add('icon')
            edit_img.src = "./images/edit-button.svg"
            edit_img.setAttribute('id','');
            categoryName.innerHTML = category();

            categoryActions.appendChild(delete_img);
            categoryActions.appendChild(edit_img);

            delete_img.addEventListener('click', (e) => {
                e.currentTarget.parentElement.parentElement.remove();
            })

            edit_img.addEventListener('click', (e) => {
                popup.classList.remove('hidden');
                const editName =e.currentTarget.parentElement.previousElementSibling;
                document.getElementById("edit-btn").addEventListener("click", () => {
                    let [name, setName] = useState("");
                    setName(document.getElementById("edit-name").value);

                    //api call

                    document.getElementById("edit-name").value = "";
                    document.getElementById("edit-popup").classList.add('hidden');
                    editName.innerHTML = name();
                });
            })
            categoryRow.appendChild(categoryName);
            categoryRow.appendChild(categoryActions);
            document.getElementById("categories-table").appendChild(categoryRow);

            document.getElementById("add-category-name").value = '';
            
        })
    }
}

