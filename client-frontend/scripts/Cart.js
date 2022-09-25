export const Cart = (cart) => {
    return (`
    <tr id="${cart.id}">
        <td>${cart.name}</td>
        <td>${cart.price}$</td>
        <td class="cart-delete-button"><i class="fa fa-times color-purple" aria-hidden="true"></i></td>
    </tr>
    `)
}