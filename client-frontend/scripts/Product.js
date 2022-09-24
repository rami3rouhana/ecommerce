export const Product = (product) => {
    return (`
        <div class="column" id="${product.id}">
        <div class="image-product">
          <img src="${product.picture_url}" alt="" />
        </div>

        <div class="info">
          <div class="info-details">
            <span class="color-purple">${product.name}</span>
            <span class="color-purple">${product.price}$</span>
          </div>
          <div class="icons">
            <span id="${product.id}" class="color-purple"><i class="fa fa-star"></i></span>
            <span id="${product.id}" class="color-purple"><i class="fa fa-list" aria-hidden="true"></i></span>
            <span id="${product.id}" class="color-purple"
              ><i class="fa fa-shopping-cart" aria-hidden="true"></i
            ></span>
          </div>
        </div>
      </div>
    `)
}