window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var header = document.getElementById("myHeader");
  sticky = header.offsetTop;
  if (header.classList.contains("sticky")) {
    if (window.pageYOffset < sticky + header.clientHeight) {
      header.classList.remove("sticky");
    }
  } else {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    }
  }
}
