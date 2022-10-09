// learning useEffect from ben awad - React hook tutorial
import React,{ useEffect, useState} from 'react'
import { Hello } from './Hello';
import { useForm } from './useForm'

// usecases of useEffect mount , unmount in regular app
const App = () => {
  const [showHello,setShowHello] = useState(true)
  const [values, setValues ] = useForm({email:'', password: '', firstname:''});

    // cool thing about useEffect it doesn't just have to work when a component mount ,unmount  // meaning
  useEffect(()=>{
    const onMousemove = e => {
      console.log(e);
    }
    // Effects are a great place to addevent listeners and remove them
    window.addEventListener('mousemove',onMousemove)

    return ()=>{
      window.removeEventListener('mousemove',onMousemove)
    } // lets say we want this to fire when ever values.email changes ; meaning its gonna call return() i.e the cleanup function \
      // so every time we change the values.email its gonna unmount , /its not really unmounting anything / its just cleaning up the old value 
      // in this case the old values.email
      // and we have a new value on the next render 
  },[])

  // 

  return (
      <div>
        {/* <button onClick={()=> setShowHello(!showHello)} >toggle</button> */}
          {/* {showHello &&  <Hello/>} */}
           <input type="text" name='email' value={values.email} onChange={setValues} />
           <input type="text" name='firstname' value={values.firstname} onChange={setValues} placeholder='firstname' />
           <input type="password" name='password' value={values.password} onChange={setValues} />

      </div>
  );

}

export default App;
