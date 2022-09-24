import { PopulateCart } from "./PopulateCart.js";

export const SetItemList = async () => {
    await PopulateCart();
    const cart_delete_buttons = Array.prototype.slice.call(document.getElementsByClassName("cart-delete-button"));
    cart_delete_buttons.forEach(delete_button => {
        console.log("found one");
        delete_button.addEventListener("click", (e) => {
            console.log(e.currentTarget.parentElement.id);
            e.currentTarget.parentElement.remove();
        })
    });
}