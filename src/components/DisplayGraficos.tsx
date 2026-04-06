type displayCaloriasProps = {
    calories: number
    text: string
}

export default function DisplayGraficos({calories, text} : displayCaloriasProps) {
  return (
      <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span className="font-black text-7xl text-orange"> {calories}</span>
            {text}
        </p>
  )
}
