// * import header and footer features
import { myheader, myfooter } from '../components/components.js'

let hd = document.querySelector('#navbar');
hd.innerHTML = myheader();

let ft = document.querySelector('footer');
ft.innerHTML = myfooter();

//* ended here

let data=[
    {
    features:"Access to the entire library of free and Plus-only workouts for an almost endless variety of routine combinations.",
}, {
    features:"1, 2, 4, and 8-week options for short, convenient routines, or robust, longer-term exercise plans.",
},{
    features:"Live content-aware routine details that help you focus your routines on specific criteria as you build.",
},
{
    features:"Draft mode that allows you to edit all at once or build over time, and launch when you’re ready.",
},
{
    features:"Draft selector so you aren’t locked into building just one routine at a time",
},
{
    features:"Multiple day selector so you don’t have to add workouts to only one day at a time.",
},
{
    features:"Visual styling options to customize the look of each routine in your list.",
},
{
    features:"Include your non-Fitness Blender activity by adding custom workouts to your routines",
}

]   

function append(data){

    let container=document.getElementById("container");
    data.forEach(ele => {
    
        let features=document.createElement("p");
        features.innerText=ele.features
        
        // let p=document.createElement("p");
        // p.innerText=<i class="material-icons-outlined md-light live" aria-label="Supported">check_circle</i>
        container.append(features);
    });
}
console.log(data);
append(data);

let faq=[
    {
        ques:"Can I share my routine with other members?",
        ans:"Not right now, this is a feature we are exploring. Let us know if this is something you’d like us to prioritize."
    },
    {
        ques:"How do I edit all the details of my routine?",
        ans:"You can directly edit basic information like the title, description, and length of your Routine. Our content-aware algorithm automatically generates the rest of the details like daily duration, days per week, etc. to simplify the process of building a Routine. To change the details of your routine, you’ll need to edit or select workouts that match the criteria you’re trying to achieve."
    },
    {
        ques:"Can I edit my routine once it is live?",
        ans:"You can edit basic information like the title, description, etc. by selecting the edit button in the top right of the title card. But you won’t be able to change the workouts or sequence of a routine after you’ve launched it, so be sure you’re happy with your Routine before you hit that Save and Launch button."
    },
    
]
// console.log(faq)

function faqdata(data){
    let faqcontainer=document.getElementById("faqcontainer");

    data.forEach(ele=>{
        console.log(ele.ques,ele.ans)
        let div=document.createElement("div")
        let ques=document.createElement("h2");
        ques.innerText=ele.ques;

        let ans=document.createElement("p");
        ans.innerText=ele.ans;
        div.append(ques,ans)
        faqcontainer.append(div);
    })
}
faqdata(faq);