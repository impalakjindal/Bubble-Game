var timer=50;
var score=0;
var hitrn=Math.floor(Math.random()*10);

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function makeBubble(){
    var clutter="";
for(var i=1;i<=184;i++){
    var rn=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}
function runTimer(){
var timerint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerinterval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over!</h1>`;
        }
    },1000);
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
var clickednum=(Number(dets.target.textContent));
if(hitrn==clickednum){
    increaseScore();
    getNewHit();
    makeBubble();
}else{
    getNewHit();
    makeBubble();
}
});

makeBubble();
runTimer();
getNewHit();