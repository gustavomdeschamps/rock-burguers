import { useCallback, useEffect, useState } from "react";

import { Cardapio } from "./components/site/Cardapio";
import { FloatingWhatsApp } from "./components/site/FloatingWhatsApp";
import { Footer } from "./components/site/Footer";
import { Galeria } from "./components/site/Galeria";
import { Header } from "./components/site/Header";
import { Hero } from "./components/site/Hero";
import { KidsCombo } from "./components/site/KidsCombo";
import { Localizacao } from "./components/site/Localizacao";
import { PageIntro } from "./components/site/PageIntro";
import { Sobre } from "./components/site/Sobre";

export function App() {
  const [ready, setReady] = useState(false);
  const finishIntro = useCallback(() => setReady(true), []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`site ${ready ? "is-ready" : ""}`}>
      <PageIntro onDone={finishIntro} />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Sobre />
        <KidsCombo />
        <Cardapio />
        <Galeria />
        <Localizacao />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
