import React from "react";
import { Statistic, Card } from "antd";
import "./Card.css";
interface CardProps {
  styleObject: string;
  usuariosActivos: number;
  label: string;
}

const CardComponent: React.FC<CardProps> = ({
  styleObject,
  usuariosActivos,
  label,
}) => {
  return (
    <Card size="small" className={`card ${styleObject}`}>
      <Statistic
        title={<div className="title">{label}</div>}
        value={usuariosActivos}
        valueStyle={{ fontSize: "#30px", color: "#fff" }}
      />
    </Card>
  );
};

export default CardComponent;
