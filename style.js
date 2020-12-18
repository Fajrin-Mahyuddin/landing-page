var parent = document.getElementById("dropdown-parent");
var child = document.getElementById("dropdown");

this.parent.addEventListener("click", function (e) {
  console.log(this);
  e.preventDefault();
  child.style.display = "block";
});
