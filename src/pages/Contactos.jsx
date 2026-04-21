import { useState } from "react";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form); // ✔️ requisito mínimo

    localStorage.setItem("contacto", JSON.stringify(form)); // ✔️ extra

    alert("Mensaje enviado");
  };

  return (
    <div style={{ padding: "100px" }}>
      <h1>Contacto</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="mensaje"
          placeholder="Mensaje"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;