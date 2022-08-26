import { myfooter  } from "../components/components.js";

let latestUpdate = document.querySelector('#new_update > div #close_symbol');
latestUpdate.addEventListener('click', () => {
    document.getElementById('new_update').innerHTML= null;
});
console.log(latestUpdate);

let footer = document.querySelector('main+footer');
footer.innerHTML = myfooter();