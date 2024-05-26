import { useTheme } from '../ThemeToggle'
import React from 'react'


function Footer() {
    const { theme } = useTheme()

    return (
        <footer className={`${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'} text-center  mt-auto py-4`}>
            <p>© 2021 Muhsin Tarik</p>
        </footer>
    )
}

export default Footer
