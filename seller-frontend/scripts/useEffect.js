import { useState } from "./useState.js";

export const useEffect = (setCategory) => {
    const years = [2020, 2021, 2022];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    window.onload = async () => {
        if (document.getElementById("add-product-categories") || document.getElementById("categories-table")) {
            const url = 'http://localhost/ecommerce/ecommerce-server/recieve-seller-category.php';
            const response = await axios.get(url, { headers: { 'Authorization': `token ${localStorage.getItem("token")}` } })
            if (typeof response.data.jwt !== "undefined")
                localStorage.setItem("token", response.data.jwt);
            setCategory(response.data.categories);
            if (document.getElementById("add-product-categories")) {
                let options = "";
                response.data.categories.forEach(category => {
                    options += `<option value="${category.id}">${category.name}</option>`
                })
                document.getElementById("add-product-categories").innerHTML = options;
            }
            if (document.getElementById("edit-product-categories")) {
                let options = "";
                response.data.categories.forEach(category => {
                    options += `<option value="${category.id}">${category.name}</option>`
                })
                document.getElementById("edit-product-categories").innerHTML = options;
            }
            if (document.getElementById("categories-table")) {
                response.data.categories.map(category => {
                    const categoryRow = document.createElement('tr');
                    categoryRow.id = category.id;
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
                    categoryName.innerHTML = category.name;

                    categoryActions.appendChild(delete_img);
                    categoryActions.appendChild(edit_img);

                    delete_img.addEventListener('click', async (e) => {

                        //api call
                        const url = 'http://localhost/ecommerce/ecommerce-server/delete-category.php';
                        const id = e.currentTarget.parentElement.parentElement.id;
                        const deleteTd = e.currentTarget.parentElement.parentElement;
                        const data = JSON.stringify({
                            id
                        })
                        const response = await axios.post(url, data, { headers: { 'Authorization': `token ${localStorage.getItem("token")}` } })
                        if (typeof response.data.jwt !== "undefined")
                            localStorage.setItem("token", response.data.jwt);
                        deleteTd.remove();
                    })
                    let [name, setName] = useState("");
                    edit_img.addEventListener('click', async (e) => {
                        popup.classList.remove('hidden');
                        let editName = e.currentTarget.parentElement.previousElementSibling;

                        document.getElementById("edit-btn").addEventListener("click", async function handler() {

                            setName(document.getElementById("edit-name").value);
                            if (editName && name() !== '') {

                                //api call
                                const url = 'http://localhost/ecommerce/ecommerce-server/edit-category.php';
                                const catName = name();
                                const id = editName.parentElement.id;
                                const data = JSON.stringify({
                                    catName,
                                    id
                                })
                                const response = await axios.post(url, data, { headers: { 'Authorization': `token ${localStorage.getItem("token")}` } })
                                if (typeof response.data.jwt !== "undefined")
                                    localStorage.setItem("token", response.data.jwt);


                                document.getElementById("edit-name").value = "";
                                document.getElementById("edit-popup").classList.add('hidden');
                                editName.innerHTML = name();
                                this.removeEventListener('click', handler);
                            }
                        });
                    })
                    categoryRow.appendChild(categoryName);
                    categoryRow.appendChild(categoryActions);
                    document.getElementById("categories-table").appendChild(categoryRow);
                })
            }
        }
        if (document.getElementById("year")) {
            let options = "";
            years.forEach(year => {
                options += `<option value="${year}">${year}</option>`
            })
            document.getElementById("year").innerHTML = options;
        }
        if (document.getElementById("month")) {
            let options = "";
            months.forEach((month, i) => {
                options += `<option value="${i}">${month}</option>`
            })
            document.getElementById("month").innerHTML = options;
        }
        if (document.getElementById("day")) {
            let options = "";
            days.forEach(day => {
                options += `<option value="${day}">${day}</option>`
            })
            document.getElementById("day").innerHTML = options;
        }

        if (document.getElementById("products-table")) {
            const url = 'http://localhost/ecommerce/ecommerce-server/receive-products.php';
            const response = await axios.get(url, { headers: { 'Authorization': `token ${localStorage.getItem("token")}` } })
            if (typeof response.data.jwt !== "undefined")
                localStorage.setItem("token", response.data.jwt);
            response.data.products.map(product => {
                const category = document.createElement('tr');
                category.id = product.id;
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
                categoryName.innerHTML = product.name;
                categoryActions.appendChild(delete_img);
                categoryActions.appendChild(edit_img);
                category.appendChild(categoryName);
                category.appendChild(categoryActions);
                document.getElementById("products-table").appendChild(category);
                document.getElementById("add-product-name").value = "";
                document.getElementById("add-product-price").value = "";

                delete_img.addEventListener("click", async (e) => {
                    const url = 'http://localhost/ecommerce/ecommerce-server/delete-product.php';
                    const id = e.currentTarget.parentElement.parentElement.id;
                    debugger
                    const deleteTd = e.currentTarget.parentElement.parentElement;
                    const data = JSON.stringify({
                        id
                    })
                    const response = await axios.post(url, data, { headers: { 'Authorization': `token ${localStorage.getItem("token")}` } })
                    if (typeof response.data.jwt !== "undefined")
                        localStorage.setItem("token", response.data.jwt);
                    deleteTd.remove();
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
}

