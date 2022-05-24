import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [arr,addButton] = useState([]);
  var [count2, setCount2] = useState(0);
  function increaseCount(){
    setCount(count+1);
  }
  function lastBtnClicked(e){
    setCount2(count2=parseInt(e.target.id));
  }
  function onAddBtnClick(){
    addButton(arr.concat(<button id={count + 1} onClick={lastBtnClicked}>Button {count+1}</button>));
    increaseCount();
  }
  return (
    <div className='buttonDiv'>
      <button>COUNTER - {count}</button>
      <button>LAST BUTTON CLICKED - {count2}</button>
      <br></br>
      <button onClick={onAddBtnClick}>ADD A BUTTON </button>
      {arr}
    </div>
  );
}

export default App;
