// learning useEffect from ben awad - React hook tutorial
import React,{ useEffect, useState} from 'react'
import { Hello } from './Hello';
import { useForm } from './useForm'


const App = () => {
  const [showHello,setShowHello] = useState(true)
  const [values, setValues ] = useForm({email:'', password: '', firstname:''});

  // useEffect(()=>{
  //   console.log('render');

  //   return ()=>{
  //     console.log('unmount');
  //   }
  // },[])

  return (
      <div>
        <button onClick={()=> setShowHello(!showHello)} >toggle</button>
          {showHello &&  <Hello/>}
           <input type="text" name='email' value={values.email} onChange={setValues} />
           <input type="text" name='firstname' value={values.firstname} onChange={setValues} placeholder='firstname' />
           <input type="password" name='password' value={values.password} onChange={setValues} />

      </div>
  );

}

export default App;
