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
        localStorage.setItem("token", response.data.jwt);
        if(document.getElementById("error-login-div"))
        document.getElementById("error-login-div").classList.add("hidden");
    }
}