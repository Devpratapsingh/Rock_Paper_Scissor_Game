import {useState} from "react";
import "./Guess.css"
import Animate from './Animate'
export default function Guess(){
    let [count_user,setCount_user]=useState(0);
    let [count_computer,setCount_computer]=useState(0);
    let[uc,setuc]=useState("Not played any move yet")
    let[cc,setcc]=useState("Not played any move yet")
    let[result,setresult]=useState("")
    let r;
    function output(e){
        r= parseInt(Math.random()*10)%3
        let x=e.target.id;
        if(x=="stone"){
            setuc("stone")
        }
        if(x=="paper"){
            setuc("paper")
        }
        if(x=="scissor"){
            setuc("scissor")
        }
        if(r==0){
            setcc("stone")
        }
        if(r==1){
            setcc("paper")
        }
        if(r==2){
            setcc("scissor")
        }
        if(r==0 && x=="paper"){
            setCount_user(count_user+1)
            setresult("You Won this Move")
        }
        else if(r==1 && x=="scissor"){
            setCount_user(count_user+1)
            setresult("You Won this Move")
        }
        else if(r==2 && x=="stone") {
            setCount_user(count_user+1)
            setresult("You Won this Move")
        }
        else if ((r==0 && x=="stone")||(r==1 && x=="paper")||(r==2 && x=="scissor")){
            setresult("This Move is Tie")
        }
        else {
            setCount_computer(count_computer+1)
            setresult("You Lose this Move")
        }
    }
    function ShowResult(){
        let res;
        if (count_user>count_computer){
            res="You won the battle"
        }
        else if (count_user<count_computer){
            res="You lose the battle"
        }
        else{
            res="Match is Tie"
        }
        const del=document.getElementById("maindiv");
        const div1=document.getElementById("div");
        del.remove();
        const make=document.createElement("h2" )
        const n=document.createElement("h3")
        n.innerHTML="Refresh the Page to Play Again"
        make.innerHTML=res;
        make.style.backgroundColor="yellow"
        div1.appendChild(make);
        div1.appendChild(n);
       
    }
    
    return(
        <div id="div">
        <div id="maindiv">
        <h2 style={{backgroundColor:"blanchedalmond",}}>Rock Paper Scissor</h2>
            <h2>Your point-{count_user}</h2>
            <h2>Computer Point-{count_computer}</h2>
            {/* <h3>Your choice is-{uc}</h3>
            <h3>Computer choice is-{cc}</h3> */}
            <button className="button" onClick={output} id="stone">Stone</button>
            <button className="button" onClick={output} id="paper">Paper</button>
            <button className="button" onClick={output} id="scissor">Scissor</button>
            <marquee behavior="alternate" direction="Right"><h2><i>{result}</i></h2></marquee>
            <Animate cc={cc} uc={uc}/>
        </div>
        <button onClick={ShowResult} style={{marginTop:10}}>Final Result</button>
        </div>
    )
}