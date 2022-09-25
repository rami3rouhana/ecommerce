export const Validate = async () => {
    // Api call
    const url = "http://localhost/ecommerce/ecommerce-server/validate-users.php";
    const dataJWt = await axios.get(url, { headers: { 'Authorization': `token ${localStorage.getItem("token")}` } });
    if (typeof dataJWt.data.jwt !== "undefined") {
        localStorage.setItem("token", dataJWt.data.jwt)
        //debugger
        if (dataJWt.data.role === "Client")
            if (window.location.href === "http://127.0.0.1:5500/seller-frontend/ads.html" || window.location.href === "http://127.0.0.1:5500/seller-frontend/categories.html" || window.location.href === "http://127.0.0.1:5500/seller-frontend/discounts.html" || window.location.href === "http://127.0.0.1:5500/seller-frontend/products.html" || window.location.href === "http://127.0.0.1:5500/seller-frontend/statistics.html" || window.location.href === "http://127.0.0.1:5500/client-frontend/landing-page.html" || window.location.href === "http://127.0.0.1:5500/client-frontend/index.html" || window.location.href === "http://127.0.0.1:5500/client-frontend/reset-password.html")
                window.location.href = "http://127.0.0.1:5500/client-frontend/products.html";
        if (dataJWt.data.role === "Seller")
            if (window.location.href === "http://127.0.0.1:5500/client-frontend/favorites.html" || window.location.href === "http://127.0.0.1:5500/client-frontend/products.html" || window.location.href === "http://127.0.0.1:5500/client-frontend/profile.html" || window.location.href === "http://127.0.0.1:5500/client-frontend/wishlist.html" || window.location.href === "http://127.0.0.1:5500/client-frontend/cart.html" || window.location.href === "http://127.0.0.1:5500/client-frontend/statistics.html" || window.location.href === "http://127.0.0.1:5500/client-frontend/landing-page.html" || window.location.href === "http://127.0.0.1:5500/client-frontend/index.html" || window.location.href === "http://127.0.0.1:5500/client-frontend/reset-password.html")
                window.location.href = "http://127.0.0.1:5500/seller-frontend/products.html";
<<<<<<< HEAD
    } else{
            window.location.href = "http://127.0.0.1:5500/client-frontend/landing-page.html";
=======
    } else {
        window.location.href = "http://127.0.0.1:5500/client-frontend/landing-page.html";
>>>>>>> b8c0fc931259dd84593d3028847f92eb7bc30d02
    }
}


