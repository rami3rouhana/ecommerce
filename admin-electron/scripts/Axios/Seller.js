export const Seller = (seller) => {
    return (`
    <tr id="${seller.id}">
        <td>${seller.id}</td>
        <td>${seller.f_name}</td>
        <td>${seller.email}</td>
        <td>
            <img class="clickable-edit" src="./images/edit-button.svg" width="50px" height="50px" id="edit-seller-btn"></img>
            <img class="clickable-delete" src="./images/delete-button.svg" width="50px" height="50px" id="delete-seller-btn"></img>
        </td>
    </tr>
    `)
}