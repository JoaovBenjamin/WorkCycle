import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
        <a href="">Entenda como funciona a técnica pomodoro</a>
        <a href="">WorkCycle &copy; {new Date().getFullYear()}</a>
    </footer> 
  )
}

export default Footer
