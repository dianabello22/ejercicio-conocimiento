function Hero() {
  return (
    <section className="hero">
      <h1 style={{ fontSize:'4rem', lineHeight: '1.1' }}>
        ESTILO URBANO <br />
        <span style={{ color: '#FFA500' }}>REDEFINIDO</span>
      </h1>

      <p style={{ fontSize: '1.5rem' }}>
        Descubre nuestra colección exclusiva de ropa urbana minimalista
      </p>

      <div style={{ marginTop: '2rem', display: 'inline-block', padding: '1rem 2rem' }}>
        <button style={{ backgroundColor: '#FFA500', color: '#000', border: 'none', padding: '1rem 2rem', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
          EXPLORAR COLECCIÓN
        </button>
      </div>
    </section>
  );
}

export default Hero;