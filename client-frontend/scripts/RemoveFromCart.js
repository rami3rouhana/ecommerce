export const RemoveFromCart = async (data) => {

    const url = "http://localhost/ecommerce/ecommerce-server/delete-from-cart.php";
    const response = await axios.post(url, data, {headers: {'Authorization': `token ${localStorage.getItem("token")}` }});
    console.log(response);
    
}