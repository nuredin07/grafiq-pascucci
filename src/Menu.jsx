import { useState } from "react";
import { MENU } from "./menuData";
import "./menu.css";

export default function Menu() {
  const [active, setActive] = useState(MENU[0].id);

  return (
    <div className="pm">
      <div className="pm-stripe" />
      <header className="pm-header">
        <div className="pm-est">Caffè &amp; Dolci</div>
        <h1>Pasc<span>u</span>cci</h1>
        <p className="pm-tag">Where every cup feels like home</p>
      </header>

      <nav className="pm-nav">
        <div className="pm-tabs" role="tablist" aria-label="Menu categories">
          {MENU.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              id={`t-${c.id}`}
              aria-selected={active === c.id}
              aria-controls={c.id}
              onClick={() => {
                setActive(c.id);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {c.tab}
            </button>
          ))}
        </div>
      </nav>

      <main className="pm-main">
        {MENU.map((c) => (
          <section key={c.id} id={c.id} role="tabpanel" aria-labelledby={`t-${c.id}`} hidden={active !== c.id}>
            <div className="pm-cat-head">
              <h2>{c.title}</h2>
              <p>{c.sub}</p>
              <i />
            </div>
            <div className="pm-grid">
              {c.items.map(([name, desc, img]) => (
                <article className="pm-item" key={name}>
                  <div className="pm-photo">
                    {img ? <img src={img} alt={name} loading="lazy" /> : c.icon}
                  </div>
                  <div className="pm-body">
                    <h3>{name}</h3>
                    <p>{desc}</p>
                    <span className="pm-chip">{c.tag}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="pm-footer">
        <b>PASCUCCI</b>
        <br />
        Thank you for sitting with us
      </footer>
      <div className="pm-stripe" />
    </div>
  );
}
