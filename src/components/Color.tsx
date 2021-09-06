import styles from '../styles/Color.module.css'


interface ColorProps {
  color: string
  selecionarCor: (color) => void
}

export default function Color(props: ColorProps) {
  return (
    <div
      onClick={() => props.selecionarCor(props.color)}
      style={{backgroundColor: props.color}}
      className={`${styles.color}`}></div>
  )
}
