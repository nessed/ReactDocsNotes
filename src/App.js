import './App.css';
import { useState } from 'react';

function App() {
  function MyButton() {
    const [count, setCount] = useState(0);


  }
  function handleClick() {
    alert('Clicked');
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
      {state ? (
        <div>
          <button onClick={handleClick}> Hello </button>
        </div>
      ) : (
        <button onClick={handleClick}> Bye </button>
      )}
    </div>
  );
};

export default App;
