import { useState } from "./useState.js";

let [id, setId] =useState(0);

export const Clients = () =>{

    if(document.getElementsByClassName("clickable").length >0){
        const banned = Array.prototype.slice.call( document.getElementsByClassName("clickable") );
        banned.forEach( ban => {
            ban.addEventListener("click", (e)=> {
                document.getElementById("seller-popup-form").classList.remove('hidden');
                setId(e.currentTarget.parentElement.parentElement.id);
                document.getElementById("ban-button").addEventListener("click", ()=> {
                    console.log(id());
                    document.getElementById("seller-popup-form").classList.add('hidden');
                })
            })            
        });
    }
    

    if(document.getElementById("close-btn"))
    document.getElementById("close-btn").addEventListener('click', () => {
        document.getElementById("seller-popup-form").classList.add('hidden');
    });



}