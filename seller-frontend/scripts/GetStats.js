export const GetStats = async () => {

    if (document.getElementById("stats-table"))
    {
        let tableHTML = document.getElementById("stats-table").innerHTML;
        const url = "http://localhost/ecommerce/ecommerce-server/receive-seller-stats.php";
        const data = {};
        const response = await axios.post(url, data, { headers: { 'Authorization': `token ${localStorage.getItem("token")}` } })
        console.log(response.data.stats);

        const asyncRes = await Promise.all(response.data.stats.map(async (stat) =>  {
            console.log(stat.product_name);
            const url2 = "http://localhost/ecommerce/ecommerce-server/product-sold.php";
            const response2 = await axios.post(url2, {"product_id": stat.product_id}, { headers: { 'Authorization': `token ${localStorage.getItem("token")}` } })
            tableHTML += (`
                <tr>    
                    <td>${stat.product_id}</td>
                    <td>${stat.product_name}</td>
                    <td>${stat.product_price}</td>
                    <td>${stat.product_views}</td>
                    <td>${response2.data.result['timesSold']}</td>
                </tr> `)
            
        }))
        document.getElementById("stats-table").innerHTML = tableHTML; 
    }
}