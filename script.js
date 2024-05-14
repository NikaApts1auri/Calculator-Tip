const billInput=document.getElementById("bill");
const tipButtons=Array.from(document.getElementsByClassName("tip"));
const peopleInput=document.getElementById("people");
const tipResult=document.getElementById("tip-result");
const totalResult=document.getElementById("total-result");
const reset=document.getElementById("reset");

let billValue= 0; 
let percentValue= 0;
let peopleValue= 0;

billInput.addEventListener("input",(event)=>{
    billValue=event.target.value;
    calculation();
});


tipButtons.forEach(button =>{
    button.addEventListener("click",(event)=>{
     percentValue = parseInt(event.target.textContent);
     button.style.backgroundColor="#26c2ae";
     button.style.border=0;
     button.style.color="#00474b";
     calculation();
    });
});


peopleInput.addEventListener("input",(event)=>{
peopleValue=event.target.value;
calculation();
});


function calculation(){
const tipResultValue=(billValue * (percentValue / 100)) / peopleValue;
const totalResultValue = tipResultValue + billValue / peopleValue;

 if(peopleValue !=0){
    tipResult.textContent =`$${tipResultValue.toFixed(2)}`;
    totalResult.textContent=`$${totalResultValue.toFixed(2)}`;
 }
}; 

reset.addEventListener("click",()=>{
// billInput.value="";
// peopleInput.value="";
// billValue=0;
// tipResult.textContent =`$0.00`
// totalResult.textContent=`$0.00`
window.location.reload();
})