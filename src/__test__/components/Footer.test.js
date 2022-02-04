import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import Footer from "../../components/Footer";

describe("<Footer />", () => {
  const footer = mount(<Footer />);
  test("Render del componente footer", () => {
    expect(footer.length).toEqual(1);
  });
  test("Render del titulo", () => {
    expect(footer.find(".Footer-title").text()).toEqual("Platzi Store")
  })
})

describe('Footer Snapshot', () => {
  test('Comprobar la UI del componente Footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  })
})

// Mount es un componente de enzyme que nos ayuda a tomar el render del componente. En el test esperamos que el length de footer sea igual a 1

// Tenemos un error, porque Jest no puede leer los estilos del archivo, para eso creamos un Mock.

