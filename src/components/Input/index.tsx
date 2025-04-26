import styles from './Input.module.css'

type InputProps = {
  id: string;
  text: string;
} & React.ComponentProps<'input'>

function Input({id,type,text, ...rest}: InputProps) {
  return (
    <>
         <label htmlFor={id}>{text}</label>
         <input className={styles.input} id={id} type={type} {...rest}/>
    </>
  )
}

export default Input
