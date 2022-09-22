export const GetStats = () => {
    if(document.getElementById("submit-date"))
    document.getElementById("submit-date").addEventListener("click", () => {
        if(document.getElementById("date_from"))
        {
            let date_from = (document.getElementById("date_from").value);
        }
        if(document.getElementById("date_to"))
        {
            let date_to = (document.getElementById("date_to").value);
        }
        console.log(date_to.value, date_from.value)
    })


    //Set buttons
    if(document.getElementById("clientsBtn") && document.getElementById("sellersBtn")){
        let clientsBtn = document.getElementById("clientsBtn");
        let sellersBtn = document.getElementById("sellersBtn");
        clientsBtn.addEventListener("click", () => {
            clientsBtn.classList.add("active-button");
            sellersBtn.classList.remove("active-button");
        })
        sellersBtn.addEventListener("click", () => {
            clientsBtn.classList.remove("active-button");
            sellersBtn.classList.add("active-button");
        })
        if(document.getElementById("submit-date"))
        document.getElementById("submit-date").addEventListener("click", () => {
            if(sellersBtn.classList.contains("active-button")){
                console.log("sellers active");
            }
            if(clientsBtn.classList.contains("active-button")){
                console.log("clientsBtn active");
            }
        })
    }
}