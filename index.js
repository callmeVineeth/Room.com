const Togglebar = document.getElementById('hamberger');
const navbar = document.querySelectorAll('.mainNavbar');
const LeftBtn =document.getElementById('left');
const RightBtn =document.getElementById('right');
const img1 = document.getElementById('image-one');
const img2 = document.getElementById('image-two');
const img3 = document.getElementById('image-three');



let clickCount = 0;

function mobileNav() {
clickCount++
if(clickCount % 2==1){
 console.log("Tooglebar clicked");
 Togglebar.src='./images/icons8-close-26.png';
 Togglebar.style.transform='translateY(0)';
 navbar.forEach(element => {
   element.style.transform='translateY(0)'
   
 });
}
else{
    console.log("close Btn clicked")
    Togglebar.src='./images/icon-hamburger.svg';
    Togglebar.style.transform='translateY(100px)';
   navbar.forEach(element => {
   element.style.transform='translateY(-100px)'
   
 });
}
}


function LeftClick() {
   clickCount++;
   if(clickCount%2==1){
   console.log("leftbtn clicked")
   img1.style.transform='translateX(-900px)';
   img3.style.transform='translateX(0)'; 
   img2.style.transform='translateX(-900px)'; 
}else{
   img3.style.transform='translateX(-900px)'
   img2.style.transform='translateX(0)';
}
}

function RightClick() {
   console.log("rightbtn clicked")
   img1.style.transform='translateX(0)';

}


Togglebar.addEventListener('click', mobileNav);
LeftBtn.addEventListener('click', LeftClick);
RightBtn.addEventListener('click', RightClick);

