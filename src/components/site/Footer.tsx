import { CONTATO, NAV_LINKS } from "../../data/rock-burguers";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <Logo />
        <p>Hambúrgueres, torradas e porções em Blumenau desde 2009.</p>
      </div>

      <nav className="site-footer__nav" aria-label="Navegação do rodapé">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="site-footer__contact">
        <a href={CONTATO.telefoneHref}>{CONTATO.telefone}</a>
        <a href={CONTATO.whatsappLink} target="_blank" rel="noreferrer noopener">
          WhatsApp {CONTATO.whatsapp}
        </a>
        <a href={CONTATO.instagram} target="_blank" rel="noreferrer noopener">
          {CONTATO.instagramLabel}
        </a>
      </div>

      <p className="site-footer__legal">
        © {new Date().getFullYear()} Rock Burguer&apos;s. Todos os direitos reservados.
      </p>
    </footer>
  );
}
