import React,{useContext} from 'react'
import { ThemeContext } from './App'

export default function FunctionalContextComponent() {
    const darkTheme = useContext(ThemeContext)

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding:'2 rem',
        margin: '2 rem'

    }

    return(
        <div style={themeStyles} >Functional Theme</div>
    )
}