import {ReceiveMessages} from './ReceiveMessages.js'

export const ReceiveSellers = async () => {
    const url = 'http://localhost/ecommerce/ecommerce-server/receive-client-info.php';
    const response = await axios.get(url, {
        headers: {
            'Authorization': `token ${localStorage.getItem(`token`)}`
        }
    });

    if (typeof response.data.jwt !== "undefined")
        localStorage.setItem("token", response.data.jwt)
    let sellers = response.data["sellers"];
    sellers.map(seller => {
        debugger
        let users = document.createElement('li');
        users.classList.add('profile');
        let image = document.createElement('img');

        image.classList.add('profile-img');
        image.src = seller.profile_pic;
        let name = document.createElement('span');
        name.append(seller.f_name);
        users.appendChild(image);
        users.appendChild(name);
        users.setAttribute("id", seller.id);

        document.getElementById('seller-users').appendChild(users);
        users.addEventListener("click", () => {
            debugger
            document.getElementById("user-id").setAttribute("user-id",seller.id) ;
            ReceiveMessages();
        })
    })


}