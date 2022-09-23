import {Seller} from "./Seller.js";

export const GetSellers = async () => {
    let sellersHTML = "";
    let data = {};
    const url = "http://localhost/ecommerce/ecommerce-server/receive-sellers.php";
    const response = await axios.get(url, {headers: {'Authorization': `token ${localStorage.getItem("token")}` 
      }});

    //l//et sellers = response.data["sellers"];
    let sellers = (response.data["sellers"]);
    //console.log(response.data);
    //console.log(clients);
    sellers.map(seller => {
        console.log(seller);
        sellersHTML += Seller(seller);
    })
    //console.log(clientsHTML);
    document.getElementById("main-table-sellers").innerHTML = sellersHTML;
}

