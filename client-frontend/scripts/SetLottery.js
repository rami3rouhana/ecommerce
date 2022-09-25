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
                    matches[i] = [nums[i].value, i];
                }
            }
        })
        console.log(matches);
        //Get voucher according to lottery

        })
        

        



    }
}