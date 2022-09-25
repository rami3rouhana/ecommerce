import { useState } from "./useState.js";

export const AddProduct = (e) => {
    let [product, setProduct] = useState([]);

    if (document.getElementById("add-product")) {
        document.getElementById("add-product").addEventListener("click", async () => {
            // Get user Value
            setProduct(document.getElementById("add-product-name").value);
            const productName = document.getElementById("add-product-name").value;
            setProduct([product(), document.getElementById("add-product-price").value]);
            const price = document.getElementById("add-product-price").value;
            setProduct([product(), document.getElementById("add-product-categories").value]);
            const categories_id = document.getElementById("add-product-categories").value;


            // add category api
            const url = "http://localhost/ecommerce/ecommerce-server/add-prouduct.php";
            const picture_url = null;

            const data = JSON.stringify({
                productName,
                picture_url,
                price,
                categories_id
            });
            // api call
            const dataJWt = await axios.post(url, data, { headers: { 'Authorization': `token ${localStorage.getItem("token")}` } });
            if (typeof dataJWt.data.jwt !== "undefined")
                localStorage.setItem("token", dataJWt.data.jwt)
            // Insert Value into table
            const category = document.createElement('tr');
            category.id = dataJWt.data.id;
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

            delete_img.addEventListener("click", (e) => {
                e.currentTarget.parentElement.parentElement.remove();
                document.getElementById("new-name").value = "";
                document.getElementById("edit-product-name").classList.add('hidden');
            })

            edit_img.addEventListener("click", (e) => {
                document.getElementById("edit-product-name").classList.remove("hidden")
                const editName = e.currentTarget.parentElement.previousElementSibling;
                document.getElementById("save-btn").addEventListener("click", async function handler() {
                    let [name, setName] = useState("");
                    let [category, setCategory] = useState(0);
                    setName(document.getElementById("new-name").value);
                    setCategory(document.getElementById("edit-product-categories").value);
                    if (editName && name() !== '') {
                        //api call
                        const url = 'http://localhost/ecommerce/ecommerce-server/edit-product.php';
                        const proName = name();
                        const id = editName.parentElement.id;
                        const picture_url =''
                        const price = document.getElementById("new-price").value;
                        const categories_id = category();
                        const data = JSON.stringify({
                            picture_url,
                            price,
                            proName,
                            id,
                            categories_id
                        })
                        const response = await axios.post(url, data, { headers: { 'Authorization': `token ${localStorage.getItem("token")}` } })
                        if (typeof response.data.jwt !== "undefined")
                            localStorage.setItem("token", response.data.jwt);
                        document.getElementById("new-name").value = "";
                        document.getElementById("edit-product-name").classList.add('hidden');
                        editName.innerHTML = name();
                        this.removeEventListener('click', handler);
                    }
                });
            })
        })
    }
}

