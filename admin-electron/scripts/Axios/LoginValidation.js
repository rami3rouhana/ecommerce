export const LoginValidation = async (email, password) => {
    let data = {"email": email,
                "password": password}
    console.log(data);
    const url = "http://localhost/ecommerce/ecommerce-server/login.php";
    //console.log(JSON.stringify(products));
    
    await axios.post(url, data)
      .then(function (response) {
        print(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
}

function print(response){
    let responseTaken = response;

    if((responseTaken.data.error) == "Wrong Credentials"){
        let errorDiv = document.getElementById("error-login-div");
        errorDiv.innerHTML = "Wrong Credentials!";
        errorDiv.classList.remove("hidden");
    }
    else{
      console.log(response.data.jwt);
        localStorage.setItem("token", response.data.jwt);
        if(document.getElementById("error-login-div"))
        document.getElementById("error-login-div").classList.add("hidden");
        window.location.href = 'http://localhost/ecommerce/admin-electron/clients.html';
    }
}

if(document.getElementById("login-button") && localStorage.getItem("token")){
  window.location.href = 'http://localhost/ecommerce/admin-electron/clients.html';
}

//Logout
if(document.getElementById("logout"))
document.getElementById("logout").addEventListener("click", () => {
  localStorage.clear("token");
  window.location.href = 'http://localhost/ecommerce/admin-electron/';
})