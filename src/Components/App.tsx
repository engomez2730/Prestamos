import React from "react";
import HeaderPage from "./Pages/Header";
import { Layout } from "antd";
import Sidebar from "./Pages/SideBar";
import Clientes from "./Clientes/Clientes";
import Home from "./Clientes/Home";
import Prestamos from "./Prestamos/Prestamos";
import { Routes, Route } from "react-router-dom";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <div>
      <Layout>
        <HeaderPage />
        <Layout>
          <Sidebar />
          <Content
            style={{
              padding: 50,
              margin: 0,
              background: "#fff",
              minHeight: "100vh",
            }}
          >
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/clientes" element={<Clientes />}></Route>
              <Route path="/prestamos" element={<Prestamos />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
