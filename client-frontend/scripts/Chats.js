export const Chats = () => {
    if (document.getElementById('send-msg'))
        document.getElementById('send-msg').addEventListener('click', async () => {
            const message = document.getElementById('msg').value;
            const url = 'http://localhost/ecommerce/ecommerce-server/add-message.php';

            const data = JSON.stringify({
                message,
                receiver_id: document.getElementById("user-id").getAttribute("user-id")
            });
            const msg = await axios.post(url, data, { headers: { 'Authorization': `token ${localStorage.getItem(`token`)}` } });
            if(typeof msg.data.jwt !== "undefined"){
                localStorage.setItem("token",msg.data.jwt);
                const user_message = document.createElement("li");
                user_message.classList.add("sender");
                user_message.innerHTML = message;
                document.getElementById("chat-box").append(user_message)
            }
        })
}