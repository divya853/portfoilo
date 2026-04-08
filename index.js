// Typing Effect
const roles = ["Python Developer","AI Enthusiast","SQL Developer"];
let i=0,j=0,isDeleting=false;

function type(){
let text=roles[i];
document.getElementById("typing").textContent=text.substring(0,j);

if(!isDeleting) j++; else j--;

if(j==text.length) isDeleting=true;
if(j==0){isDeleting=false;i=(i+1)%roles.length;}

setTimeout(type,isDeleting?50:100);
}
type();

// Fade Animation
const fades=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{
fades.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("show");
}
});
});

// 3D Tilt
const box=document.querySelector(".img-box");

box.addEventListener("mousemove",(e)=>{
let x=(window.innerWidth/2-e.pageX)/25;
let y=(window.innerHeight/2-e.pageY)/25;
box.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`;
});

box.addEventListener("mouseleave",()=>{
box.style.transform="rotateY(0) rotateX(0)";
});