// SELECT ELEMENTS
let cartIndex = 0
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");
const cartBtn = document.querySelector(".nav-item7");

document.querySelector('.cart-background').style.display = "none"

cartBtn.addEventListener("click",function name(params) {

  if (cartIndex == 0) {
    cartIndex ++
    document.querySelector('.cart-background').style.display = "block"
    
  } else {
    document.querySelector('.cart-background').style.display = "none"
    cartIndex = 0
    
  }
  
})

// RENDER PRODUCTS
function renderProdcuts() {
  
  products.forEach((product) => {
    productsEl.innerHTML += `
    
    <div class="item">
    <div class="item-container">
    <div class="item-img">
    <img src="${product.imgSrc}" alt="${product.name}">
    </div>
    <div class="desc">
    <div class="add-to-wishlist">
        <img src="images/stars (2).png" alt="add to wish list">
    </div>
    <h5>${product.name}</h5>
                        <h6 class="mb-3"><small>&#8358;</small>${product.price}</h6>
                        
                        <form action="/submit" method="post">
                        <label for="size-${product.id}">size:</label>
                        <select id="size-${product.id}" name="size">
                          <option value="medium">M</option>
                          <option value="small">S</option>
                          <option value="large">L</option>
                          <option value="extra-large">X-L</option>
                        </select>
                       
                       <span class="left-margin"></span>
                        
                        <label for="color-${product.id}">color:</label>
                        <select id="color-${product.id}" name="color">
                        <option value="black">Black</option>
                          <option value="red">Red</option>
                          <option value="blue">Blue</option>
                          <option value="green">Green</option>
                        </select>
            
                        <br>
                      </form>
                      
                        <div class="add-to-cart button" onclick="addToCart(${product.id})">
                        <img
                          src="images/icon-cart.svg"
                          alt="cart img"
                          class="cart-img"
                        />
                        add to cart
                      </div>
                       
                    </div>
                    
                    </div>
                    </div>
                    `;
  });
}
renderProdcuts();

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// console.log(selected);


// ADD TO CART

function addToCart(id) {
  document.querySelector('.cart-background').style.display = "block";
  
  const size = document.getElementById(`size-${id}`).value;
  const color = document.getElementById(`color-${id}`).value;

  if (cart.some((item) => item.id === id && item.size === size && item.color === color)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
      size,
      color,
    });
  }

  updateCart();
}



// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();

  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  
  subtotalEl.innerHTML = `Subtotal (${totalItems} items): &#8358;${totalPrice.toFixed(2)}`;
  totalItemsInCartEl.innerHTML = totalItems;
document.querySelector('.total-price-nav').textContent = totalPrice.toFixed(2)

}



// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
      <div class="cart-item">
      <div class="item-info" onclick="removeItemFromCart(${item.id}, '${item.size}', '${item.color}')">
          <img src="${item.imgSrc}" alt="${item.name}">
        </div>
        <div class="unit-price">
          <small>&#8358;</small>${item.price}
          </div>
          <div class="units">
          <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
          <div class="number">${item.numberOfUnits}</div>
          <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
        </div>
     
      </div>
      <div class="item-details">
      <div class="item-name">${item.name}</div>
      <div>Size: ${item.size}, Color: ${item.color}</div>
    </div>
    `;
  });
}

// remove item from cart

function removeItemFromCart(id, size, color) {
  cart = cart.filter((item) => !(item.id === id && item.size === size && item.color === color));
  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;
    
    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}


