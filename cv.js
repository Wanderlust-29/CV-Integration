window.addEventListener("DOMContentLoaded", function(){
  let newP = document.createElement("p");
  let newPText = document.createTextNode(`Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
        magna aliquam erat volutpat`);
  newP.appendChild(newPText)
  let leadDev = document.querySelector("h4:first-of-type");
  let symphony = document.querySelector("h4:nth-of-type(2)");
  
  leadDev.addEventListener("click", ()=>{
      leadDev.appendChild(newP);
  })
  symphony;addEventListener("click", ()=>{
      symphony.appendChild(newP)
  })
})