import { myheader, myfooter  } from "../components/components.js";

let latestUpdate = document.querySelector('#new_update > div #close_symbol');
latestUpdate.addEventListener('click', () => {
    document.getElementById('new_update').innerHTML= null;
});


let header = document.querySelector('#navbar');
header.innerHTML = myheader();

let footer = document.querySelector('main+footer');
footer.innerHTML = myfooter();