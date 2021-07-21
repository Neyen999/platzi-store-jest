import React from "react";
import { mount } from "enzyme";
import Footer from "../../components/Footer";

describe("<Footer />", () => {
  test("Render del componente footer", () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  })
})

// Mount es un componente de enzyme que nos ayuda a tomar el render del componente. En el test esperamos que el length de footer sea igual a 1

// Tenemos un error, porque Jest no puede leer los estilos del archivo, para eso creamos un Mock.