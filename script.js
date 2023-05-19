const addToCartButtons = document.querySelectorAll(".add-to-cart-shop");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});
function addToCart(event) {
  const product = event.target.parentElement;
  const productName = product.querySelector("h3").textContent;
  const productPrice = parseFloat(product.querySelector("p").textContent.slice(1));
  const cartItem = document.createElement("li");
  cartItem.innerHTML = `
    <span>${productName}</span>
    <span>P${productPrice.toFixed(2)}</span>
  `;
  const cartItemsList = document.getElementById("cart-items");
  cartItemsList.appendChild(cartItem);
  const cartTotal = document.getElementById("cart-total");
  const currentTotal = parseFloat(cartTotal.textContent);
  const newTotal = currentTotal + productPrice;
  cartTotal.textContent = newTotal.toFixed(2);
}
const deleteButton = document.getElementById('delete-button');
deleteButton.addEventListener('click', deleteItems);
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', checkout);
function deleteItems() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  const cartTotal = document.getElementById('cart-total');
  cartTotal.textContent = '0';
}
function checkout() {
  alert('Thank you for your purchase! Your order will be processed shortly.');
}
