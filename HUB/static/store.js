if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  for (var i = 0; i <= 8; i++) {
    var select = document.querySelectorAll("button")[i];
    select.addEventListener("click", runEvent);
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
// var stripeHandler = StripeCheckout.configure({
//   key: stripePublicKey,
//   locale: "en",
//   token: function (token) {
//     var items = [];
//     var cartItemContainer = document.getElementsByClassName("cart-items")[0];
//     var cartRows = cartItemContainer.getElementsByClassName("cart-row");
//     for (var i = 0; i < cartRows.length; i++) {
//       var cartRow = cartRows[i];
//       var quantityElement = cartRow.getElementsByClassName(
//         "cart-quantity-input"
//       )[0];
//       var quantity = quantityElement.value;
//       var id = cartRow.dataset.itemId;
//       items.push({
//         id: id,
//         quantity: quantity,
//       });
//     }

//     fetch("/purchase", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         stripeTokenId: token.id,
//         items: items,
//       }),
//     })
//       .then(function (res) {
//         return res.json();
//       })
//       .then(function (data) {
//         alert(data.message);
//         var cartItems = document.getElementsByClassName("cart-items")[0];
//         while (cartItems.hasChildNodes()) {
//           cartItems.removeChild(cartItems.firstChild);
//         }
//         updateCartTotal();
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   },
// });

function runEvent(e) {
  console.log(e.target.value);

  if (e.target.value === "1") {
    document.getElementById("divid").innerHTML = `<div class="grid-container">`;
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
    document.getElementById("divid").innerHTML = `<div class="grid-container">`;

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
              <select class="shop-item-price">
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
    document.getElementById("divid").innerHTML = `<div class="grid-container">`;
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
    document.getElementById("divid").innerHTML = `<div class="grid-container">`;

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
    document.getElementById("divid").innerHTML = `<div class="grid-container">`;

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
    document.getElementById("divid").innerHTML = `<div class="grid-container">`;

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
    document.getElementById("divid").innerHTML = `<div class="grid-container">`;

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
    document.getElementById("divid").innerHTML = `<div class="grid-container">`;

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
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
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
  for (var i = 0; i < cartItemNames.length; i++) {
    if (
      cartItemNames[i].innerText == title &&
      cartPrice[i].innerText == price
    ) {
      alert("This item is already added to the cart");
      return;
    }
  }
  var cartRowContents = `
    <div class="attachment">
      <div class=" cart-column">
       
          <p class="cart-item-title">${title}</p>
      </div>
      <p class="cart-price cart-column">${price}</p>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <input type="input" placeholder="Add on"></input>
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

// Scroll for NavBar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBackground").style.top = "0";
  } else {
    document.getElementById("navBackground").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
// slideshow
var timeOut = 2000;
var slideIndex = 0;
var autoOn = true;

autoSlides();

function autoSlides() {
  timeOut = timeOut - 20;

  if (autoOn == true && timeOut < 0) {
    showSlides();
  }
  setTimeout(autoSlides, 20);
}

function prevSlide() {
  timeOut = 2000;

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex--;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex == 0) {
    slideIndex = 3;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlides() {
  timeOut = 2000;

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
