export const PageLocations = () => {
    if(document.getElementById("cart"))
    document.getElementById("cart").addEventListener("click", () => {
        window.location.href = "./cart.html";
    })
    if(document.getElementById("whishlist"))
    document.getElementById("whishlist").addEventListener("click", () => {
        window.location.href = "./wishlist.html";
    })
    if(document.getElementById("favorite"))
    document.getElementById("favorite").addEventListener("click", () => {
        window.location.href = "./favorites.html";
    })
    if(document.getElementById("products"))
    document.getElementById("products").addEventListener("click", () => {
        window.location.href = "./products.html";
    })
    if(document.getElementById("profile"))
    document.getElementById("profile").addEventListener("click", () => {
        window.location.href = "./profile.html";
    })
    if(document.getElementById("chat"))
    document.getElementById("chat").addEventListener("click", () => {
        window.location.href = "./chat.html";
    })

}