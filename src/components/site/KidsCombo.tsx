import { CONTATO } from "../../data/rock-burguers";

const KIDS_WHATSAPP = `${CONTATO.whatsappLink}?text=${encodeURIComponent(
  "Olá! Quero pedir o Combo Kids.",
)}`;

export function KidsCombo() {
  return (
    <section className="kids" id="combo-kids" aria-labelledby="kids-title">
      <div className="kids__inner">
        <figure className="kids__photo" data-reveal>
          <img
            src="/img/lanches/combo-kids-completo.webp"
            alt="Combo Kids completo com embalagem personalizada, mini fritas, bebida e brinquedo surpresa"
            width="1320"
            height="2346"
            loading="lazy"
          />
        </figure>

        <div className="kids__copy" data-reveal>
          <p className="kids__kicker">Novidade no cardápio</p>
          <h2 id="kids-title">Combo Kids</h2>
          <p className="kids__lead">
            Um lanche feito para os pequenos, servido na embalagem personalizada e com brinquedo
            surpresa.
          </p>

          <ul className="kids__includes" aria-label="O que acompanha o Combo Kids">
            <li>Pão brioche, hambúrguer artesanal e queijo</li>
            <li>Mini fritas</li>
            <li>Coca-Cola 200 ml ou suco Kapo 200 ml</li>
            <li>Brinquedo surpresa</li>
          </ul>

          <div className="kids__order">
            <p>
              <span>A partir de</span>
              <strong>R$ 33</strong>
            </p>
            <a
              className="button button--dark"
              href={KIDS_WHATSAPP}
              target="_blank"
              rel="noreferrer noopener"
            >
              Pedir Combo Kids
            </a>
          </div>
          <small className="kids__note">
            O brinquedo varia conforme a disponibilidade da casa.
          </small>
        </div>
      </div>
    </section>
  );
}
