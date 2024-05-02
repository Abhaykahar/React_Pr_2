import { useState } from "react"
import Count from "./Count"

function App() {
  const [count,SetCount]=useState(0)

  const increment = () =>{
    SetCount(count + 1);
  }
  const decrement = () =>{
    SetCount(count - 1);
  }
  const Reset = () =>{
    let cnt=0;
    SetCount(cnt);
  }

  return (
    <div>
      <Count count={count} increment={increment} decrement={decrement} Reset={Reset}/>
    </div>
  )
}

export default App
