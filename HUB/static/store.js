var addButton = document.getElementsByClassName("addBttn");

for (i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener("click", function () {
    var productId = this.dataset.product;
    var action = this.dataset.action;
    console.log("productId:", productId, "Action:", action);
  });
}
