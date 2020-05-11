window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var header = document.getElementById("myHeader");
  sticky = 97;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
