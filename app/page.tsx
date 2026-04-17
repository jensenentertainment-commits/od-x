"use client";

import { useMemo, useState } from "react";
import Navbar from "./components/NavBar";

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
    copy: "Etter to bokser STING.X og et kort øyeblikk med ufortjent selvtillit, gjennomførte Kenneth noe som senere ble omtalt som 'unngåelig'.",
  },
  {
    label: "Internal",
    title: "Våt Hund-batch skaper reaksjoner",
    copy: "Flere brukere rapporterer minner, fuktige assosiasjoner og en følelse av at noe ikke burde vært åpnet igjen.",
  },
  {
    label: "Medical",
    title: "Tanker oppleves nå i stereo",
    copy: "STING.X avviser direkte sammenheng, men erkjenner at utviklingen er vanskelig å ignorere.",
  },
];

const ticker = [
  "STING.X — Ytelse først. Konsekvenser senere.",
  "STING.X — Klinisk unødvendig siden 2026",
  "STING.X — Resultater kan forekomme",
  "STING.X — Chemical Overdrive™",
  "STING.X — Dømmekraft selges separat",
  "STING.X — Offisielt drivstoff for dårlige valg",
];

const reactions = [
  {
    kicker: "Chemical Overdrive aktivert",
    title: "Ettertanke deaktivert.",
    text: "Handling er nå prioritert over vurdering.",
  },
  {
    kicker: "Systemtilstand oppdatert",
    title: "Du gjorde det.",
    text: "Dette føltes riktig i et kort øyeblikk.",
  },
  {
    kicker: "Intern registrering",
    title: "Konsekvenser på vei.",
    text: "Tempoet øker. Begrunnelsen henger etter.",
  },
  {
    kicker: "Performance mode",
    title: "Resultater kan forekomme.",
    text: "Etterspill behandles fortløpende og uten sympati.",
  },
];

export default function HomePage() {
  const [reactionIndex, setReactionIndex] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  const activeReaction = useMemo(
    () => reactions[reactionIndex],
    [reactionIndex]
  );

  function handleHeroAction() {
    setReactionIndex((prev) => (prev + 1) % reactions.length);
    setIsShaking(true);

    window.setTimeout(() => {
      setIsShaking(false);
    }, 450);
  }

  return (
    <main>
      <div className="noise" />
      <Navbar />

      <section className={`hero hero--split ${isShaking ? "hero--shaking" : ""}`}>
        <div className="grid-bg" />

        <div className="container hero-split">
          <div className="hero-content">
            <div className="kicker">{activeReaction.kicker}</div>

            <h1 className="hero-title">STING.X</h1>

            <p className="hero-subtitle">Chemical Overdrive.</p>

            <div className="hero-copy hero-copy--tight">
              <p>{activeReaction.title}</p>
              <p>{activeReaction.text}</p>
            </div>

            <div className="hero-actions">
              <button className="btn-primary" onClick={handleHeroAction}>
                Gå i overdrive
              </button>
              <a href="#news" className="btn-secondary">
                Se konsekvenser
              </a>
            </div>
          </div>

          <div className="hero-media">
            <img src="/hero.jpg" alt="STING.X hero" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="brand highlights">
        <div className="marquee-track">
          {[...ticker, ...ticker].map((item, index) => (
            <div key={`${item}-${index}`} className="marquee-item">
              {item}
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
              <div className="section-kicker">Invitational</div>
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
                <div className="section-kicker">Intake</div>
                <h2 className="cta-title">Søk til tross for advarsler</h2>

                <p className="cta-copy">
                  STING.X søker utøvere med tempo, vilje og begrenset
                  ettertanke. Erfaring er valgfritt. Besluttsomhet er ikke.
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
          <div className="footer-mark">STING.X — Chemical Overdrive</div>
          <div className="footer-copy">
            Effekter kan variere. Konsekvenser gjør det ikke.
          </div>
        </div>
      </footer>
    </main>
  );
}