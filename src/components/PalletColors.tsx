import Color from "./Color"

interface PalletColorsProps {
  selecionarCor: (color) => void
}

export default function PalletColors(props: PalletColorsProps) {
  let colors = [
    "",
    "#10B981",
    "#8B5CF6",
    "#EF4444",
    "#3B82F6",
    "#6B7280"
  ]

  return (
    <div className="absolute bottom-0 left-0 h-10 w-full ">
      <div className="flex items-center justify-center h-full ">
        {colors?.map(color => {
          return <Color key={color} selecionarCor={props.selecionarCor} color={color}/>
        })}
      </div>
    </div>
  )
}
