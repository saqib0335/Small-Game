import './App.css';
import { nanoid } from 'nanoid';
import Die from './Components/Die';
import Confetti from "react-confetti";
 import React, { useState , useEffect, useRef } from 'react';

function App() {
   const[dice, setDice] =useState(newArray())
   const [tenzies , setTenzies] = useState(false)
   const [timer, setTimer] = useState(0)
   const interval = useRef(null)


   useEffect(() =>{
    if (!tenzies) {
      // Start the timer when the game is ongoing
      interval.current = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    }
    return () => {
      // Clear the interval when the component unmounts
      clearInterval(interval.current);
      };
   },[tenzies])
   
   useEffect(() =>{
    const allHeld = dice.every(die => die.isHeld && die.value === dice[0].value)
    if(allHeld){
      setTenzies(true)
      clearInterval(interval.current)
    }
   },[dice])


   function helper(){
    return {
      value: Math.floor(Math.random() *6) + 1,
      id:nanoid(),
      isHeld: false
    }
  }
    function newArray (){
      let arr = []
      for(let i=0; i< 10; i++){
        arr.push(helper())
      }
      return arr
    }
    function roller (){
      if(!tenzies){
        setDice(
          dice.map(die => {
            return die.isHeld ? die : helper()
            })
        )
      }else{
        setDice(newArray())
        setTimer(0)
        setTenzies(false)
      }
    }
    function holdDice (id){
      setDice(prevDice => prevDice.map(dice => {
        return dice.id === id ? {...dice, isHeld: !dice.isHeld}
        : dice
        }))
       
    }
    const data = dice.map(pre => (
      <Die key={pre.id} value={pre.value} isHeld={pre.isHeld} hold={() => holdDice(pre.id)}/>
    ))
   
  return (
    <main>
          {tenzies && <Confetti />} 
           <p>Time: {timer} seconds</p> 
         <h1 className='title'>Tenzies</h1>
          <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p> 
       <div className='dice-container'>
        {data}
       </div>
       <button onClick={roller} className='roll-dice'>{tenzies ? 'New Game' : 'Roll'}</button>
    </main>
  );
}

export default App;
