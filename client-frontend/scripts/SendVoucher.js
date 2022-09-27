export const SendVoucher = () => {
    if(document.getElementById("voucher-btn"))
    document.getElementById("voucher-btn").addEventListener("click", ()=>{
        document.getElementById("voucher-popup").classList.remove("hidden")
    })
    if(document.getElementById("close-btn-voucher"))
    document.getElementById("close-btn-voucher").addEventListener("click",()=>{
        document.getElementById("voucher-popup").classList.add("hidden")
    })
    if(document.getElementById("voucher-email")){
        //Find voucher value
        document.getElementById('send-voucher').addEventListener("click", async () => {
            let ele = document.getElementsByName('prices');
            //console.log("gg");
            //console.log(ele);
            for(let i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                    let voucherValue = (ele[i].value);
                    let voucherCode = document.getElementById("voucher-code").value;
                    let emailToSendTo = document.getElementById("voucher-email").value;
                    console.log(voucherValue, emailToSendTo, voucherCode);
                    const url = "http://localhost/ecommerce/ecommerce-server/add-vouchers.php";
                    let data = {"code": voucherCode,
                                "email": emailToSendTo,
                                "amount": voucherValue}
                    const response = await axios.post(url, data, {headers: {'Authorization': `token ${localStorage.getItem("token")}` }});
                    console.log(response);
                }
            }
                document.getElementById("voucher-popup").classList.add("hidden")
        })
    }
}