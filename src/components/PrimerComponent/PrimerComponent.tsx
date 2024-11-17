import { FC } from "react";


interface IPropsPrimerComponent {
  IPtext: string;
  IPcolor: string;
  IPfontSize?: number;
}


export const PrimerComponent: FC<IPropsPrimerComponent> = ({ IPtext, IPcolor, IPfontSize }) => {
  return (
    <div style={{ color: IPcolor, fontSize: IPfontSize || 40 }} >
      <h1>{IPtext}</h1>
    </div >
  )
}
