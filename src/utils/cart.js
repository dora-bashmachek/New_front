function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export function addToCart(product) {
  let cart = isJson(sessionStorage.getItem("cart"))
    ? JSON.parse(sessionStorage.getItem("cart"))
    : null;
  if (cart !== null) {
    if (Array.isArray(cart) && !cart.some(x => x?.id === product.id)) {
      cart.push(product);
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }
  } else {
    sessionStorage.setItem("cart", JSON.stringify([product]));
  }
}

export function deleteFromCart(index) {
  let cart = JSON.parse(sessionStorage.getItem('cart'))
  cart.splice(index, 1)
  sessionStorage.setItem('cart', JSON.stringify(cart))
}
