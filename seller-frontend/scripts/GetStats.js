export const GetStats = async () => {

    if (document.getElementById("stats-table"))
    {
        let tableHTML = document.getElementById("stats-table").innerHTML;
        const url = "http://localhost/ecommerce/ecommerce-server/receive-seller-stats.php";
        const data = {};
        const response = await axios.post(url, data, { headers: { 'Authorization': `token ${localStorage.getItem("token")}` } })
        console.log(response.data.stats);

        response.data.stats.map(stat => {
            //console.log(stat.product_name);
            tableHTML +=
            (`
                <tr>    
                    <td>${stat.product_id}</td>
                    <td>${stat.product_name}</td>
                    <td>${stat.product_price}</td>
                    <td>${stat.product_views}</td>
                    <td>Times Sold</td>
                </tr>
            `)
            console.log(tableHTML);
        })
        document.getElementById("stats-table").innerHTML = tableHTML; 
    }
}