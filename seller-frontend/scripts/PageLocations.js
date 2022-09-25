export const PageLocations = () => {
    if (document.getElementById("products"))
        document.getElementById("products").addEventListener("click", () => {
            window.location.href = "../seller-frontend/products.html";
        })
    if (document.getElementById("products-nav"))
        document.getElementById("products-nav").addEventListener("click", () => {
            window.location.href = "../seller-frontend/products.html";
        })
    if (document.getElementById("categories"))
        document.getElementById("categories").addEventListener("click", () => {
            window.location.href = "../seller-frontend/categories.html";
        })
    if (document.getElementById("ads"))
        document.getElementById("ads").addEventListener("click", () => {
            window.location.href = "../seller-frontend/ads.html";
        })
    if (document.getElementById("statistics"))
        document.getElementById("statistics").addEventListener("click", () => {
            window.location.href = "../seller-frontend/statistics.html";
        })
    if (document.getElementById("vouchers"))
        document.getElementById("vouchers").addEventListener("click", () => {
            window.location.href = "../seller-frontend/vouchers.html";
        })
    if (document.getElementById("discounts"))
        document.getElementById("discounts").addEventListener("click", () => {
            window.location.href = "../seller-frontend/discounts.html";
        })
    if (document.getElementById("discounts-nav"))
        document.getElementById("discounts-nav").addEventListener("click", () => {
            window.location.href = "../seller-frontend/discounts.html";
        })
    document.getElementById("logout").addEventListener("click", () => {
        localStorage.removeItem("token");
        window.location.href = "../client-frontend/index.html";
    })
    if(document.getElementById("chat"))
    document.getElementById("chat").addEventListener("click", () => {
        window.location.href = "./chat.html";
    })
}