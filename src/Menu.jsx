import { useState } from "react";
import { MENU, PHOTO_POSITION, PRICES } from "./menuData";
import "./menu.css";

// "Greek Cake (Grçka)" -> "greek-cake-grcka"
const slug = (name) =>
  name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Looks for /public/images/<slug>.jpg. If the file is missing, shows the icon instead.
function Photo({ name, src, icon }) {
  const [failed, setFailed] = useState(false);
  if (failed) return icon;
  return (
    <img
      src={src || `/images/${slug(name)}.jpg`}
      alt={name}
      loading="lazy"
      style={{ objectPosition: PHOTO_POSITION[name] || "center 50%" }}
      onError={() => setFailed(true)}
    />
  );
}

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

            {c.groups.map((g, gi) => (
              <div className="pm-group" key={g.name || gi}>
                {g.name && (
                  <div className="pm-group-head">
                    <h3>{g.name}</h3>
                    {g.sub && <p>{g.sub}</p>}
                  </div>
                )}
                <div className="pm-grid">
                  {g.items.map(([name, desc, img, options]) => (
                    <article className="pm-item" key={name}>
                      {PRICES[name] && (
                        <div className="pm-price" aria-label={`${PRICES[name]} denars`}>
                          <b>{PRICES[name]}</b>
                          <small>ден.</small>
                        </div>
                      )}
                      <div className="pm-photo">
                        <Photo name={name} src={img} icon={g.icon} />
                      </div>
                      <div className="pm-body">
                        <h4>{name}</h4>
                        <p>{desc}</p>
                        {options && (
                          <div className="pm-opts" aria-label={`${name} flavors`}>
                            {options.map((o) => (
                              <span key={o}>{o}</span>
                            ))}
                          </div>
                        )}
                        <span className="pm-chip">{g.tag}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
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