export const AuthenticateUser = async () => {

    const url = "http://localhost/ecommerce/ecommerce-server/auth-user.php";
    const response = await axios.post(url, {}, {headers: {'Authorization': `token ${localStorage.getItem("token")}` 
          
}});
if(response.data['user'][1] == undefined)
{
    window.location.href = 'http://localhost/ecommerce/admin-electron/';
    localStorage.clear("token");
    console.log("not");
}
if(response['authentication'] == 'failed'){

}
else if(document.getElementById("admin-title"))
{
    document.getElementById("admin-title").innerHTML = response.data['user'][1];
}

    console.log(response.data);
}