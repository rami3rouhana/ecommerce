export const ApplyDiscount = async ()  => {
    document.getElementById("apply-discount").addEventListener("click", async ()  => {
        console.log(document.getElementById("discount-code").value);
        let discount_code = (document.getElementById("discount-code").value);
        let discountDiv = (document.getElementById("discount-container"));
        const url = "http://localhost/ecommerce/ecommerce-server/apply-discount.php";
        const response = await axios.post(url, {discount_code: discount_code}, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
        let items = response.data['itemsAffected'];
        items.map(item => {
            discountDiv.innerHTML += item.name + "<br>"; 
        })
        discountDiv.classList.remove("hidden");
    })
}