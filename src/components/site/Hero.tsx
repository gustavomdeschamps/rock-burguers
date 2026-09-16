export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__since">Blumenau · desde 2009</p>
          <h1 id="hero-title">
            O rock que
            <span>você come.</span>
          </h1>
          <p className="hero__lead">
            Chapa quente, forno aceso e mesas cheias. Há mais de uma década, o Rock Burguer&apos;s
            serve hambúrgueres, torradas e porções em Blumenau — no salão, para retirar ou no
            delivery.
          </p>
          <p className="hero__hours">Terça a sábado · 18h às 23h</p>
        </div>

        <figure className="hero__visual">
          <img
            src="/img/ambiente/salao-parede-vermelha-guitarra.webp"
            alt="Salão do Rock Burguer's com mesas de madeira, parede vermelha, guitarra e quadros"
            width="1440"
            height="1800"
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  );
}
