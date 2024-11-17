import { useEffect, useState } from "react";

export const ComponentUseEffect = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log("listo");
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <p>{state ? "true" : "false"}</p>
      <button onClick={() => setState(!state)}>Cambiar</button>
    </div>
  )
}

