function Productos() {
  const productos = [
    {
      id: 1,
      nombre: "Camiseta Básica Urban",
      descripcion: "Algodón 100% orgánico",
      precio: 29,
      imagen: "👤"
    },
    {
      id: 2,
      nombre: "Jeans Slim Fit",
      descripcion: "Denim premium stretch",
      precio: 89,
      imagen: "👖"
    },
    {
      id: 3,
      nombre: "Sudadera Oversize",
      descripcion: "Algodón French Terry",
      precio: 65,
      imagen: "🎚️"
    },
    {
      id: 4,
      nombre: "Chaqueta Bomber",
      descripcion: "Nylon resistente al agua",
      precio: 120,
      imagen: "🛒"
    },
    {
      id: 5,
      nombre: "Gorra Snapback",
      descripcion: "Bordado premium",
      precio: 35,
      imagen: "🌐"
    },
    {
      id: 6,
      nombre: "Zapatillas Urban",
      descripcion: "Suela de goma antideslizante",
      precio: 95,
      imagen: "⏰"
    }
  ];

  return (
    <div className="productos-page">
      <h1>NUESTRA COLECCIÓN</h1>
      <br />
      <p className="productos-subtitle">Estilo urbano para cada ocasión</p>
      
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <div className="producto-imagen">{producto.imagen}</div>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <div className="producto-footer">
              <span className="precio">€{producto.precio}</span>
              <button className="btn-añadir">AÑADIR</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;