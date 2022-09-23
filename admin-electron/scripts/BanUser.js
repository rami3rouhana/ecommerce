export const BanUser = async (userid) => {
    //console.log(userid);
    //let clientsHTML = "";
    //let data = {};
    const url = "http://localhost/ecommerce/ecommerce-server/ban-client.php";
    const response = await axios.post(url,{"banuser_id": userid}, {headers: {'Authorization': `token ${localStorage.getItem("token")}` 
          
}});console.log(response);

    //let clients = response.data['clients'];
    //console.log(clients);
    //clients.map(client => {
    //    clientsHTML += Client(client);
    //})
    //console.log(clientsHTML);
    //document.getElementById("main-table-clients").innerHTML = clientsHTML;*/
}