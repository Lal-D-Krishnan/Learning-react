import { useEffect, useState } from "react"

export const useFetch = (url ) => {   // this will take a url 
    const [state, setState] = useState({data:null, loading: true})   // here you can see we are using multiple hooks in our custom hooks 

    useEffect(()=>{
        // setState({data:null, loading: true})  - transition  not smooth ; resets the data everytime 
        setState(state => ({data:state.data, loading: true}));  // to get it even smoother 
        fetch(url)
            .then(x => x.text())
            .then( y => {
                setState({data:y, loading: false})
            })
        
    }, [url])

    return  state;
}