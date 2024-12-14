const images =[
    {
      "src":"image1.jpg",
      "title":"RAIN MODE"

   },
   {
    "src":"image2.jpg",
    "title":"MOUNTAIN"

 },
 {
    "src":"image3.jpg",
    "title":"UNDER WATER"

 },
 {
    "src":"image4.jpg",
    "title":"FLOWERS"

 },
 {
    "src":"image5.jpg",
    "title":"INDIAN SEA"

 },
 {
    "src":"image6.jpg",
    "title":"BATTERFLY"

 },
 {
    "src":"image7.jpg",
    "title":"BIRDS"

 },
 {
    "src":"image8.jpg",
    "title":"TREE PRETTY"

 },
 {
    "src":"image9.jpg",
    "title":"BIRDS SITTING"

 },

]
let index=0;
let body=document.querySelector("#body");
let header=document.querySelector("#header");
let box1=document.querySelector("#img1");
let box2=document.querySelector("#img2");
let box3=document.querySelector("#img3");
header.textContent=images[index].title;
function increment(){
    header.classList.add("hidden");
       index=index+1;
       body.style.backgroundImage = `url('${images[index % images.length].src}')`;
       header.textContent=images[index%images.length].title;
       header.classList.remove("hidden");
       box1.style.backgroundImage = `url('${images[(index+1)% images.length].src}')`;
       box2.style.backgroundImage = `url('${images[(index+2)% images.length].src}')`;
       box3.style.backgroundImage = `url('${images[(index+3)% images.length].src}')`;
}
setInterval(increment, 3000);
function decrement(){
    
    index=index-1;
    if(index<0){
        index=images.length;
    }
    header.classList.add("hidden");
    body.style.backgroundImage = `url('${images[index % images.length].src}')`;
    header.textContent=images[index%images.length].title;
    header.classList.remove("hidden");
    box1.style.backgroundImage = `url('${images[(index-1)% images.length].src}')`;
    box2.style.backgroundImage = `url('${images[(index-2)% images.length].src}')`;
    box3.style.backgroundImage = `url('${images[(index-3)% images.length].src}')`;
}
function popup(){
    alert("Main page only no other pages !! :)");
}