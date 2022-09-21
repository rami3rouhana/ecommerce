import { useState } from "./useState.js";

window.onload = () => {
    if (document.getElementById("add-product-categories")) {
        const categories = ['category', 'potato', 'batata'];
        let options = "";
        categories.forEach(category => {
            options += `<option value="${category}">${category}</option>`
        })
        document.getElementById("add-product-categories").innerHTML = options;
    }
}

let [category, setCategory] = useState("");
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
    })
}

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
        const categoryName = document.createElement('li');
        categoryName.classList.add('td');
        categoryName.classList.add('color-purple');
        categoryName.innerText = product()[0][0];
        document.getElementById("product").appendChild(categoryName);
        document.getElementById("add-product-name").value = "";
        document.getElementById("add-product-price").value = "";
    })
}
if (document.getElementById("products"))
    document.getElementById("products").addEventListener("click", () => {
        window.location.href = "../seller-frontend/products.html";
    })
if (document.getElementById("products-nav"))
    document.getElementById("products-nav").addEventListener("click", () => {
        window.location.href = "../seller-frontend/products.html";
    })
if (document.getElementById("categories"))
    document.getElementById("categories").addEventListener("click", () => {
        window.location.href = "../seller-frontend/categories.html";
    })
if (document.getElementById("ads"))
    document.getElementById("ads").addEventListener("click", () => {
        window.location.href = "../seller-frontend/ads.html";
    })
if (document.getElementById("statistics"))
    document.getElementById("statistics").addEventListener("click", () => {
        window.location.href = "../seller-frontend/statistics.html";
    })
if (document.getElementById("vouchers"))
    document.getElementById("vouchers").addEventListener("click", () => {
        window.location.href = "../seller-frontend/vouchers.html";
    })
if (document.getElementById("discounts"))
    document.getElementById("discounts").addEventListener("click", () => {
        window.location.href = "../seller-frontend/discounts.html";
    })
if (document.getElementById("discounts-nav"))
    document.getElementById("discounts-nav").addEventListener("click", () => {
        window.location.href = "../seller-frontend/discounts.html";
    })
document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "../client-frontend/index.html";
})