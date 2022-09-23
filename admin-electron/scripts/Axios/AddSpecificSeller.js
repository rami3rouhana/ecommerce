export const AddSpecificSeller = async (data) => {

    const url = "http://localhost/ecommerce/ecommerce-server/addseller.php";
    const response = await axios.post(url,data, {headers: {'Authorization': `token ${localStorage.getItem("token")}` 
          
}});console.log(response);
}