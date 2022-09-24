export const ResetPassword = () => {
    if (document.getElementById("reset-btn")) {
        document.getElementById("reset-btn").addEventListener("click", async () => {
            const url = "http://localhost/ecommerce/ecommerce-server/reset.php";
            setEmail(document.getElementById("email-reset").value);
            const data = JSON.stringify({
                email: email(),
            })
            const user = await axios.post(url, data);
            localStorage.setItem("token", user.data.jwt)
        })
}}