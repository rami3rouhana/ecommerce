

export const GetMessages = async () => {
    if (document.getElementById("favorites-row")) {
        
        const url = "http://localhost/ecommerce/ecommerce-server/receive-message.php";
        const messages = await axios.get(url, { headers: {
            'Authorization': `token ${localStorage.getItem(`token`)}`
        }
        });
    }

}