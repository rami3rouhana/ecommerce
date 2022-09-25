export const GetStats = async () => {

    if (document.getElementById("stats-table"))
    {
        const url = "http://localhost/ecommerce/ecommerce-server/receive-seller-stats.php";
        const data = {};
        const response = await axios.post(url, data, { headers: { 'Authorization': `token ${localStorage.getItem("token")}` } })
        console.log(response.data.stats);
    }
}