export const Client = (client) => {
    return (`
    <tr id="${client.id}">
        <td>${client.id}</td>
        <td>${client.f_name}</td>
        <td>${client.email}</td>
        <td>
            <img id="ban-button" class="clickable-ban" src="./images/ban-button.svg" width="50px" height="50px"></img>
        </td>
    </tr>
    `)
}