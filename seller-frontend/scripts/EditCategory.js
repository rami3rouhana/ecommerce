import { useState } from "./useState.js";

export const EditCategory = (element) => {


    if (document.getElementById("close-btn-edit"))
        document.getElementById("close-btn-edit").addEventListener("click", () => {
            document.getElementById("edit-popup").classList.add('hidden');
        })

}