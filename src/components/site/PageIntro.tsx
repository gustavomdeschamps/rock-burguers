import { useCallback, useEffect, useRef, useState } from "react";

type PageIntroProps = {
  onDone: () => void;
};

export function PageIntro({ onDone }: PageIntroProps) {
  const [visible, setVisible] = useState(true);
  const completed = useRef(false);

  const complete = useCallback(() => {
    if (completed.current) return;
    completed.current = true;
    document.body.classList.remove("intro-open");
    setVisible(false);
    onDone();
  }, [onDone]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      complete();
      return;
    }

    document.body.classList.add("intro-open");
    const timer = window.setTimeout(complete, 2800);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") complete();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("intro-open");
    };
  }, [complete]);

  if (!visible) return null;

  return (
    <div
      className="cinema-intro"
      role="dialog"
      aria-modal="true"
      aria-label="Abertura do Rock Burguer's"
    >
      <div className="cinema-intro__panel cinema-intro__panel--left" aria-hidden="true" />
      <div className="cinema-intro__panel cinema-intro__panel--right" aria-hidden="true" />
      <div className="cinema-intro__light" aria-hidden="true" />

      <div className="cinema-intro__brand" aria-hidden="true">
        <span className="cinema-intro__halo" />
        <img src="/img/marca/logo-rock-burguers.webp" alt="" width="384" height="384" />
        <strong>Rock Burguer's</strong>
        <span className="cinema-intro__location">Blumenau · desde 2009</span>
        <span className="cinema-intro__progress" />
      </div>

      <button className="cinema-intro__skip" type="button" onClick={complete}>
        Pular abertura
      </button>
    </div>
  );
}
