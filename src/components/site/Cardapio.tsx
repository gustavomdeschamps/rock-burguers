import { useState } from "react";

import { MENU, type MenuItem } from "../../data/rock-burguers";

function Price({ item, showHalf }: { item: MenuItem; showHalf: boolean }) {
  if (!item.preco) {
    return <span className="menu-row__price menu-row__price--ask">Consulte</span>;
  }

  return (
    <span className="menu-row__price">
      R$ {item.preco}
      {showHalf && item.meia ? <small>meia R$ {item.meia}</small> : null}
    </span>
  );
}

export function Cardapio() {
  const [activeId, setActiveId] = useState(MENU[0]?.id ?? "lanches");
  const activeMenu = MENU.find((menu) => menu.id === activeId) ?? MENU[0];

  if (!activeMenu) return null;

  return (
    <section className="menu-section" id="cardapio" aria-labelledby="menu-title">
      <header className="menu-section__header" data-reveal>
        <div>
          <p className="eyebrow">Cardápio</p>
          <h2 id="menu-title">Escolha na lista. A chapa resolve.</h2>
        </div>
        <p className="menu-section__note">
          Preços informados pela casa. Confirme disponibilidade no pedido.
        </p>
      </header>

      <div className="menu-tabs" role="tablist" aria-label="Categorias do cardápio" data-reveal>
        {MENU.map((menu) => (
          <button
            key={menu.id}
            id={`tab-${menu.id}`}
            type="button"
            role="tab"
            aria-selected={menu.id === activeMenu.id}
            aria-controls={`panel-${menu.id}`}
            tabIndex={menu.id === activeMenu.id ? 0 : -1}
            onClick={() => setActiveId(menu.id)}
          >
            {menu.label}
          </button>
        ))}
      </div>

      <div
        className="menu-panel"
        data-reveal
        id={`panel-${activeMenu.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeMenu.id}`}
      >
        <div className="menu-panel__heading">
          <h3>{activeMenu.label}</h3>
          <p>{activeMenu.observacao}</p>
          {activeMenu.inteiraMeia ? <small>Preço inteira · preço meia</small> : null}
        </div>
        <ol className="menu-list">
          {activeMenu.itens.map((item, index) => (
            <li className="menu-row" key={item.nome}>
              <span className="menu-row__number">{String(index + 1).padStart(2, "0")}</span>
              <span className="menu-row__name">{item.nome}</span>
              <span className="menu-row__leader" aria-hidden="true" />
              <Price item={item} showHalf={Boolean(activeMenu.inteiraMeia)} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
