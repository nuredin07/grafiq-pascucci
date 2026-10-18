import { useEffect, useState } from "react";
import { MENU, PHOTO_POSITION, PRICES } from "./menuData";
import { LANGS, UI, SECTIONS, GROUPS, ITEMS, detectLang } from "./i18n";
import "./menu.css";

// "Greek Cake (Grçka)" -> "greek-cake-grcka"
const slug = (name) =>
  name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Looks for /public/images/<slug>.jpg. If the file is missing, shows the icon instead.
function Photo({ name, label, src, icon }) {
  const [failed, setFailed] = useState(false);
  if (failed) return icon;
  return (
    <img
      src={src || `/images/${slug(name)}.jpg`}
      alt={label}
      loading="lazy"
      style={{ objectPosition: PHOTO_POSITION[name] || "center 50%" }}
      onError={() => setFailed(true)}
    />
  );
}

function readLang() {
  try {
    const saved = localStorage.getItem("pm-lang");
    if (LANGS.some((l) => l.code === saved)) return saved;
  } catch (e) {}
  return detectLang();
}

export default function Menu() {
  const [active, setActive] = useState(MENU[0].id);
  const [lang, setLang] = useState(readLang);
  const ui = UI[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("pm-lang", lang);
    } catch (e) {}
  }, [lang]);

  // Text helpers: English comes from menuData.js, other languages from i18n.js
  const section = (c) => (lang === "en" ? c : { ...c, ...SECTIONS[lang][c.id] });
  const group = (g) => (lang === "en" ? g : { ...g, ...(GROUPS[lang][g.name] || {}) });
  const item = (name, desc) => (lang === "en" ? [name, desc] : ITEMS[lang][name] || [name, desc]);

  return (
    <div className="pm">
      <div className="pm-stripe" />
      <header className="pm-header">
        <div className="pm-lang" role="group" aria-label={ui.language}>
          {LANGS.map((l) => (
            <button key={l.code} type="button" aria-pressed={lang === l.code} title={l.name} onClick={() => setLang(l.code)}>
              {l.label}
            </button>
          ))}
        </div>

        <div className="pm-logo">
          <img src="/images/logo.png" alt="Pascucci logo" onError={(e) => (e.currentTarget.parentElement.style.display = "none")} />
        </div>
        <div className="pm-est">{ui.est}</div>
        <h1>Pasc<span>u</span>cci</h1>
        <p className="pm-tag">{ui.tagline}</p>
      </header>

      <nav className="pm-nav">
        <div className="pm-tabs" role="tablist" aria-label={ui.menuCategories}>
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
              {section(c).tab}
            </button>
          ))}
        </div>
      </nav>

      <main className="pm-main">
        {MENU.map((c) => (
          <section key={c.id} id={c.id} role="tabpanel" aria-labelledby={`t-${c.id}`} hidden={active !== c.id}>
            <div className="pm-cat-head">
              <h2>{section(c).title}</h2>
              <p>{section(c).sub}</p>
              <i />
            </div>

            {c.groups.map((g0, gi) => {
              const g = group(g0);
              return (
                <div className="pm-group" key={g0.name || gi}>
                  {g0.name && (
                    <div className="pm-group-head">
                      <h3>{g.name}</h3>
                      {g.sub && <p>{g.sub}</p>}
                    </div>
                  )}
                  <div className="pm-grid">
                    {g0.items.map(([name, desc, img, options]) => {
                      const [tName, tDesc] = item(name, desc);
                      return (
                        <article className="pm-item" key={name}>
                          {PRICES[name] && (
                            <div className="pm-price" aria-label={`${PRICES[name]} ${ui.denars}`}>
                              <b>{PRICES[name]}</b>
                              <small>{ui.currency}</small>
                            </div>
                          )}
                          <div className="pm-photo">
                            <Photo name={name} label={tName} src={img} icon={g0.icon} />
                          </div>
                          <div className="pm-body">
                            <h4>{tName}</h4>
                            <p>{tDesc}</p>
                            {options && (
                              <div className="pm-opts" aria-label={`${tName}, ${ui.flavors}`}>
                                {options.map((o) => (
                                  <span key={o}>{ui.flavorNames[o] || o}</span>
                                ))}
                              </div>
                            )}
                            <span className="pm-chip">{ui.tags[g0.tag] || g0.tag}</span>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </section>
        ))}
      </main>

      <footer className="pm-footer">
        <b>PASCUCCI</b>
        <br />
        {ui.thanks}
        <div className="pm-social">
          <a href="https://www.instagram.com/caffepascuccishop.mk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://www.facebook.com/caffe.pascucci" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M13.5 21v-8h2.7l.5-3.2h-3.2V7.9c0-.9.4-1.6 1.7-1.6h1.6V3.4c-.3 0-1.3-.1-2.3-.1-2.4 0-4 1.5-4 4.1v2.4H7.8V13h2.7v8z" />
            </svg>
          </a>
        </div>
      </footer>
      <div className="pm-stripe" />
    </div>
  );
}