import { useState, useEffect } from 'react'
import ArrayClass from '../model/ArrayClass'


export default function Home() {

  const [array, setArray] = useState<ArrayClass>(null)
  const [cor, setCor] = useState<string>('')

  useEffect(() => {
    setArray(new ArrayClass([
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    ]))
  }, [])

  function addColor(lineNume, colNum) {
     setArray(array?.updatePosition(lineNume, colNum, cor))
  }

  function renderPixel(colNum, lineNume) {
    console.log( array?.getPosition(lineNume, colNum), '...')
    return (
      <div
        key={`${colNum}`}
        onClick={() => addColor(lineNume, colNum)}
        className="flex-grow h-full cursor-pointer border border-gray-200"
        style={{backgroundColor: array?.getPosition(lineNume, colNum),}}></div>
    )
  }

  
  function renderCols(lineNume) {
    return array.getLine(lineNume).map((_ ,colNum) => {
      return <div key={colNum} className="h-full w-full">
        {renderPixel(colNum, lineNume)}
        </div>
    })
  }

  function selecionarCor(corAtual: string) {
    setCor(corAtual)
  }
  
  function renderLines() {
    return array?.getAll().map((_ ,i) => {
      return <div key={i} className="h-full w-full flex">
        {renderCols(i)}
      </div>
    })
  }

  return (
    <div className="flex flex-col h-screen ">
      {renderLines()}

      <div className="absolute bottom-0 left-0 h-10 w-full ">
        <div className="flex items-center justify-center h-full ">
            <div onClick={() => selecionarCor("")} style={{backgroundColor: '#fefefe'}} className="p-1 mx-1 w-8 h-8 border border-gray-200 cursor-pointer"></div>
            <div onClick={() => selecionarCor("#10B981")} style={{backgroundColor: '#10B981'}} className="p-1 mx-1 w-8 h-8 border border-gray-200 cursor-pointer"></div>
            <div onClick={() => selecionarCor("#8B5CF6")} style={{backgroundColor: '#8B5CF6'}} className="p-1 mx-1 w-8 h-8 border border-gray-200 cursor-pointer"></div>
            <div onClick={() => selecionarCor("#EF4444")} style={{backgroundColor: '#EF4444'}} className="p-1 mx-1 w-8 h-8 border border-gray-200 cursor-pointer"></div>
            <div onClick={() => selecionarCor("#3B82F6")} style={{backgroundColor: '#3B82F6'}} className="p-1 mx-1 w-8 h-8 border border-gray-200 cursor-pointer"></div>
            <div onClick={() => selecionarCor("#6B7280")} style={{backgroundColor: '#6B7280'}} className="p-1 mx-1 w-8 h-8 border border-gray-200 cursor-pointer"></div>
        </div>
      </div>
    </div>
  )
}
