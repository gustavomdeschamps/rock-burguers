import { useEffect, useRef } from "react";

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

type PhotoGroupProps = {
  copyId: string;
  hidden?: boolean;
};

function PhotoGroup({ copyId, hidden = false }: PhotoGroupProps) {
  return (
    <div className="gallery__group" aria-hidden={hidden || undefined}>
      {PHOTOS.map((photo) => (
        <figure className="gallery__item" key={`${copyId}-${photo.src}`}>
          <img
            src={photo.src}
            alt={hidden ? "" : photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
          />
          <figcaption>{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Galeria() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      viewport.scrollLeft = 0;
      return;
    }

    const firstGroup = viewport.querySelector<HTMLElement>(".gallery__group");
    let groupWidth = 0;
    let animationFrame = 0;
    let previousTime = 0;

    const measure = () => {
      const nextWidth = firstGroup?.offsetWidth ?? 0;

      if (!nextWidth || nextWidth === groupWidth) return;

      if (groupWidth === 0) {
        viewport.scrollLeft = nextWidth;
      } else {
        const positionInsideMiddleGroup = (viewport.scrollLeft - groupWidth) / groupWidth;
        viewport.scrollLeft = nextWidth * (1 + positionInsideMiddleGroup);
      }

      groupWidth = nextWidth;
    };

    const keepInsideMiddleCopy = () => {
      if (!groupWidth) return;

      while (viewport.scrollLeft < groupWidth * 0.5) {
        viewport.scrollLeft += groupWidth;
      }

      while (viewport.scrollLeft >= groupWidth * 1.5) {
        viewport.scrollLeft -= groupWidth;
      }
    };

    const move = (time: number) => {
      if (previousTime === 0) previousTime = time;

      const elapsed = Math.min(time - previousTime, 64);
      previousTime = time;

      if (!isInteractingRef.current) {
        viewport.scrollLeft += elapsed * 0.055;
        keepInsideMiddleCopy();
      }

      animationFrame = window.requestAnimationFrame(move);
    };

    const resizeObserver = new ResizeObserver(measure);
    if (firstGroup) resizeObserver.observe(firstGroup);
    measure();
    animationFrame = window.requestAnimationFrame(move);

    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const pause = () => {
    isInteractingRef.current = true;
  };

  const resume = () => {
    isInteractingRef.current = false;
  };

  return (
    <section className="gallery" id="fotos" aria-labelledby="gallery-title">
      <header className="gallery__header" data-reveal>
        <div>
          <h2 id="gallery-title">Da nossa cozinha</h2>
          <p>Da torrada às porções para dividir: tudo preparado e fotografado dentro da casa.</p>
        </div>
      </header>

      <div
        ref={viewportRef}
        className="gallery__viewport"
        role="region"
        aria-label="Carrossel automático de fotos. Deslize para navegar."
        tabIndex={0}
        onTouchStart={pause}
        onTouchEnd={resume}
        onTouchCancel={resume}
        onFocus={pause}
        onBlur={resume}
      >
        <div className="gallery__rail">
          <PhotoGroup copyId="before" hidden />
          <PhotoGroup copyId="main" />
          <PhotoGroup copyId="after" hidden />
        </div>
      </div>
    </section>
  );
}
