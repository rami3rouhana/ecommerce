import { Product } from "./Product.js";

export const GetProducts = async () => {
    if (document.getElementById("products-row")) {
        let productsHTML = ""
        const url = "http://localhost/ecommerce/ecommerce-server/receive-all-products.php";
        const products = await axios.get(url);
        products.data.map(product => {
            productsHTML += Product(product);
        })
        document.getElementById("products-row").innerHTML = productsHTML;
    }
}