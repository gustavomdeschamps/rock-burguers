export function Sobre() {
  return (
    <section className="house" id="casa" aria-labelledby="house-title">
      <div className="house__intro" data-reveal>
        <h2 id="house-title">Uma hamburgueria com história.</h2>
        <p>
          A casa recebe Blumenau com chapa quente, forno aceso, música nas paredes e atendimento do
          jeito que restaurante de bairro tem que ser. O salão guarda a personalidade do Rock em
          cada mesa, quadro e guitarra.
        </p>
        <div className="house__details" aria-label="Destaques da casa">
          <p>
            <strong>Na cozinha</strong>
            <span>Hambúrgueres, torradas e porções no mesmo cardápio.</span>
          </p>
          <p>
            <strong>Na casa</strong>
            <span>Salão interno e deck externo no Garcia.</span>
          </p>
        </div>
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

      <article className="mascot" data-reveal aria-labelledby="mascot-title">
        <figure className="mascot__photo photo-frame">
          <img
            src="/img/ambiente/deck-mesas-madeira-vista.webp"
            alt="Gato laranja entre os bancos de madeira do deck do Rock Burguer's"
            width="1200"
            height="1600"
            loading="lazy"
          />
        </figure>
        <div className="mascot__copy">
          <p className="mascot__label">Mascote da casa</p>
          <h3 id="mascot-title">O astro do deck.</h3>
          <p>
            Entre uma mesa e outra, o gato laranja observa o movimento e já virou parte do cenário
            do Rock Burguer&apos;s — presença conhecida de quem escolhe sentar no deck.
          </p>
        </div>
      </article>
    </section>
  );
}
