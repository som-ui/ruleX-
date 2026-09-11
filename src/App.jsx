import { ArrowDownRight, Copy, Disc3, Gamepad2, ShieldCheck } from 'lucide-react'
import './App.css'

const SERVER_IP = 'rulexmc.mcsh.io'

function App() {
  const copyServerIp = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP)
      alert('Server IP copied')
    } catch {
      window.prompt('Copy the RuleX server IP:', SERVER_IP)
    }
  }

  return (
    <main className="site-shell">
      <nav className="navbar">
        <a className="brand" href="#top" aria-label="RuleX home">
          <span className="brand-mark">R</span>
          <span className="brand-name">RULE<span>X</span></span>
        </a>

        <div className="nav-links">
          <a href="#modes">Modes</a>
          <a href="#features">Features</a>
          <a href="#ranks">Ranks</a>
        </div>

        <button className="nav-join" onClick={copyServerIp}>
          Copy IP <Copy size={15} />
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />

        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            MINECRAFT SURVIVAL NETWORK
          </p>

          <h1>
            BUILD YOUR
            <br />
            <em>EMPIRE.</em>
          </h1>

          <p className="hero-description">
            A competitive Minecraft network built around progression,
            economy, PvP, and the people you choose to fight beside.
          </p>

          <div className="hero-actions">
            <button className="primary-button" onClick={copyServerIp}>
              JOIN RULEX <ArrowDownRight size={18} />
            </button>

            <a className="secondary-button" href="#modes">
              EXPLORE MODES
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="server-detail">
            <span className="detail-label">JAVA EDITION</span>
            <strong>{SERVER_IP}</strong>
          </div>

          <div className="server-detail">
            <span className="detail-label">AVAILABLE MODES</span>
            <strong>Survival <span>/</span> LifeSteal</strong>
          </div>

          <div className="scroll-hint">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDownRight size={17} />
          </div>
        </div>
      </section>

      <section className="intro-section" id="modes">
        <p className="section-kicker">TWO WAYS TO PLAY</p>
        <h2>Choose your world.</h2>
        <p>
          Build carefully in Survival or risk everything in LifeSteal.
          Every decision changes what comes next.
        </p>

        <div className="mode-grid">
          <article className="mode-card survival-card">
            <div className="mode-card-top">
              <span>01 / SURVIVAL</span>
              <Gamepad2 size={20} />
            </div>
            <h3>Make your own economy.</h3>
            <p>
              Bounties, custom shops, progression, daily rewards, and a
              world designed for long-term play.
            </p>
            <a href="#features">Discover Survival <ArrowDownRight size={16} /></a>
          </article>

          <article className="mode-card lifesteal-card">
            <div className="mode-card-top">
              <span>02 / LIFESTEAL</span>
              <ShieldCheck size={20} />
            </div>
            <h3>Every heart has a price.</h3>
            <p>
              Form alliances, protect your hearts, and fight for control
              in a world where defeat actually matters.
            </p>
            <a href="#features">Discover LifeSteal <ArrowDownRight size={16} /></a>
          </article>
        </div>
      </section>

      <section className="feature-section" id="features">
        <div className="feature-intro">
          <p className="section-kicker">BUILT FOR PROGRESSION</p>
          <h2>More than<br />just survival.</h2>
          <p className="feature-summary">
            RuleX is built around the systems that make every session
            feel meaningful—from your first starter kit to your biggest
            rivalry.
          </p>
        </div>

        <div className="feature-list">
          <article className="feature-item">
            <span className="feature-number">01</span>
            <div>
              <h3>Build your economy.</h3>
              <p>
                Custom shops, player trading, daily rewards, kits,
                and an economy designed around long-term progress.
              </p>
            </div>
          </article>

          <article className="feature-item">
            <span className="feature-number">02</span>
            <div>
              <h3>Compete for control.</h3>
              <p>
                Bounties, PvP, live leaderboards, custom enchantments,
                and rivalries that give every decision weight.
              </p>
            </div>
          </article>

          <article className="feature-item">
            <span className="feature-number">03</span>
            <div>
              <h3>Keep discovering.</h3>
              <p>
                Skills, upgradable spawners, custom crates, RTP,
                chat games, trivia, and server events.
              </p>
            </div>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div className="brand">
          <span className="brand-mark">R</span>
          <span className="brand-name">RULE<span>X</span></span>
        </div>
        <p>Rule the world. Build your legacy.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  )
}

export default App
