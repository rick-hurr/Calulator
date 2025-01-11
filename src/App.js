import './App.css';
import Key from './components/key.jsx'
import {useState} from 'react';
const keys = [9,8,7,6,5,4,3,2,1,0]

function App() {
const [curValue,setCurValue] = useState('')
const [prevValue,setPrevValue] = useState('')
const [operation,setOperation] = useState('')


  return (
    <div className="App">
      <header className="App-header">
        <label>{curValue}</label>
        <div className='flex-grid'> 
        {keys.map((w) => {
         return<>
          <div className='flex-col'>
          <Key num={w} setCurValue={setCurValue} curValue={curValue}/>
          </div>
          </>
        })}
        <Key num={'+'} isFunction={true} setPrevValue={setPrevValue} setOperation={setOperation} prevValue={prevValue} setCurValue={setCurValue} curValue={curValue} />
        <Key  num={'='} isFunction={true} setOperation={setOperation} prevValue={prevValue} setCurValue={setCurValue} curValue={curValue} setPrevValue={setPrevValue}/>
        </div>
   
      </header>
    </div>
  );
}

export default App;
