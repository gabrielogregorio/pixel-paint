import PalletColors from '../components/PalletColors'
import Paint from '../components/Paint'
import styles from '../styles/index.core.module.css'
import ButtonSimple from '../components/ButtonSimple'


import { useBase } from '../../hooks/useBase'
export default function Home() {
 const  {
  limparTudo,
    array,
    arrayLocalStorage,
    addColor,
    saveImages, deleteItem,
    loadItem, selecionarCor } = useBase()
  

  function renderMicro() {
    return arrayLocalStorage?.map((arr, i) => {
      return (
        <div key={i} className={`${styles.salveItensCard}`}>
          
          <button
            className={`text-red-500  px-1 bg-gray-100 text-xs rounded-full `}
            onClick={() => deleteItem(i)}>X</button>

          <div className={`${styles.salveItensCardItem}`}>
            <Paint
              micro
              addColor={addColor}
              array={arr}
              id={i}
              loadItem={loadItem}/>
          </div>
        </div>
      )
    }) 
  }
  
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.gridPrincipal}`}>
        <div className={`${styles.salveItens}`}>
            {renderMicro()}
        </div>

        <div className={`${styles.quadroPrincipal}`}>
          <div className={`${styles.pintura}`}>
              <Paint addColor={addColor} array={array}/>
          </div>
          <div className={`${styles.botoes}`}>
            <ButtonSimple action={saveImages} text="Salvar Desenho" bgColor="#5555ff"/>
            <ButtonSimple action={limparTudo} text="Limpar tudo" bgColor="#ff5555"/>
          </div>
        </div>

        <div className="flex">
        </div>
      </div>

      <PalletColors selecionarCor={selecionarCor} />
    </div>
  )
}
