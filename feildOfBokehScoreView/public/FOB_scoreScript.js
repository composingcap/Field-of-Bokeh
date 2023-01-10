let score = document.getElementById("score");
let socket = io();
let lastPage = "Title"

let player = "A";
let slider = document.getElementById("transitionSlider")
socket.on("turnTo", (data)=>{ 
    if (data != lastPage){
        lastPage = data;
    if (data == "Title") score.setAttribute("src","./FOB_Score/Title.svg");
    if (data == "P1") score.setAttribute("src","./FOB_Score/P1.svg");
    if (data == "P2") score.setAttribute("src","./FOB_Score/P2.svg");
    if (data == "P3"){
        if (player =="A") score.setAttribute("src","./FOB_Score/P3A.svg");
        if (player =="B") score.setAttribute("src","./FOB_Score/P3B.svg");
        if (player =="C") score.setAttribute("src","./FOB_Score/P3C.svg");
        if (player =="D") score.setAttribute("src","./FOB_Score/P3D.svg");
    } 
    if (data == "P4") score.setAttribute("src","./FOB_Score/P4.svg");
    }
});

socket.on("transition",(data)=>{
    slider.value = data;
});

function playerChange(){
    player = document.getElementById("playerSelect").value;
    lastPage = "";
}



