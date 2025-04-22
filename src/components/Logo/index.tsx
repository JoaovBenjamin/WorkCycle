import { TimerIcon } from 'lucide-react'
import styles from './Logo.module.css'

function Logo() {
  return (
    <>
        <div className={styles.logo}>
            <a className={styles.logoLink} href='#'>
                <TimerIcon/>
                <span>WorkCycle</span>
            </a>
        </div>
    </>
  )
}

export default Logo
