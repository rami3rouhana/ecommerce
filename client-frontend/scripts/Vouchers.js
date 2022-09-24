export const Vouchers = async () => {
    
    //Get voucher and display them:
    let selectVoucherHTML = document.getElementById("select-voucher");
    const url = "http://localhost/ecommerce/ecommerce-server/receive-vouchers.php";
    const response = await axios.post(url, {}, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
    console.log(response.data['results']);
    let vouchers = response.data['results'];
    vouchers.map((voucher, i) => {
        selectVoucherHTML.innerHTML +=  (`<option value="${voucher.code}">${voucher.code} : ${voucher.amount}$</option>`);
    })

    //Apply Voucher
    let value = selectVoucherHTML.value;
    console.log(value);

}