import { useState } from "./useState.js";

export const EditCategory = () => {


    if (document.getElementById("close-btn-edit"))
        document.getElementById("close-btn-edit").addEventListener("click", () => {
            document.getElementById("edit-popup").classList.add('hidden');
        })

}