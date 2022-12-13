import './App.css';
import data from './components/Data/Data'
import List from './components/List/List';
import React,{useState} from 'react';

function App() {

 const [state,setState] = useState(data)

 function clickHandler(e){

  e.target.innerText === 'Clear all' ? setState((prev) => []) : setState((prev) => data)
  
 }

  return (<><div className='App'>
    <h1>{state.length} Birthday Today</h1>
    {state.map((val) => {
      return <List Data={val} />
    })}
    <div className='button'><button onClick={clickHandler}>Clear all</button><button onClick={clickHandler}>Reload</button></div>
    </div></>
  );
}

export default App;
