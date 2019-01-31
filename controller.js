toggleNav = () =>{
  var sideNav = document.getElementById("mySidenav");
  var navIcon = document.getElementById("icon");
  if (navIcon.className === 'menuIcon') {
    navIcon.className = 'closeIcon';
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("navIcon").className = "fa fa-close";
  } else {
    navIcon.className = 'menuIcon';
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("navIcon").className = "fa fa-bars";
  }
}