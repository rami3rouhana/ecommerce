export const AddTo = async (type, data) => {

    if(type == 'favorite'){
        const url = "http://localhost/ecommerce/ecommerce-server/add-to-favorites.php";
        const response = await axios.post(url, data, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
        console.log(response);
    }

    if(type == 'cart'){
        const url = "http://localhost/ecommerce/ecommerce-server/add-to-cart.php";
        const response = await axios.post(url, data, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
        console.log(response);
    }

    if(type == 'wishlist'){
        const url = "http://localhost/ecommerce/ecommerce-server/add-to-wishlist.php";
        const response = await axios.post(url, data, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
        console.log(response);
    }

}