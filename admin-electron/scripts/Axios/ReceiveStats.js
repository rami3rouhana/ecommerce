export const ReceiveStats = async (data) => {
    if(data.user_type == 'Client'){

    }
    else if(data.user_type == 'Seller'){
        console.log(data);
            const url = "http://localhost/ecommerce/ecommerce-server/select-revenue.php";
            const response = await axios.post(url, data, {headers: {'Authorization': `token ${localStorage.getItem("token")}` 
                 // 
        }});console.log(await response.data['topgroups']);
    }


}
