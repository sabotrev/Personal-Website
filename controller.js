toggleNav = (element) => {
  var sideNav = document.getElementById("mySidenav");
  var navIcon = document.getElementById("navIcon");
  var symbol = document.getElementById("symbol");

  if (navIcon.className === 'menu') {
    sideNav.style.width = "100%";
    symbol.classList = "fa fa-close";
  } else {
    sideNav.style.width = "0";
    symbol.classList = "fa fa-bars";
  }

  navIcon.classList.toggle('scale-out-center');
}