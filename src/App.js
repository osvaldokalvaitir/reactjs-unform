import React from "react";
import * as Yup from "yup";
import { Form, Scope, Input } from "@rocketseat/unform";

const initialData = {
  name: "Osvaldo",
  address: {
    street: "Rua São Paulo"
  }
};

const schema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  address: Yup.object().shape({
    number: Yup.string()
      .min(3, "Número precisa 3 dígitos")
      .required("Campo obrigatório")
  })
});

function App() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
      <Input name="name" label="Nome:" />
      <br />

      <Scope path="address">
        <Input name="street" label="Rua:" />
        <br />
        <Input name="number" label="Número:" />
        <br />
      </Scope>

      <button type="submit">Enviar</button>
    </Form>
  );
}

export default App;
