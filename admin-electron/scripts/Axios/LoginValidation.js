const GetProducts = async () => {
    let data = {"email": "admin@gmail.com",
                "password": "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"}
    //data = JSON.parse(data);
    console.log(data);
    const url = "http://localhost/ecommerce/ecommerce-server/login.php";
    const products = await axios.get(url, data);
    //console.log(JSON.stringify(products));
    
    axios.post(url, {"email": "admin@gmail.com",
    "password": "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"})
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    
}

GetProducts();