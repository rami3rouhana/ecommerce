export const ProfilePage =  () => {
    if(document.getElementById("update-popup-btn")){
        document.getElementById("update-popup-btn").addEventListener("click", () => {
            console.log("3aw");
            document.getElementById("profile-popup-form").classList.remove("hidden");
        })
        document.getElementById("close-update-popup-btn").addEventListener("click", () => {
            document.getElementById("profile-popup-form").classList.add("hidden");
        })
        

        const picture = document.getElementById("profile-picture");
        picture.addEventListener("change", e => {
            const file = picture.files[0];
            const reader = new FileReader();

            reader.addEventListener("load", () => {
                console.log(reader.result);
                let imageinbase = reader.result;
                //split to remove "data:image/png;base64,"
                const pure64base = imageinbase.split(",");
                let data = pure64base[1]
                document.getElementById("update-submit-btn").addEventListener("click", () =>{
                    let name = document.getElementById("profile-name").value;
                    let email = document.getElementById("profile-email").value;
                    let pass = document.getElementById("profile-pass").value;
                    let picture = document.getElementById("profile-picture");
                    //Get picture and conver to base 64
                    //const fileInput = document.getElementById("fileInput");
        
        
                    //  
                    console.log(name, email, pass, picture);
                    document.getElementById("profile-popup-form").classList.add("hidden");
                    console.log(data);
                })
                
            })

            reader.readAsDataURL(file);
        })
    }
}
