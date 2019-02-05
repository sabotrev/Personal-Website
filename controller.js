toggleNav = (element) => {
  var sideNav = document.getElementById("mySidenav");
  var navIcon = document.getElementById("navIcon");

  if (navIcon.className === 'menu') {
    sideNav.style.width = "250px";
  } else {
    sideNav.style.width = "0";
  }

  navIcon.classList.toggle('scale-out-center');
}