window.addEventListener("DOMContentLoaded", () => {

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  
  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        420:{
            items:1,
            nav:false
        },
        600:{
          items:2,
          nav:false
      },
      800:{
        items:3,
        nav:false
    },
    }
  })

  //Hamburger menu
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menuItem");
  const hamburger= document.querySelector(".hamburger");
  const close = document.querySelector(".close");
  const open = document.querySelector(".open");

  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      close.style.display = "none";
      open.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      close.style.display = "block";
      open.style.display = "none";
    }
  }

  hamburger.addEventListener("click", toggleMenu);

  // Fin Hamburger menu


  
  //

  const haut = document.querySelector("#haut");

  haut.addEventListener("click", () =>{

    window.scrollTo({
      top:0,
      left:0,
      behavior: "smooth"
    })
  })

})  