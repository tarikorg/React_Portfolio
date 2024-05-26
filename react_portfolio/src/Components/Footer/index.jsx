import { useTheme } from '../ThemeToggle'
import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'


function Footer() {
    const { theme } = useTheme()

    return (
        <footer className={`${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'} text-center  `}>
            <div className='d-flex justify-content-evenly links'>
                <p>© 2024 Muhsin Tarik</p>


                <a href="https://github.com/tarikorg">GitHub</a>


                <a href="mailto: myku1771@gmail.com">Email</a>
            </div>

        </footer>
    )
}

export default Footer
