import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import Button from './Button.tsx'


export default function ThemeSwitchBtn() {
    interface ThemeContextInterface {
        theme: string,
        toggleTheme: () => void
    }
    
    const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextInterface
    return (
        <Button label={theme} onClickHandler={toggleTheme}/>
    )
}
