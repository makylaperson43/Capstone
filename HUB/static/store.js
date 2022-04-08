var addButton = document.getElementsByClassName("addBttn");

for (i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener("click", function () {
    var productId = this.dataset.product;
    var action = this.dataset.action;
    console.log("productId:", productId, "Action:", action);
  });
}

function selectSize(id) {
  for (var i = 1; i <= 3; i++) {
    document.getElementById("check" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}
