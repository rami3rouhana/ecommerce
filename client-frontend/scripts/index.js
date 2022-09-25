import { GetProducts } from "./GetProducts.js";
import { login } from "./Login.js";
import { Register } from "./Register.js";
import { GetFavorites } from "./GetFavorites.js";
import { GetWhishlist } from "./Getwhishlist.js";
import { PageLocations } from "./location-pages.js";
import { ShowReset } from "./ShowReset.js";
import { ResetPassword } from "./ResetPassword.js";
import { SetLottery } from "./SetLottery.js";
import { SetItemList } from "./SetItemList.js";
import { PopulateCart } from "./PopulateCart.js";
import { ChangePassword } from "./ChangePassword.js";
import { Search } from "./Search.js";
import { ProfilePage } from "./ProfilePage.js";
import { ReceiveSellers } from "./RceiveSellers.js";
import { Validate } from "./Validate.js";
import { SendVoucher } from "./SendVoucher.js";
import { ReceiveMessages } from "./ReceiveMessages.js";


Validate();
PageLocations();
GetProducts("");
Register();
GetFavorites();
login();
GetWhishlist();
ShowReset();
ResetPassword();
SetLottery();
PopulateCart();
SetItemList();
ChangePassword();
Search();
ProfilePage();
ReceiveSellers();
SendVoucher();
ReceiveMessages();

