import Color from "./Color"
import styles from '../styles/PalletColors.module.css'

interface PalletColorsProps {
  selecionarCor: (color) => void
}

export default function PalletColors(props: PalletColorsProps) {
  let colors = [
    "",
    "#d4d4d8",
    "#363636",
    "#000000",
    "#EF4444",
    "#ff6f69",
    "#E91E63",
    "#d11141",
    "#4f372d",
    "#f37736",
    "#FF9800",
    "#FF5722",
    "#FFC107",
    "#fed766",
    "#10B981",
    "#7bc043",
    "#96d663",
    "#54b2a9",
    "#051e3e",
    "#005b96",
    "#3B82F6",
    "#03A9F4",
    "#9C27B0",
    "#8B5CF6",
    "#451e3e",
    "#851e3e",
  ]

  return (
    <div className={`${styles.paleta}`}>
      <div className={`${styles.itemsPaleta}`}>
        <div className={`${styles.itemsGridPaleta}`}>
        {colors?.map(color => {
          return <Color key={color} selecionarCor={props.selecionarCor} color={color}/>
        })}
        </div>
      </div>
    </div>
  )
}
