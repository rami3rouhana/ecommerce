export const PageLocations = () => {
    if(document.getElementById("users"))
    document.getElementById("users").addEventListener("click", () => {
        window.location.href = "./clients.html";
    })

    if(document.getElementById("stats"))
    document.getElementById("stats").addEventListener("click", () => {
        window.location.href = "./c_charts.html";
    })

    if(document.getElementById("lottery"))
    document.getElementById("lottery").addEventListener("click", () => {
        window.location.href = "./lottery.html";
    })

    if(document.getElementById("clientsBtnPage"))
    document.getElementById("clientsBtnPage").addEventListener("click", () => {
        window.location.href = "./clients.html";
    })

    if(document.getElementById("sellersBtnPage"))
    document.getElementById("sellersBtnPage").addEventListener("click", () => {
        window.location.href = "./sellers.html";
    })

    /*if(document.getElementById("clientsBtnPage") && document.getElementById("sellersBtnPage")){
        console.log("gg");
        document.getElementById("clientsBtnPage").addEventListener("click", () => {
            window.location.href = "./clients.html"
        })
        
        document.getElementById("sellersBtnPage").addEventListener("click", () => {
            window.location.href = "./sellers.html"
        })
    }*/
}