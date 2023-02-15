import { useState, useEffect } from "react";

const CountDownTimer = ()=>{
    const [time, setTime] = useState(0);
    let intervalid;
    function keydown(e){
        if(e.key==='Enter'){
            clearInterval(intervalid);
            if(e.target.value !== Number && e.target.value > 0){
                setTime((previous) => parseInt(e.target.value));
            }else{
                setTime(0);
            }
        }
    }
    useEffect(()=>{
        if(time > 0){
            intervalid = setInterval(()=>{
                setTime((previous) => previous - 1);
                clearInterval(intervalid)
            }, 1000);
        }
    }, [time])
    

    return(
        <div>
            <h1>CountDown Timer</h1>
            <h2>Input</h2>
            <input type="integer" id="number" placeholder="Enter the number" onKeyDown={keydown}/>
            <h2>Output</h2>
            <div id="time">{time}</div>
        </div>
    )
}
export default CountDownTimer;