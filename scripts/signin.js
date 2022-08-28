
// * header and footer impoerted here 

import { myheader, myfooter } from '../components/components.js';

let hd = document.querySelector('#navbar');
hd.innerHTML= myheader();

let ft = document.querySelector('footer');
ft.innerHTML = myfooter();

// * ended here


let form = document.querySelector("form")

let arrlogin = JSON.parse(localStorage.getItem("array"))||[]

form.addEventListener("submit", function(event){
    event.preventDefault()

    if(arrlogin==0){
        alert("No User Found Till Now")
        return
    }
    let obj={

        username:form.user.value,
        password:form.pass.value
        
    }
   
    let flag=false

for(let i=0; i<arrlogin.length; i++ ){
        if(arrlogin[i].username==obj.username && arrlogin[i].password==obj.password){
            flag=true;
            alert("Login Successfull")
            window.location.href="./index.html"
            break;
            
           }
        
        }
    if(flag==false){
        alert("Wrong Username Or Password")
    }
})
