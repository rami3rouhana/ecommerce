export const SendVoucher = () => {
    if(document.getElementById("voucher-email")){

        //Find voucher value
        document.getElementById('send-voucher').addEventListener("click", () => {
            let ele = document.getElementsByName('prices');
            //console.log("gg");
            //console.log(ele);
            for(let i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                    console.log(ele[i].value)
                }
            }
        })
    }
}