import { useState } from "./useState.js";

export const GenerateLottery = () => {

    let [numbers, setNumbers] = useState({});
    
    if(document.getElementById("lotteryContainer")){
        let firstN = document.getElementById("firstN");
        let secondN = document.getElementById("secondN");
        let thirdN = document.getElementById("thirdN");

        if(document.getElementById("generateNumbers"))
        document.getElementById("generateNumbers").addEventListener("click", () => {
            firstN.innerHTML = Math.floor(Math.random() * 10);
            secondN.innerHTML = Math.floor(Math.random() * 10);
            thirdN.innerHTML = Math.floor(Math.random() * 10);
            let x = {firstN: firstN.innerHTML,
                     secondN: secondN.innerHTML,
                     thirdN: thirdN.innerHTML}
            setNumbers(x);
            console.log(numbers());
        })

    }
}