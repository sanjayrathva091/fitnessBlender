// * imported header and footer by sanjay 
import { myheader, myfooter } from '../components/components.js';

let hd = document.querySelector('#navbar');
hd.innerHTML = myheader();

let ft = document.querySelector('footer');
ft.innerHTML = myfooter();

// * finished importing header and footer

function data(){
    let obj={
            image:document.querySelector("#image").src,
            price:document.querySelector("#price").innerText,
            
            }
            // console.log(obj);
            let cartArr=JSON.parse(localStorage.getItem("cartData"))||[];
            cartArr.push(obj);
            // // console.log(cartArr)
            localStorage.setItem("cartData",JSON.stringify(cartArr));
            // }
            
            

}
// function addTocart(event){

//     let obj={
//     image:document.querySelector(".img").src,
//     price:document.querySelector(".price").innerText,
    
//     }
//     // console.log(obj);
//     cartArr.push(obj);
//     // console.log(cartArr)
//     localStorage.setItem("cartData",JSON.stringify(cartArr));
//     }
    
//     let cartArr=JSON.parse(localStorage.getItem("cartData"))||[];