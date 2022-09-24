import { Cart } from "./Cart.js";


export const PopulateCart = async () => {
    let cartHTML = "";
    const url = "http://localhost/ecommerce/ecommerce-server/receive-cart.php";
    const response = await axios.post(url,{}, {headers: {'Authorization': `token ${localStorage.getItem("token")}` }});
    console.log(response.data.cart);

    let cart = response.data.cart;
    //console.log(clients);
    cart.map(cartItem => {
        cartHTML += Cart(cartItem);
    })
    console.log(cartHTML);
    if(document.getElementById("cart-table")){
      document.getElementById("cart-table").innerHTML = cartHTML;
    }
    
}

