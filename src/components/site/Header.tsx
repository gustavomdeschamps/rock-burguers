import { useEffect, useState } from "react";

import { CONTATO, NAV_LINKS } from "../../data/rock-burguers";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#inicio" aria-label="Rock Burguer's — início">
          <Logo />
        </a>

        <nav className="site-header__nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="button button--small site-header__order"
          href={CONTATO.whatsappLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          Pedir no WhatsApp
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="mobile-nav" id="menu-mobile" hidden={!open}>
        <nav aria-label="Navegação mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="button"
            href={CONTATO.whatsappLink}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setOpen(false)}
          >
            Pedir no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
