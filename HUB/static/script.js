if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();

  function ready() {
    var select = document.querySelector("select");
    select.addEventListener("change", runEvent);
  }
  var removeCartItemBtn = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeCartItemBtn.length; i++) {
    var button = removeCartItemBtn[i];
    button.addEventListener("click", removeCartItem);
  }

  var quanityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quanityInputs.length; i++) {
    var input = quanityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClicked);
}
function runEvent(e) {
  console.log("EVENT TYPE: " + e.type);
  if (e.target.value === "0") {
    document.getElementById("divid").innerHTML = `<div class="shop-items">`;
    var sec = document.getElementById("select-name");
    sec.textContent = "";
  } else if (e.target.value === "1") {
    document.getElementById("divid").innerHTML = `<div class="shop-items">`;
    var sec = document.getElementById("select-name");
    sec.textContent = "Winter Clothing";
    console.log(sec);
    fetch("")
      .then((response) => {
        console.log("resolved", response);
        return response.json();
      })
      .then((data) => {
        Array.from(data).forEach(function (d) {
          var item = document.createElement("div");
          item.classList.add("shop-items");

          var items = document.getElementsByClassName("shop-items")[0];
          var cartRowContents = ` 
          <div class="shop-item">
          <span class="shop-item-title">${d.name}</span>
          <img class="shop-item-image" src="" />
          <div class="shop-item-details">
            <span class="shop-item-price">$ ${d.price}</span>
            <button class="btn btn-primary shop-item-button" type="button">
              ADD TO CART
            </button>`;
          item.innerHTML = cartRowContents;
          items.append(item);
          var addToCartBtn =
            document.getElementsByClassName("shop-item-button");
          for (var i = 0; i < addToCartBtn.length; i++) {
            var button = addToCartBtn[i];
            button.addEventListener("click", addToCartClicked);
          }
        });
        console.log(data);
      })
      .catch((err) => {
        console.log("rejected", err);
      });
  } else if (e.target.value === "2") {
    var sec = document.getElementById("select-name");
    document.getElementById("divid").innerHTML = `<div class="shop-items">`;
    sec.textContent = "Spring Clothing";
    fetch("spring.json")
      .then((response) => {
        console.log("resolved", response);
        return response.json();
      })
      .then((data) => {
        Array.from(data).forEach(function (d) {
          var item = document.createElement("div");
          item.classList.add("shop-items");

          var items = document.getElementsByClassName("shop-items")[0];
          var cartRowContents = ` 
          <div class="shop-item">
          <span class="shop-item-title">${d.name}</span>
          <img class="shop-item-image" src="${d.imgPath}" />
          <div class="shop-item-details">
            <span class="shop-item-price">$ ${d.price}</span>
            <button class="btn btn-primary shop-item-button" type="button">
              ADD TO CART
            </button>`;
          item.innerHTML = cartRowContents;
          items.append(item);
          var addToCartBtn =
            document.getElementsByClassName("shop-item-button");
          for (var i = 0; i < addToCartBtn.length; i++) {
            var button = addToCartBtn[i];
            button.addEventListener("click", addToCartClicked);
          }
        });
        console.log(data);
      })
      .catch((err) => {
        console.log("rejected", err);
      });
  } else if (e.target.value === "3") {
    var sec = document.getElementById("select-name");
    document.getElementById("divid").innerHTML = `<div class="shop-items">`;
    sec.textContent = "Summer Clothing";
    fetch("summer.json")
      .then((response) => {
        console.log("resolved", response);
        return response.json();
      })
      .then((data) => {
        Array.from(data).forEach(function (d) {
          var item = document.createElement("div");
          item.classList.add("shop-items");

          var items = document.getElementsByClassName("shop-items")[0];
          var cartRowContents = ` 
              <div class="shop-item">
              <span class="shop-item-title">${d.name}</span>
              <img class="shop-item-image" src="${d.imgPath}" />
              <div class="shop-item-details">
                <span class="shop-item-price">$ ${d.price}</span>
                <button class="btn btn-primary shop-item-button" type="button">
                  ADD TO CART
                </button>`;
          item.innerHTML = cartRowContents;
          items.append(item);
          var addToCartBtn =
            document.getElementsByClassName("shop-item-button");
          for (var i = 0; i < addToCartBtn.length; i++) {
            var button = addToCartBtn[i];
            button.addEventListener("click", addToCartClicked);
          }
        });
        console.log(data);
      })
      .catch((err) => {
        console.log("rejected", err);
      });
  }
}

function purchaseClicked() {
  alert("Thank you for your purchase");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function quantityChanged(e) {
  var input = e.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}
function removeCartItem(e) {
  var buttonClicked = e.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  var image = shopItem.getElementsByClassName("shop-item-image")[0].src;
  addItemToCart(title, price, image);
  updateCartTotal();
}

function addItemToCart(title, price, image) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  //   console.log(cartRow.innerText);
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
  var cartRowContents = ` 
    <div class="cart-item cart-column">
    <img class="cart-item-image" src="${image}" height="100">
    <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
  </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}
