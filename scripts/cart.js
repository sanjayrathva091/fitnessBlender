// * imported header and footer features

import { myheader, myfooter } from '../components/components.js';

let hd = document.querySelector('#navbar');
hd.innerHTML = myheader();

let ft = document.querySelector('footer');
ft.innerHTML = myfooter();

// * header and footer features ended here

let data=JSON.parse(localStorage.getItem("cartData"))||[];

let display=document.getElementById("product-container");



append(data);
function append(data){
   display.innerHTML=null;
    data.forEach(function(ele,index){
        let box=document.createElement("div")
let image=document.createElement("img")
image.src=ele.image;
// console.log(ele.img)
let price=document.createElement("p");
        price.innerText=ele.price;

        let remove=document.createElement("button")
        remove.innerText="Remove";
        remove.addEventListener("click",removeItem);
        function removeItem(){
            display.innerHTML=null;
// console.log(ele)
let newData=data.filter(function(el,i){
return i!=index

})
console.log(newData)
localStorage.setItem("cartData",JSON.stringify(newData))
append(newData);
        }

       

box.append(image,price,remove)
display.append(box);

    })

}