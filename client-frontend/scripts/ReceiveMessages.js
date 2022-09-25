export const ReceiveMessages = async () => {
        const url = "http://localhost/ecommerce/ecommerce-server/receive-message.php";
        const data = JSON.stringify({
            sender_id:document.getElementById("user-id").getAttribute("user-id")
        })
        const messages = await axios.post(url,data, { headers: {
            'Authorization': `token ${localStorage.getItem(`token`)}`
        }
        })
        debugger
        return messages;
}
