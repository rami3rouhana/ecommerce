export const AddLottery = async (data) => {

    const url = "http://localhost/ecommerce/ecommerce-server/addlottery.php";
    const response = await axios.post(url, data, {headers: {'Authorization': `token ${localStorage.getItem("token")}` 
          
}});
    console.log(response.data);
}