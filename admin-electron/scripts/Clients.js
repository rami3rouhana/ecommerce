import { useState } from "./useState.js";
import {GetClients} from './Axios/GetClients.js'
import {BanUser} from './BanUser.js';

let [id, setId] = useState(0);

export const Clients = async () =>{
    await GetClients();
    console.log(document.getElementsByClassName("clickable-ban").length);
    if(document.getElementsByClassName("clickable-ban").length > 0 && document.getElementById("seller-popup-form") && document.getElementById("ban-button")){
        const banned = Array.prototype.slice.call( document.getElementsByClassName("clickable-ban") );
        banned.forEach( ban => {
            ban.addEventListener("click", (e)=> {
                document.getElementById("seller-popup-form").classList.remove('hidden');
                document.getElementById("cover").classList.remove('hidden');
                setId(e.currentTarget.parentElement.parentElement.id);
            })            
        });
        document.getElementById("ban-button-client").addEventListener("click", async ()=> {
            //console.log(id());
            BanUser(id());
            document.getElementById("seller-popup-form").classList.add('hidden');
            document.getElementById("cover").classList.add('hidden');
        })
    }


    if(document.getElementById("close-btn"))
    document.getElementById("close-btn").addEventListener('click', () => {
        document.getElementById("seller-popup-form").classList.add('hidden');
        document.getElementById("cover").classList.add('hidden')
    });



}