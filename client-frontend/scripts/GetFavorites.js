import { Product } from "./Product.js";

export const GetFavorites = async () => {
    if (document.getElementById("favorites-row")) {
        let favoritesHTML = ""
        const url = "http://localhost/ecommerce/ecommerce-server/receive-favorites.php";
        const products = await axios.get(url, { headers: {
            'Authorization': `token ${localStorage.getItem(`token`)}`
        }
        });
        products.data.products.map(product => {
            favoritesHTML += Product(product);
        })
        document.getElementById("favorites-row").innerHTML = favoritesHTML;
    }

}