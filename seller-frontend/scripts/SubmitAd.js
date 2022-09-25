export const SubmitAd = () =>{

    if (document.getElementById("submit-ad"))
    document.getElementById("submit-ad").addEventListener("click", async() => {
        // Set data
        const picture_url = document.getElementById("ad-url").value;
        // Api call
        const url = "http://localhost/ecommerce/ecommerce-server/upload-ads.php";
        const data = JSON.stringify({
            picture_url
        })
        const dataJWt = await axios.post(url, data, {headers: {'Authorization': `token ${localStorage.getItem("token")}`}});
        if (typeof dataJWt.data.jwt !== "undefined")
            localStorage.setItem("token",dataJWt.data.jwt)
        // Display ads empty
        document.getElementById("ad-url").value = "";
    })
}