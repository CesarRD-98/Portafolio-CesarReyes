import { useThemeContext } from '@/app/context/change_theme/theme.provider'
import { useWindowWidthContext } from '@/app/context/window_width/windowWidth.provider'
import { FiSun, FiMoon } from 'react-icons/fi';
import styles from './themeButton.module.scss'

export default function ThemeButton() {
    const { windowWidth } = useWindowWidthContext()
    const { theme, toggleTheme } = useThemeContext()
    const currentTheme: boolean = theme === 'light'

    return (
        <button onClick={toggleTheme} className={`btn ${styles.toggle}`}>
            {currentTheme ? <FiSun size={18} /> : <FiMoon size={18} />}
            {windowWidth > 768 && (
                currentTheme ? 'claro' : 'oscuro'
            )}
        </button>
    )
}
