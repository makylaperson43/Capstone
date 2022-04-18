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
  for (var i = 0; i <= 7; i++) {
    var select = document.querySelectorAll("button")[i];
    select.addEventListener("click", runEvent);
  }
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

function runEvent(e) {
  console.log(e.target.value);

  if (e.target.value === "1") {
    document.getElementById("divid").innerHTML = `<div class="shop-items">`;
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

          var items = document.getElementsByClassName("shop-items")[0];
          var cartRowContents = ` 
        <div class="shop-item">
        <span class="shop-item-title">${d.name}</span>
        <p> ${d.desc} </p>
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

    fetch("/static/salads.json")
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
        <p> ${d.desc}</p>
  
        <fieldset>
        <label>
          <span class="shop-item-price">$ ${d.s_price}</span>
          <span class="shop-item-price">$ ${d.l_price}</span>
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
    fetch("/static/pastry.json")
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
  } else if (e.target.value === "4") {
    var sec = document.getElementById("select-name");
    document.getElementById("divid").innerHTML = `<div class="shop-items">`;

    fetch("/static/sandwich.json")
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
            <p> ${d.desc}</p>
      
            <fieldset>
            <label>
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
  } else if (e.target.value === "5") {
    var sec = document.getElementById("select-name");
    document.getElementById("divid").innerHTML = `<div class="shop-items">`;

    fetch("/static/brewed.json")
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
                <p> ${d.desc}</p>
          
                <fieldset>
                <label>
                  <span class="shop-item-price">$ ${d.s_price}</span>
                  <span class="shop-item-price">$ ${d.m_price}</span>
                  <span class="shop-item-price">$ ${d.l_price}</span>
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
  } else if (e.target.value === "6") {
    var sec = document.getElementById("select-name");
    document.getElementById("divid").innerHTML = `<div class="shop-items">`;

    fetch("/static/specialty.json")
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
                    <p> ${d.desc}</p>
              
                    <fieldset>
                    <label>
                    <span class="shop-item-price">$ ${d.s_price}</span>
                    <span class="shop-item-price">$ ${d.m_price}</span>
                    <span class="shop-item-price">$ ${d.l_price}</span>
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
  } else if (e.target.value === "7") {
    var sec = document.getElementById("select-name");
    document.getElementById("divid").innerHTML = `<div class="shop-items">`;

    fetch("/static/espresso.json")
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
            <p> ${d.desc}</p>
      
            <fieldset>
            <label>
            <span class="shop-item-price">$ ${d.s_price}</span>
            <span class="shop-item-price">$ ${d.m_price}</span>
            <span class="shop-item-price">$ ${d.l_price}</span>
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
  } else if (e.target.value === "8") {
    var sec = document.getElementById("select-name");
    document.getElementById("divid").innerHTML = `<div class="shop-items">`;

    fetch("/static/blended.json")
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
              <p> ${d.desc}</p>
        
              <fieldset>
              <label>
              <span class="shop-item-price">$ ${d.s_price}</span>
              <span class="shop-item-price">$ ${d.m_price}</span>
              <span class="shop-item-price">$ ${d.l_price}</span>
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

  function purchaseClicked() {
    alert("Thank you for your purchase");
    var cartItems = document.getElementsByClassName("cart-items")[0];
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

  function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
    var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;

    addItemToCart(title, price);
    updateCartTotal();
  }

  function addItemToCart(title, price) {
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
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
}
