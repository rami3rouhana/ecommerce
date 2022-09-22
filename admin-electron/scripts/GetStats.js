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


    /*clientsBtn.addEventListener("click", () => {
    })
    document.getElementById("submit-date").addEventListener("click", () => {
        if(.classList.contains("active-button")){
            console.log("gg");
        }
        if(document.getElementById("clientsBtn").classList.contains("active-button")){
            console.log("gg");
        }
    })*/

}