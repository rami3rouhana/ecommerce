import { Product } from "./Product.js";

export const GetProducts = async () => {
<<<<<<< HEAD
    let productsHTML = ""
    const url = "http://localhost/ecommerce/ecommerce-server/receive-all-products.php";
    const products = await axios.get(url);
    products.data.map(product => {
        productsHTML += Product(product);
    })
    document.getElementById("products-row").innerHTML = productsHTML;
=======
    if (document.getElementById("products-row")) {
        let productsHTML = ""
        const url = "http://localhost/ecommerce/ecommerce-server/receive-all-products.php";
        const products = await axios.get(url);
        products.data.map(product => {
            productsHTML += Product(product);
        })
        document.getElementById("products-row").innerHTML = productsHTML;
    }

>>>>>>> 0fde945eddeff7c2e9e1274d025678f2901e257e
}