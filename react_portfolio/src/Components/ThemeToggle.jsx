import React, { createContext, useContext, useState, useEffect } from 'react'

const myTheme = createContext()

export const useTheme = () => useContext(myTheme)

export const DarkLightMode = ({ children }) => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        //clear body class name
        document.body.className = ''
        document.body.classList.add(`${theme}-mode`)
    }, [theme]) //add the chosen theme [light/dark]

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)

        //remove the old one to avoid multiple classes
        document.body.classList.remove(`${theme}-mode`)
        document.body.classList.add(`${newTheme}-mode`)
    }

    return (
        //.Provider is a built-in method in createContext, allows us to pass the value (theme, changeTheme) to the children (App.jsx)
        //in main.jsx wrapping the app will allow us to use the themes in all the components of the app
        <myTheme.Provider value={{ theme, changeTheme }}>
            {children}
        </myTheme.Provider>
    )
}