export function getCart() {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem("sfh-cart");
  return cart ? JSON.parse(cart) : [];
}

export function saveCart(cart) {
  if (typeof window === "undefined") return;
  localStorage.setItem("sfh-cart", JSON.stringify(cart));
}

export function addToCart(item) {
  const cart = getCart();
  const existing = cart.find((cartItem) => cartItem.name === item.name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  saveCart(cart);
  return cart;
}

export function removeFromCart(name) {
  const cart = getCart().filter((item) => item.name !== name);
  saveCart(cart);
  return cart;
}

export function updateQuantity(name, quantity) {
  const cart = getCart()
    .map((item) =>
      item.name === name ? { ...item, quantity: Math.max(1, quantity) } : item
    );
  saveCart(cart);
  return cart;
}

export function clearCart() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("sfh-cart");
}

export function getCartCount() {
  return getCart().reduce((total, item) => total + item.quantity, 0);
}

export function getCartTotal() {
  return getCart().reduce((total, item) => {
    const price = Number(String(item.price).replace(/[^0-9.]/g, ""));
    return total + price * item.quantity;
  }, 0);
}
