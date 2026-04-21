import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="features">
      <FeatureCard
        title="DISEÑO ÚNICO"
        text="Piezas exclusivas con estética urbana y minimalista"
      />
      <FeatureCard
        title="CALIDAD PREMIUM"
        text="Materiales de alta calidad para máxima durabilidad"
      />
      <FeatureCard
        title="ENVÍO RÁPIDO"
        text="Entrega express en 24-48 horas"
      />
    </section>
  );
}

export default Features;
