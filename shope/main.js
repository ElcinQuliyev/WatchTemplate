let cartItems = [];

function addToCart() {
  // Ürün adı, fiyatı ve adedi gibi bilgileri al
  let productName = "Ürün Adı";
  let productPrice = document.getElementById("product-price").value;
  let productQuantity = document.getElementById("quantity").value;

  // Toplam fiyatı hesapla
  let totalPrice = productPrice * productQuantity;

  // Yeni bir ürün nesnesi oluştur
  let newCartItem = {
    name: productName,
    price: totalPrice,
    quantity: productQuantity,
  };

  // Sepete ekleme işlemini gerçekleştir
  cartItems.push(newCartItem);

  // Fiyat alanını güncelle
  let priceElement = document.getElementById("price");
  priceElement.textContent = "$" + totalPrice.toFixed(2);

  // Sepetin güncel ürün sayısını göster
  document.getElementById("cart-count").textContent = cartItems.length;

  // Kullanıcıya bildirim göster
  console.log(productName + " sepete eklendi.");
}

function decreaseQuantity() {
  let quantityInput = document.getElementById("quantity");
  let currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    quantityInput.value = currentQuantity - 1;
  }
  addToCart();
}

function increaseQuantity() {
  let quantityInput = document.getElementById("quantity");
  let currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = currentQuantity + 1;
  addToCart();
}
