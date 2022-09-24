export const AuthenticateUser = async () => {

    const url = "http://localhost/ecommerce/ecommerce-server/auth-user.php";
    const response = await axios.post(url, {}, {headers: {'Authorization': `token ${localStorage.getItem("token")}` 
          
}});
if(document.getElementById("admin-title"))
{
    document.getElementById("admin-title").innerHTML = response.data['user'][1];
}
if(!response.data['user'][1]){
    window.location.href = './';
}
    console.log(response.data);
}