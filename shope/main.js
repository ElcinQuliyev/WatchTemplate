// let cartItems = [];

// function addToCart() {
//   // Ürün adı, fiyatı ve adedi gibi bilgileri al
//   let productName = "Ürün Adı";
//   let productPrice = document.getElementById("product-price").value;
//   let productQuantity = document.getElementById("quantity").value;

//   // Toplam fiyatı hesapla
//   let totalPrice = productPrice * productQuantity;

//   // Yeni bir ürün nesnesi oluştur
//   let newCartItem = {
//     name: productName,
//     price: totalPrice,
//     quantity: productQuantity,
//   };

//   // Sepete ekleme işlemini gerçekleştir
//   cartItems.push(newCartItem);

//   // Fiyat alanını güncelle
//   let priceElement = document.getElementById("price");
//   priceElement.textContent = "$" + totalPrice.toFixed(2);

//   // Sepetin güncel ürün sayısını göster
//   // document.getElementById("cart-count").innerHTML = cartItems.length;

//   // Kullanıcıya bildirim göster
//   console.log(productName + " sepete eklendi.");
// }

// function decreaseQuantity() {
//   let quantityInput = document.getElementById("quantity");
//   let currentQuantity = parseInt(quantityInput.value);
//   if (currentQuantity > 1) {
//     quantityInput.value = currentQuantity - 1;
//   }
//   addToCart();
// }

// function increaseQuantity() {
//   let quantityInput = document.getElementById("quantity");
//   let currentQuantity = parseInt(quantityInput.value);
//   quantityInput.value = currentQuantity + 1;
//   addToCart();
// }
// let cartItems = [];

// function addToCart() {
//   const productName = "Ürün 1";
//   const productPrice = parseFloat(
//     document.getElementById("price").innerHTML.slice(1)
//   );
//   const productQuantity = document.getElementById("quantity").value;

//   const totalPrice = productPrice * productQuantity;

//   const newCartItem = {
//     name: productName,
//     price: totalPrice,
//     quantity: productQuantity,
//   };

//   cartItems.push(newCartItem);

//   const priceElement = document.getElementById("price");
//   if (priceElement !== null) {
//     priceElement.innerHTML = "$" + totalPrice.toFixed(2);
//   }

//   const cartCountElement = document.getElementById("cart-count");
//   if (cartCountElement !== null) {
//     cartCountElement.innerHTML = cartItems.length;
//   }

//   console.log(productName + " sepete eklendi.");
// }

// function decreaseQuantity() {
//   const quantityInput = document.getElementById("quantity");
//   let currentQuantity = parseInt(quantityInput.value);
//   if (currentQuantity > 1) {
//     currentQuantity--;
//     quantityInput.value = currentQuantity;
//   }
// }

// function increaseQuantity() {
//   const quantityInput = document.getElementById("quantity");
//   let currentQuantity = parseInt(quantityInput.value);
//   if (currentQuantity < 10) {
//     currentQuantity++;
//     quantityInput.value = currentQuantity;
//   }
// }
let cartItems = [];

let productPriceElement = document.getElementById("productPrice");
let productQuantityElement = document.getElementById("productQuantity");
let addToCartButton = document.getElementById("addToCartButton");
let decreaseQuantityButton = document.getElementById("decreaseQuantity");
let increaseQuantityButton = document.getElementById("increaseQuantity");

function decreaseQuantity() {
  let currentQuantity = parseInt(productQuantityElement.value);
  if (currentQuantity > 1) {
    productQuantityElement.value = currentQuantity - 1;
  }
  console.log(productPriceElement.value);
}

function increaseQuantity() {
  let currentQuantity = parseInt(productQuantityElement.value);
  productQuantityElement.value = currentQuantity + 1;
}

addToCartButton.addEventListener("click", function () {
  let productName = "Ürün Adı";
  let productPrice = parseFloat(productPriceElement.innerText.slice(1));
  let productQuantity = parseInt(productQuantityElement.value);
  let totalPrice = productPrice * productQuantity;

  let newCartItem = {
    name: productName,
    price: totalPrice,
    quantity: productQuantity,
  };

  cartItems.push(newCartItem);

  let cartCountElement = document.getElementById("cart-count");
  if (cartCountElement !== null) {
    cartCountElement.innerHTML = cartItems.length;
  }

  console.log(productName + " sepete eklendi.");
});

decreaseQuantityButton.addEventListener("click", decreaseQuantity);
increaseQuantityButton.addEventListener("click", increaseQuantity);
