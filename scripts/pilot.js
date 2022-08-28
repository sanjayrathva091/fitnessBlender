
// * imported header and footer features
import { myheader, myfooter } from '../components/components.js'

let hd = document.querySelector('#navbar');
hd.innerHTML = myheader();

let ft = document.querySelector('footer');
ft.innerHTML = myfooter();

// * imorted headaer and footer features ended here


function data(){
    let obj={
            image:document.querySelector(".image").src,
            price:document.querySelector(".price1").innerText,
            
            }
            console.log(obj);
            let cartArr=JSON.parse(localStorage.getItem("cartData"))||[];
            cartArr.push(obj);
            // // console.log(cartArr)
            localStorage.setItem("cartData",JSON.stringify(cartArr));
            // }
            window.location.href="#";
            

}