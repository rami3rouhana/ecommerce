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
        lotteries.forEach(lottery => {
            for(let i = 0; i < nums.length; i++){
                //console.log(nums[i].value);
                if(nums[i].value == (lottery.random_number.toString()[i])){
                    console.log("match");
                }
            }
        })
        })



    }
}