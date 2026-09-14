import { CONTATO } from "../../data/rock-burguers";

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-order"
      href={CONTATO.whatsappLink}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Pedir pelo WhatsApp"
    >
      <span aria-hidden="true">WA</span>
      <strong>Pedir</strong>
    </a>
  );
}
