import { ArrowDownRight, Copy, Disc3, Gamepad2, ShieldCheck } from 'lucide-react'
import './App.css'

const SERVER_IP = 'rulexmc.mcsh.io'
const DISCORD_URL = 'https://discord.gg/Jr3ugXAnh'

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
  <div className="nav-inner">
    <a className="brand" href="#top" aria-label="RuleX home">
      <span className="brand-mark">R</span>

      <span className="brand-name">
        RULE<span>X</span>
      </span>
    </a>

    <div className="nav-links">
      <a href="#modes">
        <span>01</span>
        Modes
      </a>

      <a href="#features">
        <span>02</span>
        Features
      </a>

      <a href="#ranks">
        <span>03</span>
        Ranks
      </a>
    </div>

    <button className="nav-join" onClick={copyServerIp}>
      <span>Copy IP</span>
      <Copy size={15} />
    </button>
  </div>
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
            <a href="#features">Explore Survival Features <ArrowDownRight size={16} /></a>
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
            <a href="#features">Explore LifeSteal Features <ArrowDownRight size={16} /></a>
          </article>
        </div>
      </section>

      <section className="feature-section" id="features">
        <div className="feature-intro">
          <p className="section-kicker">THE RULEX EXPERIENCE</p>
          <h2>Every session<br />has a purpose.</h2>
          <p className="feature-summary">
            Whether you are building wealth, chasing a bounty, or fighting
            for control, RuleX gives you more reasons to keep progressing.
          </p>
        </div>

        <div className="feature-list">
          <article className="feature-item">
            <span className="feature-number">01</span>
            <div>
              <h3>Build your economy.</h3>
              <p>
                Custom shops, player trading, kits, daily rewards, and
                progression systems that make every resource matter.
              </p>
              <span className="feature-tag">ECONOMY / PROGRESSION</span>
            </div>
          </article>

          <article className="feature-item">
            <span className="feature-number">02</span>
            <div>
              <h3>Compete for control.</h3>
              <p>
                Bounties, PvP, leaderboards, custom enchantments, and
                rivalries that turn ordinary encounters into real stakes.
              </p>
              <span className="feature-tag">PVP / COMPETITION</span>
            </div>
          </article>

          <article className="feature-item">
            <span className="feature-number">03</span>
            <div>
              <h3>Keep discovering.</h3>
              <p>
                Farlands, CyberLevels, skills, upgradable spawners, custom
                crates, RTP, trivia, and server events.
              </p>
              <span className="feature-tag">EXPLORATION / EVENTS</span>
            </div>
          </article>
        </div>
      </section>

      <section className="ranks-section" id="ranks">
        <div className="ranks-heading">
          <p className="section-kicker">CHOOSE YOUR ADVANTAGE</p>
          <h2>Rise through<br />the ranks.</h2>
          <p>
            Start small, build your reputation, and unlock more ways to
            shape your journey on RuleX.
          </p>
        </div>

        <div className="rank-grid">
          <article className="rank-card">
            <span className="rank-label">01 / ENTRY</span>
            <h3>Aura</h3>
            <p className="rank-price">$0.99</p>
            <p className="rank-description">
              A first step into the RuleX rank system.
            </p>
            <ul>
              <li>Hat, workbench, and disposal</li>
              <li>Priority queue</li>
              <li>+1 maximum heart</li>
            </ul>
          </article>

          <article className="rank-card rank-card-featured">
            <span className="rank-label">02 / PROGRESSION</span>
            <h3>Onyx</h3>
            <p className="rank-price">$2.99</p>
            <p className="rank-description">
              More utility, more control, more room to progress.
            </p>
            <ul>
              <li>Everything in Aura</li>
              <li>Ender Chest and Feed</li>
              <li>Onyx chat formatting</li>
              <li>+2 maximum hearts</li>
              <li>1 Revive Beacon</li>
            </ul>
          </article>

          <article className="rank-card">
            <span className="rank-label">03 / ELITE</span>
            <h3>Apex</h3>
            <p className="rank-price">$5.99</p>
            <p className="rank-description">
              Built for players ready to push further.
            </p>
            <ul>
              <li>Expanded rank privileges</li>
              <li>Premium utility and progression</li>
              <li>Elite status across the network</li>
            </ul>
          </article>

          <article className="rank-card">
            <span className="rank-label">04 / HIGHEST TIER</span>
            <h3>Ruler</h3>
            <p className="rank-price">$9.99</p>
            <p className="rank-description">
              The highest listed rank for those who want to stand apart.
            </p>
            <ul>
              <li>Top-tier rank identity</li>
              <li>Premium network experience</li>
              <li>Designed for dedicated players</li>
            </ul>
          </article>
        </div>

        <p className="rank-note">
          Rank details and availability may change as the network evolves.
        </p>
      </section>

      <section className="final-cta">
        <div className="final-cta-content">
          <p className="section-kicker">YOUR NEXT CHAPTER</p>
          <h2>Build something<br />worth defending.</h2>
          <p>
            Join the community, choose your path, and start building
            your legacy on RuleX.
          </p>

          <div className="final-cta-actions">
            <button className="primary-button" onClick={copyServerIp}>
              COPY SERVER IP <Copy size={17} />
            </button>

            <a
              className="secondary-button"
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
            >
              JOIN DISCORD <ArrowDownRight size={17} />
            </a>
          </div>

          <div className="final-server-line">
            <span>JAVA EDITION</span>
            <strong>{SERVER_IP}</strong>
          </div>
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
