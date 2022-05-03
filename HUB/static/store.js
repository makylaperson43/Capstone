if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();

  function ready() {
    var removeCartItemButtons = document.getElementsByClassName("btn-danger");
    for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i];
      button.addEventListener("click", removeCartItem);
    }
    var select = document.querySelectorAll("button");
    for (var i = 0; i <= select.length; i++) {
      var selectbtn = document.querySelectorAll("button")[i];
      selectbtn.addEventListener("click", runEvent);
    }

    var removeCartItemBtn = document.getElementsByClassName("btn-danger");
    for (var i = 0; i < removeCartItemBtn.length; i++) {
      var button = removeCartItemBtn[i];
      button.addEventListener("click", removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName("cart-quantity-input");
    for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener("change", quantityChanged);
    }

    var addToCartButtons = document.getElementsByClassName("shop-item-button");
    for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i];
      button.addEventListener("click", addToCartClicked);
    }

    document
      .getElementsByClassName("btn-purchase")[0]
      .addEventListener("click", purchaseClicked);
  }

  function runEvent(e) {
    console.log(e.target.value);

    if (e.target.value === "1") {
      document.getElementById(
        "divid"
      ).innerHTML = `<div class="grid-container">`;
      var sec = document.getElementById("");
      console.log(sec);
      fetch("/static/breakfast.json")
        .then((response) => {
          console.log("resolved", response);
          return response.json();
        })
        .then((data) => {
          Array.from(data).forEach(function (d) {
            var item = document.createElement("div");
            item.classList.add("shop-items");

            var items = document.getElementsByClassName("grid-container")[0];
            var cartRowContents = ` 
        <div class="grid-item">
        <div class="shop-item">
            <p class="shop-item-title">${d.name}</p>
            <p> ${d.desc} </p>
            <div class="shop-item-details">
              <p class="shop-item-price">$${d.price}</p>
              <button class="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            
          </div>
        </div>`;

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
      document.getElementById(
        "divid"
      ).innerHTML = `<div class="grid-container">`;

      fetch("/static/salads.json")
        .then((response) => {
          console.log("resolved", response);
          return response.json();
        })
        .then((data) => {
          Array.from(data).forEach(function (d) {
            var item = document.createElement("div");
            item.classList.add("shop-items");

            var items = document.getElementsByClassName("grid-container")[0];
            var cartRowContents = ` 
          <div class="grid-item">
          <div class="shop-item">
              <p class="shop-item-title">${d.name}</p>
              <p> ${d.desc} </p>
              <select class="shop-item-select">
              <option value="${d.s_price}"> Small</option>
             
              <option value="${d.l_price}"> Large</option>
              </select>
                <button class="btn btn-primary shop-item-button" type="button">
                  ADD TO CART
                </button>
              
            </div>
          </div>`;
            item.innerHTML = cartRowContents;
            items.append(item);
            var addToCartBtn =
              document.getElementsByClassName("shop-item-button");
            for (var i = 0; i < addToCartBtn.length; i++) {
              var button = addToCartBtn[i];
              button.addEventListener("click", addToCartClickedCoffee);
            }
          });
          console.log(data);
        })
        .catch((err) => {
          console.log("rejected", err);
        });
    } else if (e.target.value === "3") {
      var sec = document.getElementById("select-name");
      document.getElementById(
        "divid"
      ).innerHTML = `<div class="grid-container">`;
      fetch("/static/pastry.json")
        .then((response) => {
          console.log("resolved", response);
          return response.json();
        })
        .then((data) => {
          Array.from(data).forEach(function (d) {
            var item = document.createElement("div");
            item.classList.add("shop-items");

            var items = document.getElementsByClassName("grid-container")[0];
            var cartRowContents = ` 
        <div class="grid-item">
        <div class="shop-item">
            <p class="shop-item-title">${d.name}</p>
          
            <div class="shop-item-details">
              <p class="shop-item-price">$${d.price}</p>
              <button class="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            
          </div>
        </div>`;
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
    } else if (e.target.value === "4") {
      var sec = document.getElementById("select-name");
      document.getElementById(
        "divid"
      ).innerHTML = `<div class="grid-container">`;

      fetch("/static/sandwich.json")
        .then((response) => {
          console.log("resolved", response);
          return response.json();
        })
        .then((data) => {
          Array.from(data).forEach(function (d) {
            var item = document.createElement("div");
            item.classList.add("shop-items");

            var items = document.getElementsByClassName("grid-container")[0];
            var cartRowContents = ` 
        <div class="grid-item">
        <div class="shop-item">
            <p class="shop-item-title">${d.name}</p>
            <p> ${d.desc} </p>
            <div class="shop-item-details">
              <p class="shop-item-price">$${d.price}</p>
              <button class="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            
          </div>
        </div>`;

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
    } else if (e.target.value === "5") {
      var sec = document.getElementById("select-name");
      document.getElementById(
        "divid"
      ).innerHTML = `<div class="grid-container">`;

      fetch("/static/brewed.json")
        .then((response) => {
          console.log("resolved", response);
          return response.json();
        })
        .then((data) => {
          Array.from(data).forEach(function (d) {
            var item = document.createElement("div");
            item.classList.add("shop-items");

            var items = document.getElementsByClassName("grid-container")[0];
            var cartRowContents = ` 
          <div class="grid-item">
          <div class="shop-item">
              <p class="shop-item-title">${d.name}</p>
              <p> ${d.desc} </p>
              <select class="shop-item-price">
              <option value="${d.s_price}"> Small</option>
              <option value="${d.m_price}"> Medium</option>
              <option value="${d.l_price}"> Large</option>
              </select>
                <button class="btn btn-primary shop-item-button" type="button">
                  ADD TO CART
                </button>
              
            </div>
          </div>`;
            item.innerHTML = cartRowContents;
            items.append(item);
            var addToCartBtn =
              document.getElementsByClassName("shop-item-button");
            for (var i = 0; i < addToCartBtn.length; i++) {
              var button = addToCartBtn[i];
              button.addEventListener("click", addToCartClickedCoffee);
            }
          });
          console.log(data);
        })
        .catch((err) => {
          console.log("rejected", err);
        });
    } else if (e.target.value === "6") {
      var sec = document.getElementById("select-name");
      document.getElementById(
        "divid"
      ).innerHTML = `<div class="grid-container">`;

      fetch("/static/espresso.json")
        .then((response) => {
          console.log("resolved", response);
          return response.json();
        })
        .then((data) => {
          Array.from(data).forEach(function (d) {
            var item = document.createElement("div");
            item.classList.add("shop-items");

            var items = document.getElementsByClassName("grid-container")[0];
            var cartRowContents = ` 
          <div class="grid-item">
          <div class="shop-item">
              <p class="shop-item-title">${d.name}</p>
              <p> ${d.desc} </p>
              
              <select class="shop-item-price">
              <option value="${d.s_price}"> Small</option>
              <option value="${d.m_price}"> Medium</option>
              <option value="${d.l_price}"> Large</option>
              </select>

                <button class="btn btn-primary shop-item-button" type="button">
                  ADD TO CART
                </button>
              
            </div>
          </div>`;
            item.innerHTML = cartRowContents;
            items.append(item);
            var addToCartBtn =
              document.getElementsByClassName("shop-item-button");
            for (var i = 0; i < addToCartBtn.length; i++) {
              var button = addToCartBtn[i];
              button.addEventListener("click", addToCartClickedCoffee);
            }
          });
          console.log(data);
        })
        .catch((err) => {
          console.log("rejected", err);
        });
    } else if (e.target.value === "7") {
      var sec = document.getElementById("select-name");
      document.getElementById(
        "divid"
      ).innerHTML = `<div class="grid-container">`;

      fetch("/static/specialty.json")
        .then((response) => {
          console.log("resolved", response);
          return response.json();
        })
        .then((data) => {
          Array.from(data).forEach(function (d) {
            var item = document.createElement("div");
            item.classList.add("shop-items");

            var items = document.getElementsByClassName("grid-container")[0];
            var cartRowContents = ` 
          <div class="grid-item">
          <div class="shop-item">
              <p class="shop-item-title">${d.name}</p>
              <p> ${d.desc} </p>
              <select class="shop-item-price">
              <option value="${d.s_price}"> Small</option>
              <option value="${d.m_price}"> Medium</option>
              <option value="${d.l_price}"> Large</option>
              </select>
                <button class="btn btn-primary shop-item-button" type="button">
                  ADD TO CART
                </button>
              
            </div>
          </div>`;
            item.innerHTML = cartRowContents;
            items.append(item);
            var addToCartBtn =
              document.getElementsByClassName("shop-item-button");
            for (var i = 0; i < addToCartBtn.length; i++) {
              var button = addToCartBtn[i];
              button.addEventListener("click", addToCartClickedCoffee);
            }
          });
          console.log(data);
        })
        .catch((err) => {
          console.log("rejected", err);
        });
    } else if (e.target.value === "8") {
      var sec = document.getElementById("select-name");
      document.getElementById(
        "divid"
      ).innerHTML = `<div class="grid-container">`;

      fetch("/static/blended.json")
        .then((response) => {
          console.log("resolved", response);
          return response.json();
        })
        .then((data) => {
          Array.from(data).forEach(function (d) {
            var item = document.createElement("div");
            item.classList.add("shop-items");

            var items = document.getElementsByClassName("grid-container")[0];
            var cartRowContents = ` 
          <div class="grid-item">
          <div class="shop-item">
              <p class="shop-item-title">${d.name}</p>
              <p> ${d.desc} </p>
              <select class="shop-item-price">
              <option value="${d.s_price}"> Small</option>
              <option value="${d.m_price}"> Medium</option>
              <option value="${d.l_price}"> Large</option>
              </select>
                <button class="btn btn-primary shop-item-button" type="button">
                  ADD TO CART
                </button>
              
            </div>
          </div>`;
            item.innerHTML = cartRowContents;
            items.append(item);
            var addToCartBtn =
              document.getElementsByClassName("shop-item-button");
            for (var i = 0; i < addToCartBtn.length; i++) {
              var button = addToCartBtn[i];
              button.addEventListener("click", addToCartClickedCoffee);
            }
          });
          console.log(data);
        })
        .catch((err) => {
          console.log("rejected", err);
        });
    }
  }

  function purchaseClicked(event) {
    alert("Thank you for your purchase");
    const actuator = event.target.parentElement;
    var allCartQuery = document.getElementsByClassName("attachment");
    console.log(allCartQuery);
    var cartItems = document.getElementsByClassName("cart-items");
    var itemPrices = actuator.querySelectorAll(".cart-price");
    var itemTitles = actuator.querySelectorAll(".cart-item-title");
    var itemQuantity = actuator.getElementsByClassName("cart-quantity-input");
    var data = '{ "items" : [';
    for (i = 0; i < allCartQuery.length; i++) {
      data +=
        '{ "title":"' +
        itemTitles[i].innerText +
        '", "price":"' +
        itemPrices[i].innerText +
        '", "quantity":"' +
        itemQuantity[i].innerText +
        '"},';
    }
    data += "]}";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/cart/", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  }
  function removeCartItem(e) {
    var buttonClicked = e.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  }
}
function purchaseClicked(event) {
  alert("Thank you for your purchase");
  const actuator = event.target.parentElement;
  var allCartQuery = document.getElementsByClassName("attachment");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var itemPrices = actuator.querySelectorAll(".cart-price");
  var itemTitles = actuator.querySelectorAll(".cart-item-title");
  var itemQuantity = actuator.getElementsByClassName("cart-quantity-input");
  var data = '{ "items" : [';
  for (i = 0; i < allCartQuery.length; i++) {
    data +=
      '{ "title":"' +
      itemTitles[i].innerText +
      '", "price":"' +
      itemPrices[i].innerText +
      '", "quantity":' +
      itemQuantity[i].value +
      '", "extra":' +
      "},";
  }
  data += "]}";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/cart/", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(e) {
  var input = e.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}
function getCartItemInfo(event) {
  const actuator = event.target;
  var itemTitle = actuator.getAttribute("cart-item-title")[0].innerHTML;
  console.log(itemTitle);
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  console.log(shopItem);
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;

  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;

  addItemToCart(title, price);
  updateCartTotal();
}

function addToCartClickedCoffee(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;

  var price = shopItem.getElementsByClassName("shop-item-price")[0].value;

  addItemToCart(title, price);
  updateCartTotal();
}

function addItemToCart(title, price) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");

  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  var cartPrice = cartItems.getElementsByClassName("cart-price");

  var cartRowContents = `
    <div class="attachment">
      <div class=" cart-column">
       
          <p class="cart-item-title">${title}</p>
      </div>
      <p class="cart-price cart-column">${price}</p>
      <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
          <input type="input" placeholder="Add on" class="addon"></input>
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>
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
  var cartRows = cartItemContainer.getElementsByClassName("attachment");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    console.log(priceElement);
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    console.log(price);
    var quantity = quantityElement.value;

    total = total + price * quantity;
  }
  console.log(total);
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}
