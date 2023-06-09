import React from "react";
import Stats from "../Utiles/Stats";

const opcionesStats = [
  {
    usuariosActivos: 400,
    background: "greenGradiant",
    label: "Clientes Registrados",
  },
  {
    usuariosActivos: 200,
    background: "blueGradiant",
    label: "Clientes Al dia",
  },
  {
    usuariosActivos: 200,
    background: "redGradiant",
    label: "Clientes retrasadps",
  },
];

const Clientes: React.FC = () => {
  return <div>{<Stats opcionesStats={opcionesStats} />}</div>;
};

export default Clientes;
