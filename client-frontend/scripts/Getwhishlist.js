import { Product } from "./Product.js";

export const GetWhishlist = async () => {
    if (document.getElementById("whishlist-row")) {
        let whishlistHTML = ""
        const url = "http://localhost/ecommerce/ecommerce-server/receive-whishlist-products.php";
        const whishlist = await axios.get(url, { headers: {
            'Authorization': `token ${localStorage.getItem(`token`)}`
        }
        });
        whishlist.data.products.map(product => {
            whishlistHTML += Product(product);
        })
        document.getElementById("whishlist-row").innerHTML = whishlistHTML;
    }

}