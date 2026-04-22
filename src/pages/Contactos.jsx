import { useState } from "react";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    asunto: "",
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
    console.log(form);
    localStorage.setItem("contacto", JSON.stringify(form));
    alert("Mensaje enviado");
  };

  return (
    <div className="contacto-page">
      <h1>CONTACTO</h1>
      <br/>  
      <p className="contacto-subtitle">¿Tienes alguna pregunta? Nos encantaría escucharte</p>

      <div className="contacto-container">
        {/* Información de Contacto */}
        <div className="info-contacto">
          <h2>INFORMACIÓN DE CONTACTO</h2>

          <div className="info-item">
            <div className="info-icon">�️</div>
            <div>
              <h3>DIRECCIÓN</h3>
              <p>Calle Urban Style 123<br />28001 Madrid, España</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📞</div>
            <div>
              <h3>TELÉFONO</h3>
              <p>+34 91 123 45 67</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">✉</div>
            <div>
              <h3>EMAIL</h3>
              <p>info@urbanthreads.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">🕐</div>
            <div>
              <h3>HORARIO</h3>
              <p>Lun - Vie: 9:00 - 18:00<br />Sáb: 10:00 - 14:00</p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="formulario-contacto">
          <h2>ENVÍANOS UN MENSAJE</h2>

          <div className="demo-box">
            Demo: Este es un formulario de demostración. Los mensajes no se enviarán realmente.
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="NOMBRE"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="apellidos"
                  value={form.apellidos}
                  onChange={handleChange}
                  placeholder="APELLIDOS"
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="EMAIL"
              />
            </div>

            <div className="form-group">
              <select name="asunto" value={form.asunto} onChange={handleChange}>
                <option value="">ASUNTO</option>
                <option value="consulta">Consulta General</option>
                <option value="pedido">Sobre un Pedido</option>
                <option value="devolucion">Devolución</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="mensaje"
                value={form.mensaje || ""}
                onChange={handleChange}
                placeholder="MENSAJE"
                rows="5"
              />
            </div>

            <button type="submit" className="btn-enviar">ENVIAR</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;