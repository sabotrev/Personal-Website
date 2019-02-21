toggleNav = (element) => {
  var sideNav = document.getElementById('mySidenav');
  var navIcon = document.getElementById('navIcon');
  var symbol = document.getElementById('symbol');
  var body = document.getElementsByTagName('BODY')[0];

  if (navIcon.className === 'menu') {
    sideNav.style.width = '100%';
    symbol.classList = 'fa fa-close';
    body.style.overflow = 'hidden';
  } else {
    sideNav.style.width = '0';
    symbol.classList = 'fa fa-bars';
    body.style.overflow = 'unset';
  }

  navIcon.classList.toggle('scale-out-center');
}