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