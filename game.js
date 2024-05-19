let turn =1,flag=1;
function change(box){
    if(box.innerText=='' && flag){
        let turning='';
        if(turn){
            box.innerText='X';
            turn=0;
            turning='0';
        }
        else{
            box.innerText='0';
            turn=1;  
            turning='X';   
        }
        info.innerText=info.innerText.slice(0,-1)+ turning;
        checkwin();
    }
}

//function of game wininig
const boxtext=document.querySelectorAll(".box");
let win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
        ];

const checkwin=function(){
    win.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) 
       && (boxtext[e[0]].innerText!=="")){
        let winner=boxtext[e[0]].innerText;
        info.innerText=winner+" Won";
        turn=(winner==='0'?0:1);
        flag=0;
    }
})};

//function for reset
const button=document.querySelectorAll(".box");
const reset = ()=>{
    button.forEach(e => e.innerText="");
    flag=1;
    if(info.innerText[0]=='T')
        info.innerText="Turn for "+winner;
    else
        info.innerText="Turn for "+info.innerText[0];
    
}

//ek baar jeetne ke baad ...aage value enter na ho....




//adding click event on all buttons
const boxes=document.querySelectorAll(".box");
for(let i of boxes){
    i.addEventListener('click',()=>change(i))
}
