export const ReceiveMessages = async () => {
    const url = "http://localhost/ecommerce/ecommerce-server/receive-message.php";
    const data = JSON.stringify({
        sender_id:document.getElementById("user-id").getAttribute("user-id")
    })
    const messages = await axios.post(url,data, { headers: {
        'Authorization': `token ${localStorage.getItem(`token`)}`
    }
    })
    const user = messages.data.user_id;
    const chatBoard = document.getElementById("chat-box");
    chatBoard.innerHTML = "";
    if(typeof messages.data.messages !== "undefined" && messages.data.messages.length>0){
        messages.data.messages.map( msg =>{
            if(msg.receiver_id === user){
                const receiver = document.createElement("li");
                receiver.classList.add("reciever");
                receiver.innerHTML = msg.message;
                chatBoard.append(receiver);
            }else{
                const sender = document.createElement("li");
                sender.classList.add("sender");
                sender.innerHTML = msg.message;
                chatBoard.append(sender) ;
            }
        })
        debugger
    }
    return messages;
}
