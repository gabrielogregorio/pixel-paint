

interface ColorProps {
  color: string
  selecionarCor: (color) => void
}

export default function Color(props: ColorProps) {
  return (
    <div
      onClick={() => props.selecionarCor(props.color)}
      style={{backgroundColor: props.color}}
      className="p-1 mx-1 w-8 h-8 border border-gray-200 cursor-pointer"></div>
  )
}