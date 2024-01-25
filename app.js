// SELECT ELEMENTS
let cartIndex = 0
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");
const cartBtn = document.querySelector(".nav-item7");
const payAmount = document.getElementById("amount")
const priceShow  = document.querySelector('.pricedetailpay')
const priceShow1  = document.querySelector('.pricedetailpay1')



let priceArr = []
let priceARR = []



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
    const { sizes = ["medium", "small", "large", "extra-large"], colors = ["black", "red", "blue", "green"] } = product.options || {};

    const sizeOptions = sizes.map((size) => `<option value="${size}">${size}</option>`).join('');
    const colorOptions = colors.map((color) => `<option value="${color}">${color}</option>`).join('');

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
                ${sizeOptions}
              </select>
              <span class="left-margin"></span>
              <label for="color-${product.id}">color:</label>
              <select id="color-${product.id}" name="color">
                ${colorOptions}
              </select>
              <br>
            </form>
            <div class="add-to-cart button" onclick="addToCart(${product.id})">
              <img src="images/icon-cart.svg" alt="cart img" class="cart-img"/>
              add to cart
            </div>
          </div>
        </div>
      </div>`;
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

  priceShow.textContent = `Total Amount = ${Number(totalPrice.toFixed(2)) + 2500}`
  priceShow1.textContent = `Selection ${Number(totalPrice.toFixed(2))} + Delivery ${2500}`

  priceARR.push(totalPrice.toFixed(2))

console.log(priceARR);





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

const checkoutbtn = document.querySelector('.checkout')
checkoutbtn.addEventListener("click",function (params) {
  


  
  
  
})


// const forewardBtn = document.querySelectorAll(".foreward1")
// // for (let i = 0; i < forewardBtn.length; i++) 

// forewardBtn[0].addEventListener("click",function (params) {
//   // products.id.imgSrc[1]

//     console.log("first");
// })
// forewardBtn[1].addEventListener("click",function (params) {

//   console.log("second");
// })
// forewardBtn[2].addEventListener("click",function (params) {

//   console.log("third");
// })
// forewardBtn[3].addEventListener("click",function (params) {

// console.log("fourth");
// })
// forewardBtn[4].addEventListener("click",function (params) {

//   console.log("fifth");
// })
// forewardBtn[5].addEventListener("click",function (params) {

// console.log("sixth");
// })
  
  
{/* <button class="back-image backward1" id="backward"><img src="images/backward-arrow.png" class="imagePointer"></button>
<button class="back-image foreward1" id="foreward"><img src="images/backward-arrow (1).png" class="imagePointer"></button> */}

console.log(cart);

const simplifiedProducts = cart.map(({ name, price, numberOfUnits, size, color }) => ({
  name,
  price,
  numberOfUnits,
  size,
  color
}));

console.log(simplifiedProducts);
console.log(priceARR);










