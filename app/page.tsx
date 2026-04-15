"use client";

import { useEffect, useMemo, useState } from "react";
import  Navbar  from "./components/NavBar";

const flavors = [
  {
    name: "Bensin & Hubba Bubba",
    tag: "Fuel Line",
    copy: "Barndommens fart. Voksne konsekvenser.",
    boost: "+240% falsk selvtillit",
    crash: "Flashbacks fra gokartbane",
  },
  {
    name: "Bringebærkorrosjon",
    tag: "Fuel Line",
    copy: "Friskt først. Problematisk etterpå.",
    boost: "Skarpt fokus i 6 sekunder",
    crash: "Tannhelse som livsstil",
  },
  {
    name: "Våt Hund",
    tag: "Fuel Line — Limited",
    copy: "Nostalgi, fukt og ubehag i samme slurk.",
    boost: "Kraftig minneaktivering",
    crash: "Sosial usikkerhet",
  },
  {
    name: "Passiv Aggresjon",
    tag: "Fuel Line",
    copy: "Smaker lite. Sitter lenge.",
    boost: "Forbedret blikkontakt",
    crash: "Langvarig irritasjon i relasjoner",
  },
];

const games = [
  {
    title: "Urban Isbjørn-bryting",
    copy: "Nærkontakt med uforutsigbar motstand. Krever varme, tempo og en svak forståelse av risiko.",
    foot: "Ikke testet i kontrollerte omgivelser.",
  },
  {
    title: "Basehopp med paraply",
    copy: "Fallbasert disiplin for utøvere med selvtillit og tilgang på vær.",
    foot: "Aerodynamikk under vurdering.",
  },
  {
    title: "Vindtunnelstrikk",
    copy: "Presisjonsarbeid under ekstrem belastning. Én feil maske, og genseren bestemmer.",
    foot: "Ikke anerkjent som idrett. Enda.",
  },
  {
    title: "Dypvannsklatring",
    copy: "Vertikal bevegelse fra bunnen og opp. Ingen oksygen. Ingen god plan.",
    foot: "Sikt og utfall kan variere.",
  },
];

const news = [
  {
    label: "Breaking",
    title: "Kenneth (24) tok en beslutning i høy hastighet",
    copy: "Etter to bokser OD-X og et kort øyeblikk med ufortjent selvtillit, gjennomførte Kenneth noe som senere ble omtalt som 'unngåelig'.",
  },
  {
    label: "Internal",
    title: "Våt Hund-batch skaper reaksjoner",
    copy: "Flere brukere rapporterer minner, fuktige assosiasjoner og en følelse av at noe ikke burde vært åpnet igjen.",
  },
  {
    label: "Medical",
    title: "Tanker oppleves nå i stereo",
    copy: "OD-X avviser direkte sammenheng, men erkjenner at utviklingen er vanskelig å ignorere.",
  },
];

const ticker = [
  "Nå i Chemical Overdrive™",
  "Offisielt drivstoff for dårlige valg",
  "Dømmekraft selges separat",
  "Ytelse først. Konsekvenser senere.",
  "Klinisk unødvendig siden 2026",
  "Anbefalt av ingen",
];

const reactions = [
  {
    title: "Chemical Overdrive activated.",
    text: "Du kjenner deg raskere enn vurderingsevnen din.",
    stat1: "Overtent",
    stat2: "Frakoblet",
    stat3: "Umiddelbart",
    badge: "Bad idea",
  },
  {
    title: "Det var unødvendig.",
    text: "Selvtilliten øker. Beslutningsgrunnlaget gjør det ikke.",
    stat1: "Kunstig høy",
    stat2: "Lav",
    stat3: "På vei",
    badge: "Too late",
  },
  {
    title: "Du burde ha ventet.",
    text: "Dette føles kraftfullt nå. Det vil bli et tema senere.",
    stat1: "Kortvarig",
    stat2: "Solgt separat",
    stat3: "Betydelig",
    badge: "Over limit",
  },
  {
    title: "OD-X har tatt over.",
    text: "Pulsen jobber. Resten improviserer.",
    stat1: "Ustabil",
    stat2: "Utilgjengelig",
    stat3: "Aktivt",
    badge: "No brakes",
  },
];

