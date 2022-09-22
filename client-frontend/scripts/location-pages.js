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

}