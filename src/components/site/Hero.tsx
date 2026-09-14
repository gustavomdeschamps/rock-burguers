import { useRef, type PointerEvent } from "react";

import { CONTATO } from "../../data/rock-burguers";

export function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    sceneRef.current?.style.setProperty("--scene-x", `${x * 10}deg`);
    sceneRef.current?.style.setProperty("--scene-y", `${y * -8}deg`);
  };

  const resetScene = () => {
    sceneRef.current?.style.setProperty("--scene-x", "0deg");
    sceneRef.current?.style.setProperty("--scene-y", "0deg");
  };

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__backdrop">
        <img
          src="/img/ambiente/salao-parede-vermelha-guitarra.webp"
          alt="Salão do Rock Burguer's com mesas de madeira, parede vermelha, guitarra e quadros"
          width="1440"
          height="1800"
          fetchPriority="high"
        />
      </div>
      <div className="hero__shade" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__badge">Tradição desde 2009</p>
          <h1 id="hero-title">
            O rock que
            <span>você come.</span>
          </h1>
          <p className="hero__lead">
            Hambúrgueres, torradas e porções em Blumenau. No salão, para retirar ou no delivery.
          </p>
          <div className="hero__actions">
            <a
              className="button"
              href={CONTATO.whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
            >
              Peça no WhatsApp
            </a>
            <a className="button button--gold" href="#cardapio">
              Ver cardápio
            </a>
          </div>
          <div className="hero__proof" aria-label="Avaliação no Google">
            <span className="hero__stars" aria-hidden="true">
              ★★★★★
            </span>
            <strong>{CONTATO.googleNota}</strong>
            <span>
              no Google
              <small>{CONTATO.googleAvaliacoes}</small>
            </span>
          </div>
        </div>

        <div
          className="hero__visual"
          ref={sceneRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetScene}
        >
          <div className="hero__record" aria-hidden="true" />
          <figure className="hero__food">
            <img
              src="/img/lanches/hamburguer-camadas-bacon.webp"
              alt="Hambúrguer alto em camadas com carne, queijo, presunto, bacon e cebola"
              width="1440"
              height="1800"
            />
          </figure>
          <p className="hero__stamp">Blumenau · terça a sábado · 18h–23h</p>
        </div>
      </div>
    </section>
  );
}