export default function HomePage() {
  const [phase, setPhase] = useState<"idle" | "surge" | "result">("idle");
  const [reactionIndex, setReactionIndex] = useState(0);

  const activeReaction = useMemo(
    () => reactions[reactionIndex],
    [reactionIndex]
  );

  useEffect(() => {
    if (phase === "idle") return;

    const toResult = window.setTimeout(() => {
      setPhase("result");
    }, 1100);

    const toIdle = window.setTimeout(() => {
      setPhase("idle");
    }, 5200);

    return () => {
      window.clearTimeout(toResult);
      window.clearTimeout(toIdle);
    };
  }, [phase, reactionIndex]);

  function handleEnterOverdrive() {
    if (phase !== "idle") return;
    setReactionIndex(Math.floor(Math.random() * reactions.length));
    setPhase("surge");
  }

  const heroKicker =
    phase === "idle" ? "Aggressivt unødvendig energi" : "Chemical Overdrive pågår";

  const heroSubtitle =
    phase === "idle" ? "Chemical Overdrive." : activeReaction.title;

  const heroCopy =
  phase === "idle"
    ? "OD-X øker tempo, svekker ettertanke og gjør dårlige ideer overraskende gjennomførbare."
    : activeReaction.text;

  return (
    <main className={phase === "surge" ? "hero-live hero-live--surge" : phase === "result" ? "hero-live hero-live--result" : ""}>
      <div className="noise" />

      <style jsx global>{`
        .hero-live .hero-side,
        .hero-live .hero-title,
        .hero-live .hero-subtitle,
        .hero-live .kicker {
          transition:
            transform 0.2s ease,
            filter 0.2s ease,
            color 0.2s ease,
            opacity 0.2s ease;
        }

        .hero-live--surge .hero-side {
          animation: odxShake 0.32s linear 3;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 0 0 1px rgba(214, 255, 47, 0.16),
            0 28px 100px rgba(214, 255, 47, 0.12);
        }

        .hero-live--surge .hero-title {
          transform: scale(1.01) skewX(-2deg);
        }

        .hero-live--surge .hero-subtitle {
          color: var(--acid);
        }

        .hero-live--result .hero-side {
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 0 0 1px rgba(255, 94, 0, 0.2),
            0 28px 90px rgba(255, 94, 0, 0.12);
        }

        .hero-side-overlay {
          position: absolute;
          inset: 0;
          z-index: 6;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 22px;
          background:
            linear-gradient(
              180deg,
              rgba(6, 6, 6, 0.02) 0%,
              rgba(6, 6, 6, 0.18) 35%,
              rgba(6, 6, 6, 0.9) 100%
            );
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.22s ease;
        }

        .hero-live--surge .hero-side-overlay,
        .hero-live--result .hero-side-overlay {
          opacity: 1;
        }

        .hero-side-overlay-box {
          max-width: 300px;
          padding: 16px 16px 14px;
          border-radius: 20px;
          background: rgba(0, 0, 0, 0.62);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
        }

        .hero-side-overlay-label {
          font-size: 0.66rem;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--acid);
        }

        .hero-side-overlay-title {
          margin-top: 8px;
          font-size: 1.15rem;
          line-height: 1.02;
          font-weight: 900;
          letter-spacing: -0.04em;
          text-transform: uppercase;
        }

        .hero-side-overlay-copy {
          margin-top: 8px;
          font-size: 0.9rem;
          line-height: 1.5;
          color: rgba(245, 243, 234, 0.82);
        }

        @keyframes odxShake {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          20% {
            transform: translate(-3px, 1px) rotate(-0.5deg);
          }
          40% {
            transform: translate(4px, -2px) rotate(0.5deg);
          }
          60% {
            transform: translate(-4px, 2px) rotate(-0.4deg);
          }
          80% {
            transform: translate(3px, -1px) rotate(0.35deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
      `}</style>

      <Navbar />

      <section className="hero">
        <div className="grid-bg" />
        <div className="container hero-inner">
          <div>
            <div className="kicker">{heroKicker}</div>

            <h1 className="hero-title">OD-X</h1>

            <p className="hero-subtitle">{heroSubtitle}</p>

            <p className="hero-copy">{heroCopy}</p>

            <div className="hero-actions">
              <button className="btn-primary" onClick={handleEnterOverdrive}>
                {phase === "idle"
                  ? "Gå i overdrive"
                  : phase === "surge"
                  ? "Pågår..."
                  : "Gjør det igjen"}
              </button>

              <a href="#apply" className="btn-secondary">
                Ta en dårlig beslutning
              </a>
            </div>
          </div>

          <div className="hero-side" aria-hidden="true">
            <div className="can-badge">
              {phase === "idle" ? "Over limit" : activeReaction.badge}
            </div>

            <div className="can-wrap">
              <div className="can">
                <div className="can-stripe" />
                <div className="can-logo">X</div>
                <div className="can-copy">
                  OD-X
                  <br />
                  Chemical Overdrive
                </div>
              </div>
            </div>

            <div className="hero-side-overlay">
              <div className="hero-side-overlay-box">
                <div className="hero-side-overlay-label">
                  {phase === "surge" ? "Absorberer" : "Ettervirkning"}
                </div>
                <div className="hero-side-overlay-title">
                  {phase === "surge"
                    ? "Chemical Overdrive aktiveres"
                    : activeReaction.title}
                </div>
                <div className="hero-side-overlay-copy">
                  {phase === "surge"
                    ? "Kortvarig kontroll. Langvarig optimisme."
                    : activeReaction.text}
                </div>
              </div>
            </div>

            <div className="side-stats">
              <div className="stat">
                <div className="stat-label">Focus</div>
                <div className="stat-value">
                  {phase === "idle" ? "Kortvarig" : activeReaction.stat1}
                </div>
              </div>
              <div className="stat">
                <div className="stat-label">Judgement</div>
                <div className="stat-value">
                  {phase === "idle" ? "Frakoblet" : activeReaction.stat2}
                </div>
              </div>
              <div className="stat">
                <div className="stat-label">Aftermath</div>
                <div className="stat-value">
                  {phase === "idle" ? "Uavklart" : activeReaction.stat3}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee">
        <div className="marquee-track">
          {[...ticker, ...ticker].map((item, i) => (
            <div key={i} className="marquee-item">
              <strong>OD-X</strong> — {item}
            </div>
          ))}
        </div>
      </section>

      <section id="flavors" className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">Fuel Line</div>
              <h2 className="section-title">Drivstoff for dårlige valg</h2>
            </div>

            <p className="section-copy">
              Fire varianter. Ingen av dem nødvendige. Alle bidrar.
            </p>
          </div>

          <div className="flavor-grid">
            {flavors.map((f) => (
              <article key={f.name} className="card">
                <div className="card-tag">{f.tag}</div>
                <h3 className="card-title">{f.name}</h3>
                <p className="card-subtitle">{f.copy}</p>

                <div className="data-list">
                  <div className="data-row">
                    <div className="data-label">Boost</div>
                    <div className="data-value">{f.boost}</div>
                  </div>
                  <div className="data-row">
                    <div className="data-label">Aftermath</div>
                    <div className="data-value">{f.crash}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="games" className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">OD-X Invitational</div>
              <h2 className="section-title">Konsekvensidrett</h2>
            </div>

            <p className="section-copy">
              Prestasjon måles ikke i resultat. Bare i gjennomføring.
            </p>
          </div>

          <div className="games-grid">
            {games.map((g) => (
              <article key={g.title} className="card">
                <div className="card-tag">Event</div>
                <h3 className="game-title">{g.title}</h3>
                <p className="game-copy">{g.copy}</p>
                <div className="game-foot">{g.foot}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">News</div>
              <h2 className="section-title">Pågående hendelser</h2>
            </div>

            <p className="section-copy">
              Ting skjer. Ikke alt burde gjort det.
            </p>
          </div>

          <div className="news-grid">
            {news.map((n) => (
              <article key={n.title} className="card news-card">
                <div className="news-label">{n.label}</div>
                <h3 className="news-title">{n.title}</h3>
                <p className="news-copy">{n.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-grid">
              <div>
                <div className="section-kicker">Athlete Intake</div>
                <h2 className="cta-title">Søk til tross for advarsler</h2>

                <p className="cta-copy">
                  OD-X søker utøvere med tempo, vilje og begrenset ettertanke.
                  Erfaring er valgfritt. Besluttsomhet er ikke.
                </p>

                <div className="hero-actions">
                  <button className="btn-primary">Send søknad</button>
                  <button className="btn-secondary">
                    Ignorer konsekvenser
                  </button>
                </div>
              </div>

              <div className="cta-list">
                <div className="cta-list-item">Tar beslutninger raskt</div>
                <div className="cta-list-item">Har gjort det før</div>
                <div className="cta-list-item">
                  Kommer til å gjøre det igjen
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-mark">OD-X — Chemical Overdrive</div>
          <div className="footer-copy">
            Effekter kan variere. Konsekvenser gjør det ikke.
          </div>
        </div>
      </footer>
    </main>
  );
}