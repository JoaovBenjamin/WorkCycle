import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './Menu.module.css'
import { useState, useEffect } from 'react'

type AvaliableThemes = "dark" | "light"    

function Menu() {

    const nextThemeIcon = {
        dark: <SunIcon/>,
        light: <MoonIcon/>
    };

    const [theme, setTheme] = useState<AvaliableThemes>(() => {
        const storageTheme = localStorage.getItem("theme") as AvaliableThemes || "dark";
        return storageTheme;
    })  
    

    function handleClickThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem("theme", theme)
        return() => {
            console.log('cleanup')
        }
    }, [theme])
  return (
    <>
       <nav className={styles.menu}>
            <a className={styles.menuLink} href="" aria-label='Ir para home'>
                <HouseIcon/>
            </a>
            <a className={styles.menuLink} href="" aria-label='Ir para o histórico'>
                <HistoryIcon/>
            </a>
            <a className={styles.menuLink} href="" aria-label='Ir para configurações'>
                <SettingsIcon/>
            </a>
            <a 
            className={styles.menuLink} 
            href="#" 
            aria-label='Mudar tema'
            onClick={handleClickThemeChange}
            >
                {nextThemeIcon[theme]}
            </a>
        </nav> 
    </>
  )
}

export default Menu
