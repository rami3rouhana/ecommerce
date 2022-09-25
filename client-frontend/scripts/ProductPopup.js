export const ProductPopup = async (product_id) => {
    document.getElementById("product-popup-form").classList.remove('hidden');
    let productTitle = document.getElementById("product-popup-title");
    let productPrice = document.getElementById("product-popup-price");
    let productDescription = document.getElementById("product-popup-description");
    let productPicture = document.getElementById("product-popup-picture");

    //Get product from database
    const url = "http://localhost/ecommerce/ecommerce-server/receive-product.php";
    const response = await axios.post(url, {product_id: product_id}, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
    let dataResponse = (response.data['product_info'][0]);

    //Update popup
    productTitle.innerHTML = (dataResponse.name);
    productPrice.innerHTML = (dataResponse.price) + ("$");
    productPicture.setAttribute('src', dataResponse.picture_url);
    productDescription.innerHTML = ("Seller Name: ") + (dataResponse.seller_name);
    //productPicture.innerHTML = (dataResponse.name);


    //Increment views on picture
    const url2 = "http://localhost/ecommerce/ecommerce-server/increment-productview.php";
    const response2 = await axios.post(url2, {product_id: product_id}, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
    console.log(response2);
}