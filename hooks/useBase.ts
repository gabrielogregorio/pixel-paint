import { useEffect, useState } from "react"
import ArrayClass from "../src/model/ArrayClass"

export function useBase() {
  const [array, setArray] = useState<ArrayClass>(null)
  const [arrayLocalStorage, setArrayLocalStorage] = useState<ArrayClass[]>(null)
  const [cor, setCor] = useState<string>('')
  
  useEffect(() => {
    limparTudo()
  }, [])
  
  function limparTudo() {
    let arrayLocal = []
    for(let i = 0; i < 16; i++) {
      let arrayTemp: string[] = []
      for(let x = 0; x < 24; x++) {
        arrayTemp.push('')
      }
      arrayLocal.push(arrayTemp)
    }
    setArray(new ArrayClass(arrayLocal))
  }
  
  useEffect(() => {
    loadLocalStorage()
  }, [])
  
  function loadLocalStorage() {
    let array2 = JSON.parse(localStorage.getItem('paint'))
    let objs = []
    array2?.map(item => {
      objs.push(new ArrayClass(item))
    })
    setArrayLocalStorage(objs)
  }
  // [[["","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","#10B981","#7bc043","","","","","","","","","","","",""],["","","","","","","","","","#10B981","#7bc043","#ff6f69","#E91E63","","","","","","","","","","",""],["","","","","","","","","#10B981","#7bc043","#ff6f69","#E91E63","#E91E63","#E91E63","","","","","","","","","",""],["","","","","","","","","#10B981","#7bc043","#ff6f69","#E91E63","#E91E63","#E91E63","#E91E63","","","","","","","","",""],["","","","","","","","","#10B981","#7bc043","#ff6f69","#E91E63","#000000","#E91E63","#E91E63","#E91E63","","","","","","","",""],["","","","","","","","","#10B981","#7bc043","#ff6f69","#E91E63","#E91E63","#E91E63","#E91E63","#E91E63","#E91E63","","","","","","",""],["","","","","","","","","#10B981","#7bc043","#ff6f69","#E91E63","#E91E63","#E91E63","#000000","#E91E63","#E91E63","#E91E63","","","","","",""],["","","","","","","","","#10B981","#7bc043","#ff6f69","#E91E63","#E91E63","#E91E63","#E91E63","#E91E63","#E91E63","#E91E63","#E91E63","","","","",""],["","","","","","","","","#10B981","#7bc043","#ff6f69","#E91E63","#E91E63","#E91E63","#E91E63","#E91E63","#000000","#E91E63","#E91E63","#E91E63","","","",""],["","","","","","","","","","#10B981","#7bc043","#E91E63","#E91E63","#E91E63","#E91E63","#E91E63","#E91E63","#E91E63","#E91E63","#E91E63","#E91E63","","",""],["","","","","","","","","","#10B981","#10B981","#7bc043","#ff6f69","#ff6f69","#E91E63","#E91E63","#E91E63","#E91E63","#ff6f69","#ff6f69","#7bc043","","",""],["","","","","","","","","","","#10B981","#10B981","#7bc043","#ff6f69","#ff6f69","#ff6f69","#ff6f69","#ff6f69","#ff6f69","#7bc043","#10B981","","",""],["","","","","","","","","","","","#10B981","#10B981","#7bc043","#7bc043","#7bc043","#7bc043","#7bc043","#7bc043","#10B981","","","",""],["","","","","","","","","","","","","","#10B981","#10B981","#10B981","#10B981","#10B981","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","",""]]]
  function addColor(lineNume:number, colNum:number) {
    setArray(array?.updatePosition(lineNume, colNum, cor))
  }
  
  function saveImages() {
    let array2 = JSON.parse(localStorage.getItem('paint')) ?? []
    array2.push(array.getAll())
    localStorage.setItem('paint', JSON.stringify(array2))
    loadLocalStorage()
  }
  
  function deleteItem(id:number) {
    let array2 = JSON.parse(localStorage.getItem('paint')) ?? []
    array2.splice(id, 1)
    localStorage.setItem('paint', JSON.stringify(array2))
    loadLocalStorage()
  }
  
  function loadItem(id:number) {
    let array2 = JSON.parse(localStorage.getItem('paint')) ?? []
    setArray( new ArrayClass(array2[id]))
  }
  
  function selecionarCor(corAtual: string) {
    setCor(corAtual)
  }

  return {
    limparTudo,
    array,
    arrayLocalStorage,
    addColor,
    saveImages,
    deleteItem,
    loadItem,
    selecionarCor
  }
}

