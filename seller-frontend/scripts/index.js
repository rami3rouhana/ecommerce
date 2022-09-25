import { useState } from "./useState.js";
import { useEffect } from "./useEffect.js";
import { AddCategory } from "./AddCategory.js";
import { AddProduct } from "./AddProduct.js";
import { AddDiscount } from "./AddDiscount.js"
import { AddVoucher } from "./AddVoucher.js"
import { PageLocations } from "./PageLocations.js"
import { SubmitAd } from "./SubmitAd.js";
import { EditCategory } from "./EditCategory.js"
let [category, setCategory] = useState({});

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









