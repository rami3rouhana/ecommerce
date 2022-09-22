
export const Register = () => {
if(document.getElementById("register-btn"))
    document.getElementById("register-btn").addEventListener('click', async () => {
        const url = "http://localhost/ecommerce/ecommerce-server/register.php";
        const f_name = document.getElementById('username-register').value;
        const email = document.getElementById('email-register').value;
        const password = document.getElementById('password-register').value;
        const confirm_password = document.getElementById('confirm-register').value;
        if (password == confirm_password) {
            const data = JSON.stringify({
                f_name,
                email,
                password
            });
            const user = await axios.post(url, data);
            localStorage.setItem('token', user.data.jwt);
        }else {
            alert('Wrong password')
        }
    })


}