const elNavbar = document.querySelector("#Navbar");
const elNavbarDarkLogo = document.querySelector("#LogoForDark");
const elNavbarLightLogo = document.querySelector("#LogoLight");
let elNavbarLink = document.getElementsByClassName("navLink");
const elNavbarToggler = document.querySelector(".navbar_toggler");
const elMobileNavbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  elNavbar.classList.toggle("nav_on_scroll", window.scrollY > 0);
  elNavbarDarkLogo.classList.toggle("visually_hidden", window.scrollY > 0);
  elNavbarLightLogo.classList.toggle("visually_hidden", window.scrollY <= 0);
  elNavbarToggler.classList.toggle("navbar_toggler_dark", window.scrollY>0);
  elNavbarToggler.classList.toggle("navbar_toggler_white", window.scrollY<=0);
  elMobileNavbar.classList.toggle("navbar_bg_white", window.scrollY>0);

  for(var x=0; x < elNavbarLink.length; x++){
    elNavbarLink[x].classList.toggle("nav_link_dark", window.scrollY>0);    
    elNavbarLink[x].classList.toggle("nav_link", window.scrollY<=0);    
  }
});

const elOpenBtn = document.querySelector("#open_btn");
const elCloseBtn = document.querySelector("#close_btn");

elOpenBtn.addEventListener("click", () =>{
  elMobileNavbar.classList.add("navbar_open");
})

elCloseBtn.addEventListener("click", () =>{
  elMobileNavbar.classList.remove("navbar_open");
})



