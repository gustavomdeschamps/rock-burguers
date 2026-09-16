import { useState } from "react";

const PHOTOS = [
  {
    src: "/img/lanches/torrada-frango-molho.webp",
    alt: "Torrada aberta com cubos de frango e molho cremoso, servida em prato branco",
    caption: "Torrada recheada",
    width: 1280,
    height: 1600,
  },
  {
    src: "/img/porcoes/fritas-cheddar-bacon.webp",
    alt: "Porção de fritas cobertas com cheddar e bacon em uma travessa branca",
    caption: "Fritas com cheddar e bacon",
    width: 1280,
    height: 1600,
  },
  {
    src: "/img/lanches/lanche-cestinha-salada.webp",
    alt: "Lanche em pão fino com alface, tomate, cebola e milho, servido em cestinha plástica",
    caption: "Lanche na cestinha",
    width: 1280,
    height: 1600,
  },
  {
    src: "/img/porcoes/frango-passarinho-fritas.webp",
    alt: "Porção de frango à passarinho com fritas e folhas de alface em prato branco",
    caption: "Frango à passarinho com fritas",
    width: 1280,
    height: 1600,
  },
  {
    src: "/img/bebidas/milkshake-chocolate-chantilly.webp",
    alt: "Milkshake com calda de chocolate, chantilly, granulado colorido e cereja",
    caption: "Milkshake",
    width: 1600,
    height: 1600,
  },
  {
    src: "/img/porcoes/carne-acebolada.webp",
    alt: "Porção de carne em cubos com cebola, servida sobre fatias de pão",
    caption: "Carne acebolada",
    width: 1280,
    height: 1600,
  },
  {
    src: "/img/lanches/hot-dog-tomate-cebola.webp",
    alt: "Hot dog com salsicha, tomate e cebola, servido em cestinha plástica",
    caption: "Hot dog",
    width: 1280,
    height: 1600,
  },
  {
    src: "/img/porcoes/polenta-frita-molho.webp",
    alt: "Palitos de polenta frita em tigela branca, acompanhados de molho verde",
    caption: "Polenta frita",
    width: 1200,
    height: 1600,
  },
  {
    src: "/img/bebidas/drink-vermelho-limao.webp",
    alt: "Drink vermelho com gelo e uma rodela de limão em taça alta",
    caption: "Drink com limão",
    width: 1280,
    height: 1600,
  },
] as const;

export function Galeria() {
  const [isPaused, setIsPaused] = useState(false);

  const photoGroup = (duplicate = false) => (
    <div className="gallery__group" aria-hidden={duplicate || undefined}>
      {PHOTOS.map((photo) => (
        <figure className="gallery__item" key={`${duplicate ? "copy-" : ""}${photo.src}`}>
          <img
            src={photo.src}
            alt={duplicate ? "" : photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
          />
          <figcaption>{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  );

  return (
    <section className="gallery" id="fotos" aria-labelledby="gallery-title">
      <header className="gallery__header" data-reveal>
        <div>
          <h2 id="gallery-title">Da nossa cozinha</h2>
          <p>Da torrada às porções para dividir: tudo preparado e fotografado dentro da casa.</p>
        </div>

        <div className="gallery__motion">
          <button
            type="button"
            aria-pressed={isPaused}
            onClick={() => setIsPaused((paused) => !paused)}
          >
            {isPaused ? "Continuar" : "Pausar"}
          </button>
        </div>
      </header>

      <div className="gallery__viewport" role="region" aria-label="Fotos da cozinha">
        <div className={`gallery__rail${isPaused ? " is-paused" : ""}`}>
          {photoGroup()}
          {photoGroup(true)}
        </div>
      </div>
    </section>
  );
}
