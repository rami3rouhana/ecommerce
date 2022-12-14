import { Cart } from "./Cart.js";
import { Checkout } from "./Checkout.js";

export const PopulateCart = async () => {
    if(document.getElementById("cart-table")){
        let cartHTML = "";
        const url = "http://localhost/ecommerce/ecommerce-server/receive-cart.php";
        const response = await axios.post(url,{}, {headers: {'Authorization': `token ${localStorage.getItem("token")}` }});
        
        let cart = response.data.cart;
        if(cart != undefined){
            cart.map(cartItem => {
                cartHTML += Cart(cartItem);
            })
            
            if(document.getElementById("cart-table")){
                document.getElementById("cart-table").innerHTML = cartHTML;
            }
        }


        //Get total
        const url2 = "http://localhost/ecommerce/ecommerce-server/receive-cart-total.php";
        const response2 = await axios.post(url2, {}, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
        if(response2.data.total != undefined){
            let total = (response2.data.total.total);
            if(document.getElementById("total-value")){
                document.getElementById("total-value").innerHTML = total;
            }
        }



        
        if(document.getElementById("checkout-cart")){
            document.getElementById("checkout-cart").addEventListener("click", async () => {
                await Checkout();
            })
          }
    }
}

