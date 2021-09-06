import ArrayClass from "../model/ArrayClass"


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
        className={`w-full h-full bg-gray-100 ${props.micro ? '': 'border border-gray-200'} cursor-pointer`}
        style={{backgroundColor: props.array?.getPosition(lineNume, colNum),}}></div>
    )
  }

  function renderCols(lineNume:number) {
    return props.array.getLine(lineNume).map((_ ,colNum) => {
      return <div key={colNum} className="w-full h-full">
        {renderPixel(colNum, lineNume)}
        </div>
    })
  }

  function renderLines() {
    return props.array?.getAll().map((_ ,i) => {
      return <div key={i} className="flex w-full h-full">
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
