// learning useEffect from ben awad - React hook tutorial
import React,{ useEffect, useState} from 'react'
import { useForm } from './useForm'


const App = () => {
  const [values, setValues ] = useForm({email:'', password: ''});

  useEffect(()=>{
    console.log('render');
  })

  return (
      <div>
        
           <input type="text" name='email' value={values.email} onChange={setValues} />
           <input type="password" name='password' value={values.password} onChange={setValues} />

      </div>
  );

}

export default App;
