import './App.css';
import Key from './key.jsx'

const keys = [0,1,2,3]

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {keys.map((w) => {
          return <Key num={w}/>
        })}
      </header>
    </div>
  );
}

export default App;
