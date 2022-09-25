export const SetLottery = () => {
    if(document.getElementById('lottery-btn'))
    document.getElementById('lottery-btn').addEventListener('click', () => {
        const nums = Array.prototype.slice.call(document.getElementsByClassName('num'));
        nums.forEach(num => {
            num.disabled = true;
            console.log(num.value)
        });
        document.getElementById('lottery-btn').disabled = true;
    })

    //Get lotteries
    
}