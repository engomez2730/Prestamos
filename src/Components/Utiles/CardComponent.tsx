import React from "react";
import { Col, Row, Statistic, Card } from "antd";

interface CardProps {
  styleObject: React.CSSProperties;
  usuariosActivos: number;
  label: string;
}

const CardComponent: React.FC<CardProps> = ({
  styleObject,
  usuariosActivos,
  label,
}) => {
  return (
    <Card style={styleObject} size="small">
      <Statistic
        title={
          <div style={{ fontSize: "25px", color: "#fff", fontWeight: 600 }}>
            {label}
          </div>
        }
        value={`${usuariosActivos}`}
        valueStyle={{ fontSize: "40px", color: "#fff" }}
      />
    </Card>
  );
};

export default CardComponent;
