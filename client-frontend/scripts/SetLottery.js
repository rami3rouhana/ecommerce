export const SetLottery = async () => {
    if(document.getElementById('lottery-btn')){
        const nums = Array.prototype.slice.call(document.getElementsByClassName('num'));
        document.getElementById('lottery-btn').addEventListener('click', async () => {
        
            nums.forEach(num => {
                num.disabled = true;

            });
            document.getElementById('lottery-btn').disabled = true;

        //Get lotteries
        const url = "http://localhost/ecommerce/ecommerce-server/receive-lotteries.php";
        const messages = await axios.post(url, {}, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
        let lotteries = (messages.data.lotteries);
        //matches = [index of match, value];
        let matches = [['', '']];
        lotteries.forEach(lottery => {
            for(let i = 0; i < nums.length; i++){
                //console.log(nums[i].value);
                if(nums[i].value == (lottery.random_number.toString()[i])){
                    //Call lottery api to set match number
                    //nOfMatches['lotteryNumber'] = (lottery.random_number.toString())
                    //nOfMatches.push("matched_once");
                    let x = nums[i].value
                    matches[i] = {x: i};
                }
            }
        })
            console.log(matches);
            let indexMatches = [];
            for(let i = 0; i < matches.length; i++){
                if(matches[i]){
                    indexMatches.push(matches[i].x);
                }
            }
            //INSERT VOUCHERS DEPENDING ON MATCHES
            let data = {"code": "lotter-voucher-" + matches.length * 10,
            "amount": matches.length * 10}
            const response2 = await axios.post("http://localhost/ecommerce/ecommerce-server/add-user-voucher.php", data, {headers: {'Authorization': `token ${localStorage.getItem("token")}` }});
            console.log(response2);
            //Get voucher according to lottery
            const url2 = "http://localhost/ecommerce/ecommerce-server/updatelottery.php";
            const response = await axios.post(url2, {"matchingnumbers": indexMatches}, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
            if(indexMatches.length >= 0){
                //alert("You won the lottery: " + indexMatches.length * 10 + "$");
                console.log(indexMatches);
            }
            
        })
        

        



    }
}