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
}