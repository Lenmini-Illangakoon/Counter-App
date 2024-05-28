import React from 'react'; //import React library
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  // Increment the counter
  const increment = () => {
    setCounter(count => count + 1); // Update counter by incrementing its value by 1
  }

   /** OR
    * 
   * const increment = () =>{
   *  setCounter(counter + 1);
   * }
   * 
   */

  // Decrement the counter if it's greater than 0
  const decrement = () =>{
    if (counter > 0){
      setCounter(count => count - 1);
    }
  }

   // Reset the counter to 0
  const reset = () =>{
    setCounter(0);
  }


  return (
    <div className='counter'>
    <h1>Counter App</h1>
    <div className='counter_display'>
      <h3>Count :</h3> 
      {/* Display current counter value*/}
      <span className='counter_output'>{counter}</span> 
    </div>
      <div className='btn_container'>
          <button className='increment_btn' onClick={increment}>Increment + </button>
          <button className='decrement_btn' onClick={decrement}>Decrement - </button>
      </div>
      <button className='reset_btn' onClick={reset}>Reset</button>
    </div>
  );
}

export default App;

/**
 * <span className='counter_output'>{counter}</span>
 * 
 * {counter} - this is the state variable
 */