import { useState } from "./useState.js";
import { useEffect } from "./useEffect.js";
import { AddCategory } from "./AddCategory.js";
import { AddProduct } from "./AddProduct.js";
import { AddDiscount } from "./AddDiscount.js"
import { AddVoucher } from "./AddVoucher.js"
import { PageLocations } from "./PageLocations.js"
import { SubmitAd } from "./SubmitAd.js";
import { EditCategory } from "./EditCategory.js"
import { Validate } from "./Validate.js";
let [category, setCategory] = useState({});

if ( window.location.href !== "http://127.0.0.1:5500/client-frontend/landing-page.html" || window.location.href !== "http://127.0.0.1:5500/client-frontend/index.html" || window.location.href !== "http://127.0.0.1:5500/client-frontend/reset-password.html")
    Validate();

// On windows load.
useEffect(setCategory,category);

// Page functionalities
AddCategory(category, setCategory);
AddProduct();
AddDiscount();
AddVoucher();
PageLocations();
SubmitAd();
EditCategory();









