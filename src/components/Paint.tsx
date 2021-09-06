import ArrayClass from "../model/ArrayClass"
import styles from '../styles/Paint.module.css'

interface PaintProps {
  micro?: boolean 
  array: ArrayClass
  addColor: (lineNume: number, colNum: number) => void
  loadItem?: (id: number) => void
  id?: number
}

export default function Paint(props: PaintProps) {
  function renderPixel(colNum:number, lineNume:number) {
    return (
      <div
        key={`${colNum}`}
        onClick={!props.micro ? () => props.addColor(lineNume, colNum) : () => props.loadItem(props.id)}
        className={`${styles.pixel} ${props.micro ? '': styles.pixelMicro } `}
        style={{backgroundColor: props.array?.getPosition(lineNume, colNum),}}></div>
    )
  }

  function renderCols(lineNume:number) {
    return props.array.getLine(lineNume).map((_ ,colNum) => {
      return (
        <div key={colNum} className={styles.cols}>
          {renderPixel(colNum, lineNume)}
        </div>
      ) 
    })
  }

  function renderLines() {
    return props.array?.getAll().map((_ ,i) => {
      return <div key={i} className={styles.lines}>
        {renderCols(i)}
      </div>
    })
  }

  return (
  <>
    {renderLines()}
  </>
  )
}
