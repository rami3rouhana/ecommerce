import { Product } from "./Product.js";
import { AddTo } from "./AddTo.js";

export const GetProducts = async () => {
    if (document.getElementById("products-row")) {
        let productsHTML = ""
        const url = "http://localhost/ecommerce/ecommerce-server/receive-all-products.php";
        const products = await axios.get(url);
        products.data.map(product => {
            productsHTML += Product(product);
        })
        document.getElementById("products-row").innerHTML = productsHTML;
        const products_section = Array.prototype.slice.call(document.getElementsByClassName("image-product"));
        products_section.forEach(product => {
            product.addEventListener("click", (e) => {
                console.log(e.currentTarget.parentElement.id);

                document.getElementById("product-popup-form").classList.remove('hidden');
            })
        });

        const favorite_section = Array.prototype.slice.call(document.getElementsByClassName("fa-star"));
        favorite_section.forEach(favorite => {
            favorite.addEventListener("click", (e) => {
                let data = {products_id: e.currentTarget.parentElement.id};
                AddTo('favorite', data);
                console.log(e.currentTarget.parentElement.id);
            })
        });

        const whishlist_section = Array.prototype.slice.call(document.getElementsByClassName("fa-list"));
        whishlist_section.forEach(whishlist => {
            whishlist.addEventListener("click", (e) => {
                console.log(e.currentTarget.parentElement.id);
            })
        });

        const cart_section = Array.prototype.slice.call(document.getElementsByClassName("fa-shopping-cart"));
        cart_section.forEach(cart_product => {
            cart_product.addEventListener("click", (e) => {
                console.log(e.currentTarget.parentElement.id);
            })
        });
        if (document.getElementById("close-btn"))
            document.getElementById("close-btn").addEventListener("click", () => {
                document.getElementById("product-popup-form").classList.add('hidden')
            })
    }
}