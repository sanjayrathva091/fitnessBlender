

// * imported header and footer here by sanjay
import { myheader, myfooter } from '../components/components.js';

let hd = document.querySelector('#navbar');
hd.innerHTML = myheader();

// * header and footer ended here

let cartArr=JSON.parse(localStorage.getItem("cartData"))||[];
console.log("cartArr:", cartArr);
addTocart();
function addTocart(event){

let obj={
image:document.querySelector(".img").src,
price:document.querySelector(".price").innerText,

}
console.log(obj);
cartArr.push(obj);
// console.log(cartArr)
localStorage.setItem("cartData",JSON.stringify(cartArr));
}
