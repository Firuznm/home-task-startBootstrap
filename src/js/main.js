let header=document.querySelector("header")
let hamburgerMenu=document.querySelector(".hamburger-menu")
let closeMenu=document.querySelector(".close-menu")
let menu=document.querySelector(".menu")
// console.log(header);
// console.log(hamburgerMenu);
// console.log(closeMenu);

window.addEventListener("scroll", headerBgColorChange)

function headerBgColorChange(){
  let scrollValue=window.scrollY;
  if(scrollValue > 150){
	header.classList.add("changeNavColor")
  }else{
	header.classList.remove("changeNavColor")
  }
}

menu.addEventListener("click", change);

function change(){
  hamburgerMenu.classList.toggle("active")
  closeMenu.classList.add("noactive")
}