const d = document;
let time = 200
d.querySelectorAll(".page").forEach(e => {
    setTimeout(()=>{
        e.style = `
            transform: translateX(0%);
            transition: all 1.4s ease-out;
            opacity:1;`
    },time)
    time += 500
});

//square creation
let currentSqNum = 1;
function createSquare(){
    let div = d.createElement("div");
    let sqLenght = Math.random().toFixed(2) * 50;
    div.className = `backSquare sqAnim--${currentSqNum}`
    div.style = `
                width: ${sqLenght}px;
                height: ${sqLenght}px;
                top: ${Math.random().toFixed(3) * d.documentElement.scrollHeight - sqLenght}px;
                left: ${Math.random().toFixed(3) * d.documentElement.scrollWidth - sqLenght}px;
                `
    d.querySelector("body").appendChild(div);
}
sqTimer = setInterval(()=>{
    createSquare();
    currentSqNum++;
    if(currentSqNum == 40){
        clearInterval(sqTimer);
    }
}, 200);

const pRoutes = {
    "forum": ["img/forum.gif","https://github.com/Pabloleabr/Proyecto"],
    "conway":["img/conway.gif","https://github.com/Pabloleabr/JS/tree/main/game_of_life"],
    }
const pimg = d.getElementById("pimg");
const aimg = d.getElementById("aimg");
const dforum = d.getElementById("dforum");
const dconway = d.getElementById("dconway");

function hiddeText(){
    d.getElementById("pdescription").querySelectorAll("p").forEach((p)=>{
        p.classList.add("hidden");
    })

}

d.getElementById("bforum").onclick = () =>{
    pimg.src = pRoutes.forum[0];
    aimg.href = pRoutes.forum[1];
    hiddeText();
    dforum.classList.remove("hidden")

}

d.getElementById("bconway").onclick = () =>{
    pimg.src = pRoutes.conway[0];
    aimg.href = pRoutes.conway[1];
    hiddeText();
    dconway.classList.remove("hidden")
}