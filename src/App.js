// learning useEffect from ben awad - React hook tutorial
import React,{ useEffect, useState} from 'react'
import { Hello } from './Hello';
import { useFetch } from './useFetch';
import { useForm } from './useForm'

// usecases of useEffect mount , unmount in regular app
const App = () => {
  const [showHello,setShowHello] = useState(true)
  const [values, setValues ] = useForm({email:'', password: '', firstname:''});
  
  const [count, setCount] = useState(() => 
  JSON.parse(localStorage.getItem('count')) 
  );
  const {data, loading} =  useFetch(`http://numbersapi.com/${count}/trivia`)

  useEffect(()=>{
    localStorage.setItem('count', JSON.stringify(count))
  }, [count])


  return (
      <div>
        <div>{loading ? 'loading...' : data }</div>
        <div>count : {count}</div>
        <button onClick={()=> setCount(c=> c+1)}>increment</button>
        {/* <button onClick={()=> setShowHello(!showHello)} >toggle</button> */}
          {/* {showHello &&  <Hello/>} */}
           <input type="text" name='email' value={values.email} onChange={setValues} />
           <input type="text" name='firstname' value={values.firstname} onChange={setValues} placeholder='firstname' />
           <input type="password" name='password' value={values.password} onChange={setValues} />

      </div>
  );

}

export default App;
