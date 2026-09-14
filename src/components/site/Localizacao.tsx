import { CONTATO } from "../../data/rock-burguers";

export function Localizacao() {
  return (
    <section className="visit" id="visite" aria-labelledby="visit-title">
      <div className="visit__map" data-reveal>
        <iframe
          title="Mapa com a localização do Rock Burguer's em Blumenau"
          src={CONTATO.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="visit__copy" data-reveal>
        <p className="eyebrow">Como chegar</p>
        <h2 id="visit-title">A mesa está no Garcia / Valparaíso.</h2>

        <dl className="visit__facts">
          <div>
            <dt>Endereço</dt>
            <dd>
              {CONTATO.ruaNumero}
              <br />
              {CONTATO.bairro} · {CONTATO.cidadeEstado}
              <br />
              CEP {CONTATO.cep}
            </dd>
          </div>
          <div>
            <dt>Horário</dt>
            <dd>{CONTATO.horario}</dd>
          </div>
          <div>
            <dt>Telefone</dt>
            <dd>
              <a href={CONTATO.telefoneHref}>{CONTATO.telefone}</a>
            </dd>
          </div>
          <div>
            <dt>WhatsApp</dt>
            <dd>
              <a href={CONTATO.whatsappLink} target="_blank" rel="noreferrer noopener">
                {CONTATO.whatsapp}
              </a>
            </dd>
          </div>
        </dl>

        <div className="visit__actions">
          <a className="button" href={CONTATO.mapsLink} target="_blank" rel="noreferrer noopener">
            Abrir no Google Maps
          </a>
          <a
            className="text-link text-link--light"
            href={CONTATO.instagram}
            target="_blank"
            rel="noreferrer noopener"
          >
            {CONTATO.instagramLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
