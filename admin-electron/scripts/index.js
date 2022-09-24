import { useState } from "./useState.js";
import { PageLocations } from './PageLocations.js';
import { GetStats } from './GetStats.js';

import { GenerateLottery } from './GenerateLottery.js';
import { Clients } from './Clients.js';
import { AddSeller } from "./AddSeller.js";
import { EditSeller } from "./EditSeller.js";
import { DeleteSeller } from "./DeleteSeller.js";
import { AuthenticateUser } from "./Axios/AuthenticateUser.js"
  

AuthenticateUser();
PageLocations();
GetStats();
GenerateLottery();
Clients();
AddSeller();
EditSeller();

if(localStorage.getItem("token")){
  AuthenticateUser();
}


