export function Sobre() {
  return (
    <section className="house" id="casa" aria-labelledby="house-title">
      <div className="house__intro" data-reveal>
        <p className="eyebrow">A casa</p>
        <h2 id="house-title">Forno aceso. Mesa de madeira. Rock na parede.</h2>
        <p>
          Na Rua Nicolau Werner, o salão vermelho, a guitarra e os quadros contam a história da
          casa. Tem mesa dentro e deck externo com vista.
        </p>
      </div>

      <figure className="house__oven photo-frame" data-reveal>
        <img
          src="/img/ambiente/forno-lenha-aceso.webp"
          alt="Forno a lenha preto aceso, com chamas e brasas visíveis"
          width="1280"
          height="1600"
          loading="lazy"
        />
      </figure>

      <div className="house__service" data-reveal>
        <p className="house__year" aria-hidden="true">
          2009
        </p>
        <p>Escolha como pedir:</p>
        <ul>
          <li>Consumo no local</li>
          <li>Retirada no balcão</li>
          <li>Delivery</li>
        </ul>
      </div>

      <figure className="house__deck photo-frame" data-reveal>
        <img
          src="/img/ambiente/deck-mesas-madeira-vista.webp"
          alt="Deck externo com mesa e bancos de madeira, vista do bairro e um gato laranja"
          width="1200"
          height="1600"
          loading="lazy"
        />
      </figure>
    </section>
  );
}
