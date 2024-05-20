import './App.css';
import { useState } from 'react';

function App() {
  
    const [count, setCount] = useState(0);
    function handleClick() {
      setCount(count+1);
    }
  
  
  const state = true
  const items = [
    { name: 'cabbage', id: 1, isFruit: false },
    { name: 'apple', id: 2, isFruit: true },
    { name: 'dog', id: 3, isFruit: false },
  ]

  const listItems = items.map(item =>
    <li key={item.id} style={{
      color: item.isFruit ? 'magenta' : 'white'
    }}
    >
      {item.name}
    </li>
  )
  return (
    <div className="App bg-blue-500 h-">
      <div>
        <ul>{listItems}</ul>
      </div>
      <button onClick={handleClick}> Hi {count}</button>
      {state ? (
        <div>
          <button onClick={handleClick}> Hello {count} </button>
        </div>
      ) : (
        <button onClick={handleClick}> Bye {count} </button>
      )}
    </div>
  );
};

export default App;
