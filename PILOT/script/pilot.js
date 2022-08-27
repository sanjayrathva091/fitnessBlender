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