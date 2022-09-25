import { ReceiveStats } from "./Axios/ReceiveStats.js";

export const GetStats = async () => {
    let user_type = '';
    let date_from = '';
    let date_to = '';
    if(document.getElementById("submit-date"))
    document.getElementById("submit-date").addEventListener("click", () => {
        if(document.getElementById("date_from"))
        {
            date_from = (document.getElementById("date_from").value);
        }
        if(document.getElementById("date_to"))
        {
            date_to = (document.getElementById("date_to").value);
        }
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
                user_type = 'Seller';
            }
            if(clientsBtn.classList.contains("active-button")){
                user_type = 'Client';
            }
            let data = {user_type: user_type, date_from: date_from, date_to: date_to};
            //ReceiveStats(data);
            console.log(ReceiveStats(data));
        })
    }

    if(document.getElementById("logout-btn")){
        document.getElementById("logout-btn").addEventListener("click", () => {
            console.log("gg");
            localStorage.clear("token");
            window.location.href = 'http://localhost/ecommerce/admin-electron/';
        })
    }
}