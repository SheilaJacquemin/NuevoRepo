import React from "react";
import Nav from "../components/nav/Nav";
import MenuInicio from "../components/secciones/MenuInicio";
import Banner from "../components/elementos/Banner";
import Footer from "../components/secciones/Footer";

const PaginaPrincipal = () => {
  return (
    <>
      <Nav />
      <MenuInicio />
      <Banner />
      <Footer />
    </>
  );
};

export default PaginaPrincipal;
