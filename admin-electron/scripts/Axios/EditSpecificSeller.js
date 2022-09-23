export const EditSpecificSeller = async (data) => {

    const url = "http://localhost/ecommerce/ecommerce-server/edit-seller.php";
    const response = await axios.post(url,data, {headers: {'Authorization': `token ${localStorage.getItem("token")}` 
          
}});console.log(response);

    //let clients = response.data['clients'];
    //console.log(clients);
    //clients.map(client => {
    //    clientsHTML += Client(client);
    //})
    //console.log(clientsHTML);
    //document.getElementById("main-table-clients").innerHTML = clientsHTML;*/
}