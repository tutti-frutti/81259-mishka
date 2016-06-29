//
//    var navMain = document.querySelector('.main-nav');
//    var navToggle = document.querySelector('.main-nav__toggle');
//
//    navMain.classList.remove('main-nav--nojs');
//
//    navToggle.addEventListener('click', function() {
//      if (navMain.classList.contains('main-nav--closed')) {
//        navMain.classList.remove('main-nav--closed');
//        navMain.classList.add('main-nav--opened');
//      } else {
//        navMain.classList.add('main-nav--closed');
//        navMain.classList.remove('main-nav--opened');
//      }
//    });

    var menuElem1 = document.querySelector('.main-nav');
    var menuElem2 = document.querySelector('.main-nav__service');
    var btn = document.querySelector('.main-nav__toogle');

    btn.onclick = function() {
      menuElem1.classList.toggle('open');
      menuElem2.classList.toggle('open');
      btn.classList.toggle('open');
    };
