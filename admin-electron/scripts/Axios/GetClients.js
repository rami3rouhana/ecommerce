import { Client } from "./Client.js";


export const GetClients = async () => {
    let clientsHTML = "";
    let data = {};
    const url = "http://localhost/ecommerce/ecommerce-server/receive-clients.php";
    const response = await axios.get(url, {headers: {'Authorization': `token ${localStorage.getItem("token")}` 
      }});

    let clients = response.data['clients'];
    //console.log(clients);
    clients.map(client => {
        clientsHTML += Client(client);
    })
    //console.log(clientsHTML);
    if(document.getElementById("main-table-clients")){
      document.getElementById("main-table-clients").innerHTML = clientsHTML;
    }
    
}

