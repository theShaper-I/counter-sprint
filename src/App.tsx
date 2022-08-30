import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  }

  const onClickMinus = () => {
    setCount(count - 1);
  }

  return (
    <div className="counter container mx-auto">
      <div className="">
        <h2 className="text-center mt-20 text-3xl text-gray-500">Counter:</h2>
        <h1 className="text-center mt-4 text-7xl"> {count}</h1>
        <div className="flex justify-center mt-6">
          <button onClick={onClickMinus} className="btn bg-red-700 rounded-xl px-4 py-2 text-white text-2xl mr-4 drop-shadow-lg">- Minus</button>
          <button onClick={onClickPlus} className="btn bg-green-700 rounded-xl px-4 py-2 text-white text-2xl drop-shadow-lg">Plus +</button>
        </div>

      </div>
    </div>
  );
}

export default App;
