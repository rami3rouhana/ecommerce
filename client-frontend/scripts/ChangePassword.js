export const ChangePassword = () => {
    if(document.getElementById("reset-pass-btn"))
        document.getElementById("reset-pass-btn").addEventListener("click", async ()=>{
            if(document.getElementById("password-confirm").value === document.getElementById("password").value){
                debugger
                const url = "http://localhost/ecommerce/ecommerce-server/reset-password.php?";
                const resetJwt = window.location.search.split('=')[1];
                const data = JSON.stringify({
                    password:document.getElementById("password").value,
                    resetJwt
                });
                const user = await axios.post(url, data);
                localStorage.setItem('token', user.data.jwt);
            }else if(document.getElementById("password").value===""||document.getElementById("password-confirm").value===""){
                alert("Fill all the fields");
            }
            else{
                alert("Passwords don't match");
            }
        })
}