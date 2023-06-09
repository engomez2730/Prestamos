import React from "react";
import Stats from "../Utiles/Stats";

const opcionesStats = [
  {
    usuariosActivos: 600,
    background: "greenGradiant",
    label: "Prestamos Registrados",
  },
  {
    usuariosActivos: 100,
    background: "blueGradiant",
    label: "Prestamos Al dia",
  },
  {
    usuariosActivos: 400,
    background: "redGradiant",
    label: "Prestamos retrasadps",
  },
];

const Clientes: React.FC = () => {
  return (
    <div>
      <div>Prestamos</div>
      <Stats opcionesStats={opcionesStats} />
    </div>
  );
};

export default Clientes;
