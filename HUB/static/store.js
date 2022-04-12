function selectSize(id) {
  for (var i = 1; i <= 3; i++) {
    document.getElementById("check" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}
