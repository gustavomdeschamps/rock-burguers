import { useRef, useState, type KeyboardEvent } from "react";

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

function groupItems(items: MenuItem[]) {
  const groups = new Map<string, MenuItem[]>();

  items.forEach((item) => {
    const key = item.grupo ?? "";
    groups.set(key, [...(groups.get(key) ?? []), item]);
  });

  return [...groups.entries()];
}

export function Cardapio() {
  const [activeId, setActiveId] = useState(MENU[0]?.id ?? "lanches");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeMenu = MENU.find((menu) => menu.id === activeId) ?? MENU[0];

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % MENU.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + MENU.length) % MENU.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = MENU.length - 1;
    if (nextIndex === null) return;

    event.preventDefault();
    setActiveId(MENU[nextIndex]?.id ?? activeId);
    tabRefs.current[nextIndex]?.focus();
  };

  if (!activeMenu) return null;

  return (
    <section className="menu-section" id="cardapio" aria-labelledby="menu-title">
      <header className="menu-section__header" data-reveal>
        <div>
          <h2 id="menu-title">Cardápio da casa</h2>
        </div>
        <p className="menu-section__note">
          Preços informados pela casa. Confirme disponibilidade no pedido.
        </p>
      </header>

      <div className="menu-tabs" role="tablist" aria-label="Categorias do cardápio" data-reveal>
        {MENU.map((menu, index) => (
          <button
            key={menu.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            id={`tab-${menu.id}`}
            type="button"
            role="tab"
            aria-selected={menu.id === activeMenu.id}
            aria-controls={`panel-${menu.id}`}
            tabIndex={menu.id === activeMenu.id ? 0 : -1}
            onClick={() => setActiveId(menu.id)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {menu.label}
          </button>
        ))}
      </div>

      <div
        className="menu-panel"
        key={activeMenu.id}
        id={`panel-${activeMenu.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeMenu.id}`}
      >
        <div className="menu-panel__heading">
          <h3>{activeMenu.label}</h3>
          <p>{activeMenu.observacao}</p>
          {activeMenu.inteiraMeia ? <small>Preço inteira · preço meia</small> : null}
        </div>
        <div className="menu-groups">
          {groupItems(activeMenu.itens).map(([group, items]) => (
            <section className="menu-group" key={group || activeMenu.id}>
              {group ? <h4>{group}</h4> : null}
              <ul className="menu-list">
                {items.map((item) => (
                  <li className="menu-row" key={`${group}-${item.nome}`}>
                    <span className="menu-row__name">
                      {item.nome}
                      {item.descricao ? <small>{item.descricao}</small> : null}
                    </span>
                    <span className="menu-row__leader" aria-hidden="true" />
                    <Price item={item} showHalf={Boolean(activeMenu.inteiraMeia)} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
