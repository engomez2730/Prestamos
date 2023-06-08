import React from "react";
import { Col, Row, Statistic, Card } from "antd";
import CardComponent from "./CardComponent";

interface StatsProps {
  usuariosActivos: Number;
}

const styleObjectRed: React.CSSProperties = {
  background: "linear-gradient(to left, #ed213a, #93291e)",
  /* Additional vendor prefixes and gradient definitions if necessary */
};
const styleObjectGreen: React.CSSProperties = {
  background: "linear-gradient(to right, #11998e, #38ef7d)",
};
const styleObjectBlue: React.CSSProperties = {
  background:
    "linear-gradient(to left, #00b4db, #0083b0)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
};

const App: React.FC<StatsProps> = ({ usuariosActivos }) => (
  <Row gutter={16}>
    <Col span={8}>
      <CardComponent
        styleObject={styleObjectBlue}
        usuariosActivos={300}
        label="Clientes registrados"
      />
    </Col>
    <Col span={8}>
      <CardComponent
        styleObject={styleObjectGreen}
        usuariosActivos={100}
        label="Clientes Al dia"
      />
    </Col>
    <Col span={8}>
      <CardComponent
        styleObject={styleObjectRed}
        usuariosActivos={200}
        label="Clientes retrasados"
      />
    </Col>
  </Row>
);

export default App;
