import React from "react";
import { Col, Row } from "antd";
import CardComponent from "./CardComponent";

interface OpcionesStatsItem {
  usuariosActivos: number;
  background: string;
  label: string;
}
interface StatsProps {
  opcionesStats: OpcionesStatsItem[];
}

const App: React.FC<StatsProps> = ({ opcionesStats }) => (
  <Row gutter={16}>
    {opcionesStats.map((opciones) => {
      return (
        <Col span={8}>
          <CardComponent
            styleObject={opciones.background}
            usuariosActivos={opciones.usuariosActivos}
            label={opciones.label}
          />
        </Col>
      );
    })}
  </Row>
);

export default App;
