export const SetLottery = () => {
    if(document.getElementById('lottery-btn')){
        const nums = Array.prototype.slice.call(document.getElementsByClassName('num'));
        document.getElementById('lottery-btn').addEventListener('click', () => {
        
            nums.forEach(num => {
                num.disabled = true;
                console.log(num.value)
            });
            document.getElementById('lottery-btn').disabled = true;
        })

        //Get lotteries
        console.log(nums);
    }
}