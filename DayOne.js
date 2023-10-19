// function helloJs()
// {
//     console.log("Hi Rupesh");
// }
// const selecTor=document.getElementById('clickMe');
// console.log(selecTor);
const selecTor = document.getElementById('clickMe');
console.log(selecTor);

selecTor.addEventListener('click', () => {
    //console.log(selecTor.innerText);
    const prevText = selecTor.innerText;
   
    // selecTor.innerText = prevText === "On" ? "Off" : "On";
    if(prevText==="On")
    {
        console.log(prevText +"line number 20");
        selecTor.innerText="Off";
        selecTor.style.backgroundColor ="orange";
    }else if(prevText==="Off")
    {
        console.log(prevText +"line number 24");
        selecTor.innerText="On";
        selecTor.style.backgroundColor="Green";
    }
});

const onePoint=document.getElementById('onePoint');
onePoint.addEventListener('click', (event)=>
{
    if(event.detail===1){
   let updatedText= onePoint.innerText;
   updatedText+="Help us by Visiting Us.Thanks.Team Eureka Platforms";
   onePoint.innerText=updatedText;
    }
})

const eureka_Gateways=document.getElementById("eureka_Gateways");
eureka_Gateways.addEventListener('click',()=>
{
    eureka_Gateways.style.color="rgb(81, 5, 117)";
})

