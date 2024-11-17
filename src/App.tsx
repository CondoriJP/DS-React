import { useState } from "react"
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { PrimerComponent } from "./components/PrimerComponent/PrimerComponent"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { FormComponent } from "./components/FormComponent/FormComponent"
import { AppProduct } from "./components/AppComponent/AppComponent"

export const App = () => {

  const [enableCounter, setEnableCounter] = useState(false)

  return (
    <>
      /*<PrimerComponent IPtext="hola" IPcolor="blue" IPfontSize={12} />
      {enableCounter && <ComponentCounter />}
      <button onClick={() => setEnableCounter(!enableCounter)}>
        {enableCounter ? 'Ocultar' : 'Mostrar'} contador
      </button>
      <ComponentUseEffect />
      <FormComponent />
      */
      <AppProduct />
    </>
  )
}

