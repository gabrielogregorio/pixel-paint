import { useState, useEffect } from 'react'
import ArrayClass from '../model/ArrayClass'
import PalletColors from '../components/PalletColors'

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

  function saveImages() {
    localStorage.setItem('itemQualquer', array.getAll().toString())
  }

  function renderPixel(colNum, lineNume, micro) {
    console.log( array?.getPosition(lineNume, colNum), '...')
    return (
      <div
        key={`${colNum}`}
        onClick={() => addColor(lineNume, colNum)}
        className={`flex-grow h-full ${micro? '': 'border border-gray-200'} cursor-pointer`}
        style={{backgroundColor: array?.getPosition(lineNume, colNum),}}></div>
    )
  }

  
  function renderCols(lineNume, micro=false) {
    return array.getLine(lineNume).map((_ ,colNum) => {
      return <div key={colNum} className="h-full w-full">
        {renderPixel(colNum, lineNume, micro)}
        </div>
    })
  }

  function selecionarCor(corAtual: string) {
    setCor(corAtual)
  }
  
  function renderLines(micro=false) {
    return array?.getAll().map((_ ,i) => {
      return <div key={i} className="flex flex-grow w-full">
        {renderCols(i, micro)}
      </div>
    })
  }

  /*
        <h3>Salvos</h3>
      <div className="flex">
        <div className="w-24 h-24 flex flex-col border border-red-500">
          {renderLines(true)}
        </div>
      </div>
            <button onClick={saveImages}>Salvar</button>
*/

  return (
    <div className="flex flex-col items-center justify-center h-screen ">

      <div className="w-96 h-96 p-2 flex flex-col border-8 border-red-500">
        {renderLines()}
      </div>
      
      <PalletColors selecionarCor={selecionarCor} />
    </div>
  )
}
