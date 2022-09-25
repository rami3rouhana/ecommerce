export const SendMessage = () => {
    document.getElementById('send-msg').addEventListener('click', async () => {
        const message = document.getElementById('msg').value;
        const url = 'http://localhost/ecommerce/ecommerce-server/add-messge.php';
       
        const data = JSON.stringify({
            message
        });
        const msg = await axios.post(url, data, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
    })
}