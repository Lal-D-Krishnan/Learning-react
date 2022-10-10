import React, { useCallback, useState } from 'react';
import { Hello } from './Hello'

const App = () =>{
  const [count, setCount] = useState(0)

  const callbackvalmemo = useCallback((n)=>{
    setCount(c=> c + n)
  },[setCount])

  return (
    <div>
    
      <Hello increment = { callbackvalmemo }/>
      <div>count : {count}</div>
    </div>
  );
}

export default App;
