import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  increaseAmount,
  decreaseAmount,
} from "../features-redux-present-school/counter/counter-slice";
import { useState } from "react";

// import { incrementInCounter } from "../redux-old-school/actions";

function App() {
  const [incrementPositive, setIncrementPositive] = useState(0);
  const [incrementNegative, setIncrementNegative] = useState(0);

  const dispatch = useDispatch();

  function handleIncreaseCounter() {
    dispatch(increase());
  }

  function handleIncreaseAmount() {
    dispatch(increaseAmount(5));
  }

  function handleDecreaseAmount() {
    dispatch(decreaseAmount(-5));
  }

  function handleDecreaseCounter() {
    dispatch(decrease());
  }

  function handleInsertPositiveValue() {
    dispatch(increaseAmount(incrementPositive));
    const positive = document.querySelector(
      "#incrementPositive"
    ) as HTMLInputElement;
    positive.value = "";
    setIncrementPositive(0);
  }

  function handleInsertNegativeValue() {
    dispatch(decreaseAmount(incrementNegative));
    const negative = document.querySelector(
      "#incrementNegative"
    ) as HTMLInputElement;
    negative.value = "";
    setIncrementNegative(0);
  }

  const valueCounter = useSelector((state) => state.counter.value);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <label htmlFor="inputNumberIncrementNegative">
          Digite um valor NEGATIVO para decrementar
        </label>
        <input
          type="number"
          name="inputNumberIncrementNegative"
          id="incrementNegative"
          onChange={(e) => setIncrementNegative(Number(e.target.value))}
        />
        <button onClick={() => handleInsertNegativeValue()}>Incrementar</button>
      </div>
      <div className="card">
        <label htmlFor="inputNumberIncrementPositive">
          Digite um valor POSITIVO para incrementar
        </label>
        <input
          type="number"
          name="inputNumberIncrementPositive"
          id="incrementPositive"
          onChange={(e) => setIncrementPositive(Number(e.target.value))}
        />
        <button onClick={() => handleInsertPositiveValue()}>Incrementar</button>
      </div>
      <div className="card">
        <button onClick={handleIncreaseCounter}>Increment</button>
        <button onClick={handleIncreaseAmount}>Increment +5</button>
        <span>{valueCounter}</span>
        <button onClick={handleDecreaseAmount}>Decrement -5</button>
        <button onClick={handleDecreaseCounter}>Decrement</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
