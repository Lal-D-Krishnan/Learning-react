import React from 'react'

export const Hello= () => {
    React.useEffect(()=>{
        console.log('render');
    
        return ()=>{
          console.log('unmount + made some changes here');
        }
      },[])

    return <div>This is the hello component </div>
}