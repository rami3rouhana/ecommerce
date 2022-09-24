import { GetProducts } from "./GetProducts.js";
import { login } from "./Login.js";
import { Register } from "./Register.js";
import { GetFavorites } from "./GetFavorites.js";
import { GetWhishlist } from "./Getwhishlist.js";
import { PageLocations } from "./location-pages.js";
import { ShowReset } from "./ShowReset.js";
import { ResetPassword } from "./ResetPassword.js";


PageLocations();
GetProducts();
Register();
GetFavorites();
login();
GetWhishlist();
ShowReset();
ResetPassword();