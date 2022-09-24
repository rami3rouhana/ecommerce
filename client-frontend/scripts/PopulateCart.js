import { Cart } from "./Cart.js";
import { Checkout } from "./Checkout.js";

export const PopulateCart = async () => {
    if(document.getElementById("cart-table")){
        let cartHTML = "";
        const url = "http://localhost/ecommerce/ecommerce-server/receive-cart.php";
        const response = await axios.post(url,{}, {headers: {'Authorization': `token ${localStorage.getItem("token")}` }});
        console.log(response.data.cart);
        
        let cart = response.data.cart;
        cart.map(cartItem => {
            cartHTML += Cart(cartItem);
        })

        //Get total
        const url2 = "http://localhost/ecommerce/ecommerce-server/receive-cart-total.php";
        const response2 = await axios.post(url2, {}, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
        let total = (response2.data.total.total);
        if(document.getElementById("total-value")){
            document.getElementById("total-value").innerHTML = total;
        }

        if(document.getElementById("cart-table")){
          document.getElementById("cart-table").innerHTML = cartHTML;
        }

        
        if(document.getElementById("checkout-cart")){
            document.getElementById("checkout-cart").addEventListener("click", async () => {
                await Checkout();
            })
          }
    }
}

