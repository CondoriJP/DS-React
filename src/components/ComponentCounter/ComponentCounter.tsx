import { useState } from "react"

export const ComponentCounter = () => {
  const [counter, setCounter] = useState<number>(0)

  const incrementarCounter = () => {
    setCounter((prev) => prev + 1)
  }

  const DecrementarCounter = () => {
    if (counter <= 0) return
    setCounter((prev) => prev - 1)
  }

  return (
    <div>
      <h2>Valor de counter: {counter}</h2>
      <button onClick={incrementarCounter}>Incrementar</button>
      <button onClick={DecrementarCounter}>Decrementar</button>
    </div>
  )
}
