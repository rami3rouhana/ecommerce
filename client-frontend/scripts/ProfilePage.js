export const ProfilePage =  async () => {

    if(document.getElementById("profile-img-header")){
        const url = "http://localhost/ecommerce/ecommerce-server/receive-userinfo.php";
        const response = await axios.post(url, {}, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}})
        console.log(response.data['userid']);
        let userid = (response.data['userid']);
        let user_name = (response.data['name']);
        let user_email = (response.data['email']);
        document.getElementById("profile-img-header").setAttribute('src', "http://localhost/ecommerce/client-frontend/images/uploadedimages/" + userid + "-" + user_name + ".jpg");
    }

    if(document.getElementById("update-popup-btn")){
        document.getElementById("update-popup-btn").addEventListener("click", () => {
            console.log("3aw");
            document.getElementById("profile-popup-form").classList.remove("hidden");
        })
        document.getElementById("close-update-popup-btn").addEventListener("click", () => {
            document.getElementById("profile-popup-form").classList.add("hidden");
        })

        if(document.getElementById("profile-picture-card")){
            await SetProfilePicture();
        }
        

        const picture = document.getElementById("profile-picture");
        picture.addEventListener("change", async e => {
            const file = picture.files[0];
            const reader = new FileReader();

            reader.addEventListener("load", async () => {
                console.log(reader.result);
                let imageinbase = reader.result;
                //split to remove "data:image/png;base64,"
                const pure64base = imageinbase.split(",");
                let data = pure64base[1]
                document.getElementById("update-submit-btn").addEventListener("click", async () =>{
                    let name = document.getElementById("profile-name").value;
                    let email = document.getElementById("profile-email").value;
                    let pass = document.getElementById("profile-pass").value;
                    let picture = document.getElementById("profile-picture");

                    console.log(name, email, pass, picture);
                    document.getElementById("profile-popup-form").classList.add("hidden");
                    console.log(data);

                    //Call api
                    const url = "http://localhost/ecommerce/ecommerce-server/addimage.php";
                    const response = await axios.post(url, {image64base: data}, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
                    console.log(response);
                    setTimeout( async () => {
                        await SetProfilePicture()
                    }, 1000); 
                    document.getElementById("profile-picture-card").setAttribute('src', "http://localhost/ecommerce/client-frontend/images/refresh.png")
                    setTimeout( async () => {
                        await SetProfilePicture()
                    }, 1000); 


                })
                
            })
            reader.readAsDataURL(file);
        })
    }
    async function SetProfilePicture() {
        //Change profile card
        const url = "http://localhost/ecommerce/ecommerce-server/receive-userinfo.php";
        const response = await axios.post(url, {}, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}}).then(response => {
            let userid = (response.data['userid']);
            let user_name = (response.data['name']);
            let user_email = (response.data['email']);
            //document.getElementById("profile-picture-card").setAttribute('src', "http://localhost/ecommerce/client-frontend/images/uploadedimages/" + userid + "-" + user_name + ".jpg");
            
            if(document.getElementById("profile-picture-card"))
            document.getElementById("profile-picture-card").src = ("http://localhost/ecommerce/client-frontend/images/uploadedimages/" + userid + "-" + user_name + ".jpg");
            
            //Set profile name
            if(document.getElementById("profile-card-name"))
            document.getElementById("profile-card-name").innerHTML = user_name;
            
            //Set profile email
            if(document.getElementById("profile-card-email"))
            document.getElementById("profile-card-email").innerHTML = user_email;
        });

    }

    async function SetProfileHeader(){
        //Change profile header
        await SetProfilePicture();
    }
    SetProfileHeader();
}
