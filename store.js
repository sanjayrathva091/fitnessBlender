let cartArr=JSON.parse(localStorage.getItem("cartData"))||[];
console.log(cartArr)

function addTocart(event){

let obj={
image:document.querySelector(".img").src,
price:document.querySelector(".price").innerText,

}
// console.log(obj);
cartArr.push(obj);
// console.log(cartArr)
localStorage.setItem("cartData",JSON.stringify(cartArr));
}





