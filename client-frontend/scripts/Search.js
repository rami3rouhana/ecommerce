import { GetProducts } from "./GetProducts.js";

export const Search = () => {
    if(document.getElementById("searching")){
        document.getElementById("searching").onkeyup=()=>{
            console.log(document.getElementById("searching").value);
            //Update products
            GetProducts(document.getElementById("searching").value);
        }
    }
}