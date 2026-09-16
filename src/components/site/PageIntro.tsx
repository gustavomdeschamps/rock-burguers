import { useCallback, useEffect, useRef, useState, type AnimationEvent } from "react";

const INTRO_SPARKS = Array.from({ length: 12 }, (_, index) => index);

type PageIntroProps = {
  onDone: () => void;
};

export function PageIntro({ onDone }: PageIntroProps) {
  const [visible, setVisible] = useState(true);
  const completed = useRef(false);
  const revealed = useRef(false);

  const revealSite = useCallback(() => {
    if (revealed.current) return;
    revealed.current = true;
    onDone();
  }, [onDone]);

  const complete = useCallback(() => {
    if (completed.current) return;
    completed.current = true;
    revealSite();
    document.body.classList.remove("intro-open");
    setVisible(false);
  }, [revealSite]);

  const handleCurtainOpening = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.animationName === "cinema-open-right") revealSite();
  };

  const handleCurtainOpened = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.animationName === "cinema-open-right") complete();
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      complete();
      return;
    }

    document.body.classList.add("intro-open");
    const timer = window.setTimeout(complete, 4400);
    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("intro-open");
    };
  }, [complete]);

  if (!visible) return null;

  return (
    <div className="cinema-intro" aria-hidden="true">
      <div className="cinema-intro__grain" />
      <span className="cinema-intro__backdrop-word">ROCK</span>
      <span className="cinema-intro__marquee cinema-intro__marquee--top" />
      <span className="cinema-intro__marquee cinema-intro__marquee--bottom" />
      <span className="cinema-intro__spotlight cinema-intro__spotlight--left" />
      <span className="cinema-intro__spotlight cinema-intro__spotlight--right" />
      <span className="cinema-intro__horizon" />
      <span className="cinema-intro__floor" />

      <div className="cinema-intro__pulses">
        <span />
        <span />
      </div>

      <div className="cinema-intro__sparks">
        {INTRO_SPARKS.map((spark) => (
          <span key={spark} />
        ))}
      </div>

      <div className="cinema-intro__panel cinema-intro__panel--left" aria-hidden="true" />
      <div
        className="cinema-intro__panel cinema-intro__panel--right"
        aria-hidden="true"
        onAnimationStart={handleCurtainOpening}
        onAnimationEnd={handleCurtainOpened}
      />

      <div className="cinema-intro__stage" aria-hidden="true">
        <p className="cinema-intro__prelude">Blumenau apresenta</p>
        <div className="cinema-intro__emblem">
          <span className="cinema-intro__ring cinema-intro__ring--outer" />
          <span className="cinema-intro__ring cinema-intro__ring--inner" />
          <img src="/img/marca/logo-rock-burguers-oficial.webp" alt="" width="1100" height="1100" />
        </div>
        <p className="cinema-intro__tagline">O sabor entra em cena.</p>
        <p className="cinema-intro__legacy">Rock Burguer&apos;s · desde 2009</p>
      </div>

      <span className="cinema-intro__finale" />
    </div>
  );
}
