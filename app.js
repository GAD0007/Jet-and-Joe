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
                        <h5>${product.name}</h5>
                        <h6><small>&#8358;</small>${product.price}</h6>
                        
                        <form action="/submit" method="post">
                        <label for="size">size:</label>
                        <select id="size" name="size">
                        <option value="medium">M</option>
                          <option value="small">S</option>
                          <option value="large">L</option>
                          <option value="extra-large">X-L</option>

                        </select>
                        <br>
                        <div class= "form-gap"></div>

                    
                      
                    
                        <label for="color">color:</label>
                        <select id="color" name="color">
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
                    // <div class="add-to-wishlist">
                    //     <img src="./icons/heart.png" alt="add to wish list">
                    // </div>
renderProdcuts();

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// // ADD TO CART
// function addToCart(id) {
//   // check if prodcut already exist in cart
//   if (cart.some((item) => item.id === id)) {
//     changeNumberOfUnits("plus", id);
//   } else {
//     const item = products.find((product) => product.id === id);

//     cart.push({
//       ...item,
//       numberOfUnits: 1,
//     });
//   }

//   updateCart();
// }


function addToCart(id) {
  cartIndex ++
  document.querySelector('.cart-background').style.display = "block"

  const sizeSelect = document.getElementById("size");
  const colorSelect = document.getElementById("color");

  const selectedSize = sizeSelect.value;
  const selectedColor = colorSelect.value;

  if (!selectedSize || !selectedColor) {
    alert("Please select size and color before adding to cart.");
    return;
  }

  // check if product already exists in cart
  if (cart.some((item) => item.id === id && item.size === selectedSize && item.color === selectedColor)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
      size: selectedSize,
      color: selectedColor,

      
    });


    // Save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart));
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
// function renderCartItems() {
//   cartItemsEl.innerHTML = ""; // clear cart element
//   cart.forEach((item) => {
//     cartItemsEl.innerHTML += `
//         <div class="cart-item">
//             <div class="item-info" onclick="removeItemFromCart(${item.id})">
//                 <div class="item-name">${item.name}</div>
//                 <img src="${item.imgSrc}" alt="${item.name}">
//                 </div>
//                 <!-- rest of the code remains unchanged -->
//         </div>
//       `;
//     });
//   }


// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
      <div class="cart-item">
        <div class="item-info" onclick="removeItemFromCart(${item.id})">
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
function removeItemFromCart(id) {
  
  cart = cart.filter((item) => item.id !== id);

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

