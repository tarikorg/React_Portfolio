import { useTheme } from '../ThemeToggle'

function Footer() {
    const { theme } = useTheme()

    return (
        <footer className={`fixed-bottom ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'} text-center p-3`}>
            <p>© 2021 Muhsin Tarik</p>
        </footer>
    )
}

export default Footer
