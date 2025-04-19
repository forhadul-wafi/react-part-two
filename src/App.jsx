import { Suspense } from 'react';
import './App.css'
import Counter from './Counter';
import Batsman from './Cricket';
import User from './Users';
import Friends from './Friends';

function App() {

  const fetchUser = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

  const fetchFriends = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json();
  }
 const friendsPromise = fetchFriends();
 
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

      <Suspense fallback={<h3>Loading...</h3>}>
        <User fetchUser = {fetchUser}></User>
      </Suspense>

      <Suspense fallback={ <h3>Friends loading</h3> }>
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense>

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
