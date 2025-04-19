import './App.css'
import Counter from './Counter';
import Batsman from './Cricket';

function App() {
function handleClick(){
  alert("I am Clicked.")
}

const handlewithArrow=()=>{
  alert("I am from arrow function.")
}

const handleAdd=(num)=>{
  const myNum = num +5;
  alert(myNum);
}

  return (
    <>
      <h1>Vite + React</h1> 
      <Batsman></Batsman> 
      <Counter></Counter>
      <button onClick={handleClick} >Click me</button>  
      <button onClick={handlewithArrow}>click me with arrow</button>
      <button onClick={()=>alert("arrow")} >click me</button>

      <button onClick={()=>{handleAdd(10)}}>Add 5</button>
    </>
  )
}

export default App
