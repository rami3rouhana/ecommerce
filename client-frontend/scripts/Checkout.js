export const Checkout = async () => {
    const url = "http://localhost/ecommerce/ecommerce-server/checkout.php";
    const response = await axios.post(url, {discout_used: 0}, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
    console.log(response);
}