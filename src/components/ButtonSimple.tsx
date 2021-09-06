import styles from '../styles/ButtonSimple.module.css'

interface ButtonSimpleProps {
  action: () => void
  text: string
  bgColor: string
}

export default function ButtonSimple(props: ButtonSimpleProps) {
  return (
    <button
      className={styles.button}
      style={{background: props.bgColor}}
      onClick={props.action}>{props.text}</button>
  )
}
