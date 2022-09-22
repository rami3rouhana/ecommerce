export const GetStats = () => {
    if(document.getElementById("submit-date"))
    document.getElementById("submit-date").addEventListener("click", () => {
        if(document.getElementById("date_from"))
        {
            console.log(document.getElementById("date_from").value);
        }
    })
}