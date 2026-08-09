import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BicepsFlexed,
  BriefcaseBusiness,
  CalendarRange,
  Check,
  ChevronRight,
  Clapperboard,
  Code2,
  Command,
  Cpu,
  Download,
  Gamepad2,
  GitBranch,
  Goal,
  GraduationCap,
  Heart,
  Layers3,
  ContactRound,
  Mail,
  MapPin,
  Mic2,
  Shirt,
  Sparkles,
  TerminalSquare,
  X,
  Zap,
} from "lucide-react";
import {
  type PropsWithChildren,
  type SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const EMAIL = "muaz.shafiq18@gmail.com";
const GITHUB = "https://github.com/MuazShafiq";
const LINKEDIN = "https://www.linkedin.com/in/muaz-shafiq/";

const skills = [
  {
    number: "01",
    title: "Interfaces",
    text: "Responsive product experiences that feel intentional in every state.",
    stack: "React · Next.js · Redux · Tailwind",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Systems",
    text: "APIs, integrations, data flows, and the glue that keeps products reliable.",
    stack: "Node.js · Express · Laravel · Redis",
    icon: Cpu,
  },
  {
    number: "03",
    title: "Intelligence",
    text: "Useful AI features grounded in real workflows—not AI for its own sake.",
    stack: "Python · LLMs · Scikit-learn · Llama",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "Delivery",
    text: "From first commit to production, with testing and operability built in.",
    stack: "Vercel · Vite · Cypress",
    icon: Zap,
  },
];

const experience = [
  {
    period: "2024 — NOW",
    company: "SubscriptionFlow",
    role: "Software Engineer",
    note: "YC-backed subscription management platform",
    points: [
      "Shipping end-to-end features across React, Next.js, Laravel, and AI surfaces.",
      "Modernized complex subscription workflows through a reusable Next.js frontend architecture.",
      "Improved payment recovery, email delivery, analytics, integrations, and test coverage.",
    ],
    current: true,
  },
  {
    period: "JUL — AUG 2023",
    company: "OneByte",
    role: "Web Development Intern",
    note: "Product engineering studio",
    points: [
      "Translated Figma systems into responsive React and TypeScript experiences.",
      "Built with Tailwind, Redux Toolkit, Vite, and Webflow.",
    ],
  },
  {
    period: "JUN — AUG 2023",
    company: "Finera",
    role: "Software Development Intern",
    note: "Logistics technology",
    points: [
      "Migrated a logistics workflow from Java to Flutter with routing and inventory modules.",
      "Improved feature responsiveness by roughly 15% through real-time API integrations.",
    ],
  },
];

function Reveal({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.visible = "true";
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function BrandMark() {
  return (
    <a className="brand-mark" href="#top" aria-label="Muaz Shafiq, back to top">
      <span>MS</span>
      <i />
    </a>
  );
}

function LahoreTime() {
  const format = () =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Karachi",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
  const [time, setTime] = useState(format);

  useEffect(() => {
    const timer = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return <time suppressHydrationWarning>{time} PKT</time>;
}

function MiniFaask() {
  return (
    <div className="mini-ui faask-ui" aria-hidden="true">
      <div className="faask-topbar">
        <strong>faask<span>.</span></strong>
        <small>92% MATCH</small>
      </div>
      <div className="faask-deck">
        <i className="faask-card-shadow shadow-two" />
        <i className="faask-card-shadow shadow-one" />
        <div className="faask-product-card">
          <div className="faask-garment">
            <span>FAASK</span>
            <Shirt size={78} strokeWidth={1.2} />
          </div>
          <div className="faask-product-copy">
            <small>COMMON ROOM</small>
            <strong>Sage Campus Shirt</strong>
            <b>PKR 3,850</b>
            <em><Sparkles size={10} /> Matches your campus style</em>
          </div>
        </div>
      </div>
      <div className="faask-swipe-actions">
        <span><X size={16} /></span>
        <span className="faask-heart"><Heart size={18} fill="currentColor" /></span>
        <span><Sparkles size={15} /></span>
      </div>
    </div>
  );
}

function MiniKoro() {
  return (
    <div className="mini-ui koro-ui" aria-hidden="true">
      <div className="mini-sidebar">
        <div className="mini-brand"><Sparkles size={12} /> koro</div>
        <span className="mini-nav active" />
        <span className="mini-nav" />
        <span className="mini-nav short" />
      </div>
      <div className="koro-main">
        <div className="mini-topbar">
          <span>Physics / Kinematics</span>
          <b>AI TUTOR</b>
        </div>
        <div className="lesson-orb"><Mic2 size={27} /></div>
        <p>How does velocity change over time?</p>
        <div className="waveform">
          {[12, 22, 32, 19, 38, 27, 15, 33, 25, 12, 29, 17, 35, 20, 11].map((height, index) => (
            <i key={index} style={{ height }} />
          ))}
        </div>
        <div className="lesson-progress"><span /></div>
        <small>Lesson 04 · 68% complete</small>
      </div>
    </div>
  );
}

function MiniFocusFlow() {
  const blocks = [
    { name: "Deep work", gridColumn: "2 / 4", gridRow: "2 / 4", tone: "cyan" },
    { name: "Gym", gridColumn: "4 / 5", gridRow: "4 / 6", tone: "orange" },
    { name: "Algorithms", gridColumn: "5 / 7", gridRow: "3 / 5", tone: "violet" },
    { name: "Project", gridColumn: "2 / 3", gridRow: "6 / 8", tone: "silver" },
    { name: "Reset", gridColumn: "6 / 7", gridRow: "6 / 7", tone: "blue" },
  ];
  return (
    <div className="mini-ui focus-ui" aria-hidden="true">
      <div className="focus-toolbar">
        <div className="focus-logo"><CalendarRange size={14} /> focusflow</div>
        <span>Aug 03 — Aug 09</span>
        <div className="focus-action"><Sparkles size={11} /> Rebalance</div>
      </div>
      <div className="calendar-labels">
        <i />{["MON 03", "TUE 04", "WED 05", "THU 06", "FRI 07"].map((day) => <span key={day}>{day}</span>)}
      </div>
      <div className="calendar-demo">
        {["08", "10", "12", "14", "16", "18"].map((hour) => <small key={hour}>{hour}:00</small>)}
        {blocks.map((block) => (
          <b key={block.name} className={block.tone} style={{ gridColumn: block.gridColumn, gridRow: block.gridRow }}>
            {block.name}
          </b>
        ))}
      </div>
    </div>
  );
}

function MiniSubscriptionFlow() {
  const navigation = ["Overview", "Subscriptions", "Invoices", "Payments"];

  return (
    <div className="mini-ui sf-dashboard" aria-label="A public-safe recreation of the current SubscriptionFlow Next.js dashboard">
      <aside className="sf-preview-sidebar">
        <div className="sf-preview-brand"><span>SF</span><b>SubscriptionFlow</b></div>
        <nav>
          {navigation.map((item, index) => (
            <span key={item} className={index === 0 ? "active" : ""}>
              <i />{item}
            </span>
          ))}
        </nav>
        <div className="sf-preview-user"><i /><span><b>Muaz</b><small>Engineering</small></span></div>
      </aside>
      <div className="sf-preview-main">
        <header>
          <div><b>Modern View</b><small>Subscription overview</small></div>
          <span>USD</span>
        </header>
        <div className="sf-preview-section-title"><i /> RECURRING REVENUE</div>
        <div className="sf-metric-grid">
          <article>
            <span>MONTHLY RECURRING REVENUE</span>
            <strong>$••,•••</strong>
            <svg viewBox="0 0 120 34" role="presentation"><path d="M2 28 C18 25, 20 17, 35 20 S55 8, 68 13 S90 5, 118 3" /></svg>
          </article>
          <article>
            <span>ANNUAL RECURRING REVENUE</span>
            <strong>$•••,•••</strong>
            <svg viewBox="0 0 120 34" role="presentation"><path d="M2 29 C15 23, 27 27, 39 17 S60 20, 72 11 S96 10, 118 2" /></svg>
          </article>
        </div>
        <div className="sf-preview-section-title"><i /> STATUS OVERVIEW</div>
        <div className="sf-status-grid">
          <article>
            <div className="sf-donut subscriptions"><span>•••<small>TOTAL</small></span></div>
            <div className="sf-status-copy"><b>Subscriptions</b><span><i /> Active</span><span><i /> Trial</span><span><i /> Paused</span></div>
          </article>
          <article>
            <div className="sf-donut invoices"><span>•••<small>TOTAL</small></span></div>
            <div className="sf-status-copy"><b>Invoices</b><span><i /> Paid</span><span><i /> Due</span><span><i /> Draft</span></div>
          </article>
        </div>
      </div>
    </div>
  );
}

function TerminalModal({ onClose }: { onClose: () => void }) {
  const [lines, setLines] = useState<string[]>([
    "muaz.dev booted. Type 'help', or make a confident mistake.",
  ]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => inputRef.current?.focus(), []);

  const run = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const command = value.trim().toLowerCase();
    if (!command) return;
    const responses: Record<string, string> = {
      help: "Commands: about · work · skills · contact · whoami · origin · saltpepper · play · clear · exit",
      about: "Muaz builds across the stack, asks annoying questions, and refuses to let confusing systems stay confusing.",
      skills: "TypeScript, React, Next.js, Node.js, Express, Laravel, Python, SQL, AI/ML.",
      contact: `Open to the right engineering role, client project, or collaboration → ${EMAIL}`,
      whoami: "Muaz Shafiq. Software engineer. Full-stack by circumstance; suspicious of vague abstractions by choice.",
      origin: "GIKI → FocusFlow → production systems → several technically unnecessary but educational side quests.",
      saltpepper: "Natural gradient. No CSS, dye, or production incident required.",
      play: "Side quests unlocked: spar · football · anime · respawn",
      spar: "Technique over cardio theatre. The heavy bag has declined to comment.",
      football: "A less deterministic system with 22 concurrent processes and one unreliable scheduler.",
      anime: "Impossibly dramatic systems, excellent visual direction, suspicious deployment hairstyles.",
      respawn: "Games taught me retries are normal. Production taught me retries need limits.",
      plainenglish: "Translating ‘implementation details’ into ‘what the code actually does.’",
      chaos: "Five systems disagree. Congratulations, this is now an integration task.",
      currently: "Building a portfolio that looks like a terminal but still remembers users are not shell scripts.",
      oldmuaz: "Still here. Slightly more production-tested, allegedly less funny.",
      hire: "Open to the right engineering role, client project, or collaboration.",
    };
    let response = responses[command] ?? "Command not found. Strong initiative; questionable syntax.";
    if (command === "work") {
      response = "Navigating to selected work…";
      window.setTimeout(() => document.querySelector("#work")?.scrollIntoView(), 300);
    }
    if (command === "clear") {
      setLines([]);
      setValue("");
      return;
    }
    if (command === "exit") {
      onClose();
      return;
    }
    setLines((current) => [...current, `visitor@muaz:~$ ${command}`, response]);
    setValue("");
  };

  return (
    <div className="command-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="command-window" role="dialog" aria-modal="true" aria-label="Interactive command palette">
        <header>
          <div><span /><span /><span /></div>
          <p><TerminalSquare size={14} /> muaz@portfolio: ~</p>
          <button onClick={onClose} aria-label="Close terminal"><X size={18} /></button>
        </header>
        <div className="command-body" onClick={() => inputRef.current?.focus()}>
          {lines.map((line, index) => <p key={`${line}-${index}`} className={line.startsWith("visitor") ? "command-entry" : "command-response"}>{line}</p>)}
          <form onSubmit={run}>
            <label htmlFor="terminal-command">visitor@muaz:~$</label>
            <input id="terminal-command" ref={inputRef} value={value} onChange={(event) => setValue(event.target.value)} autoComplete="off" spellCheck="false" />
          </form>
        </div>
      </section>
    </div>
  );
}

function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setTerminalOpen((open) => !open);
      }
      if (event.key === "Escape") setTerminalOpen(false);
    };
    const onPointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointermove", onPointerMove);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="ambient-glow" aria-hidden="true" />

      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <BrandMark />
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
          </div>
          <div className="nav-actions">
            <button className="command-trigger" onClick={() => setTerminalOpen(true)} aria-label="Open interactive terminal">
              <Command size={14} /> <span>Ctrl K</span>
            </button>
            <a className="nav-contact" href={`mailto:${EMAIL}`}>Let’s talk <ArrowUpRight size={15} /></a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> Available for opportunities & collaborations</div>
            <h1>I build software<br />that <em>thinks</em>, talks<br />& gets things done.</h1>
            <p className="hero-intro">I’m <strong>Muaz Shafiq</strong>, a software engineer who builds products across the stack, asks annoying questions, and refuses to let confusing systems stay confusing for long.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore my work <ArrowDownRight size={18} /></a>
              <a
                className="button secondary"
                href="/Muaz-Shafiq-Resume.pdf"
                download="Muaz-Shafiq-Resume.pdf"
                title="Download the résumé. Fewer jokes, more evidence."
              >
                Resume <Download size={16} />
              </a>
            </div>
          </div>

          <div className="hero-console">
            <div className="console-window-top">
              <div className="window-dots"><span /><span /><span /></div>
              <p>~/muaz/profile.ts</p>
              <Code2 size={16} />
            </div>
            <div className="profile-code">
              <div className="code-lines" aria-hidden="true">01<br />02<br />03<br />04<br />05<br />06<br />07<br />08</div>
              <code>
                <span><i>const</i> engineer = {'{'}</span>
                <span>&nbsp;&nbsp;name: <b>"Muaz Shafiq"</b>,</span>
                <span>&nbsp;&nbsp;role: <b>"Software Engineer"</b>,</span>
                <span>&nbsp;&nbsp;basedIn: <b>"Lahore, PK"</b>,</span>
                <span>&nbsp;&nbsp;experience: <strong>"2+ years"</strong>,</span>
                <span>&nbsp;&nbsp;focus: [<b>"product"</b>, <b>"AI"</b>],</span>
                <span>&nbsp;&nbsp;status: <strong>"open_to_work"</strong></span>
                <span>{'}'};</span>
              </code>
            </div>
            <div className="portrait-slot">
              <div className="scan-corner top-left" /><div className="scan-corner top-right" />
              <img
                className="portrait-photo"
                src="/muaz-portrait-original.jpeg"
                alt="Muaz Shafiq wearing a cream button-up shirt"
                width="720"
                height="1280"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="scan-corner bottom-left" /><div className="scan-corner bottom-right" />
            </div>
            <div className="console-status">
              <span><i /> ONLINE</span>
              <span>LHR · <LahoreTime /></span>
            </div>
          </div>
        </section>

        <div className="marquee" aria-label="Areas of expertise">
          <div>
            <span>FULL-STACK PRODUCTS</span><Sparkles /><span>AI EXPERIENCES</span><Sparkles /><span>RELIABLE SYSTEMS</span><Sparkles /><span>DETAILS THAT DELIGHT</span><Sparkles />
            <span aria-hidden="true">FULL-STACK PRODUCTS</span><Sparkles aria-hidden="true" /><span aria-hidden="true">AI EXPERIENCES</span><Sparkles aria-hidden="true" /><span aria-hidden="true">RELIABLE SYSTEMS</span><Sparkles aria-hidden="true" /><span aria-hidden="true">DETAILS THAT DELIGHT</span><Sparkles aria-hidden="true" />
          </div>
        </div>

        <section className="work-section section-shell" id="work">
          <Reveal>
            <div className="section-heading">
              <div><span className="section-index">01 / SELECTED WORK</span><h2>Ideas, shipped.</h2></div>
            </div>
          </Reveal>

          <Reveal className="project-card project-faask">
            <div className="project-copy">
              <div className="project-meta"><span>2026 — NOW</span><span>FASHION / AI</span></div>
              <div className="project-number">01</div>
              <div>
                <div className="project-title-line"><span className="project-icon faask-icon"><Heart size={20} /></span><h3>Faask</h3></div>
                <p className="project-lede">A swipe-first fashion discovery app that learns personal taste and turns it into sharper recommendations.</p>
                <ul className="project-highlights">
                  <li><Check size={14} /> Taste onboarding and swipe-based recommendation learning</li>
                  <li><Check size={14} /> Semantic search with exact article and style filters</li>
                  <li><Check size={14} /> Live, normalized multi-retailer catalogue</li>
                </ul>
                <div className="tag-list"><span>React</span><span>Tailwind CSS</span><span>Supabase</span><span>Embeddings</span></div>
                <div className="project-actions">
                  <a className="text-link live-link" href="https://faask.vercel.app/" target="_blank" rel="noreferrer">Open live app <ArrowUpRight size={16} /></a>
                  <a className="text-link" href="https://github.com/MuazShafiq/faask" target="_blank" rel="noreferrer">Source code <GitBranch size={15} /></a>
                </div>
              </div>
            </div>
            <div className="project-visual faask-visual">
              <div className="visual-label faask-label"><i /> TASTE MODEL ACTIVE</div>
              <MiniFaask />
              <div className="floating-chip chip-top"><Sparkles size={13} /> Learns your taste</div>
              <div className="floating-chip chip-bottom"><Heart size={13} /> Swipe-first</div>
            </div>
          </Reveal>

          <Reveal className="project-card project-koro">
            <div className="project-copy">
              <div className="project-meta"><span>2025 — NOW</span><span>AI / EDTECH</span></div>
              <div className="project-number">02</div>
              <div>
                <div className="project-title-line"><span className="project-icon koro-icon"><Mic2 size={20} /></span><h3>Koro.ai</h3></div>
                <p className="project-lede">A production-ready, voice-first AI tutor with adaptive lessons, persistent learning data, and managed educational resources.</p>
                <ul className="project-highlights">
                  <li><Check size={14} /> Supabase-backed accounts, preferences, analytics, and progress</li>
                  <li><Check size={14} /> Admin-managed subject catalogue with PDF resource ingestion</li>
                  <li><Check size={14} /> Voice lessons, chat, and an interactive blackboard powered by Llama and Aura/MeloTTS</li>
                </ul>
                <div className="tag-list"><span>Next.js</span><span>Llama 3.1</span><span>Supabase</span><span>Aura / MeloTTS</span></div>
                <div className="project-actions">
                  <a className="text-link live-link" href="https://koro-ai-lime.vercel.app/" target="_blank" rel="noreferrer">Open live app <ArrowUpRight size={16} /></a>
                  <a className="text-link" href="https://github.com/MuazShafiq/koro.ai" target="_blank" rel="noreferrer">Source code <GitBranch size={15} /></a>
                </div>
              </div>
            </div>
            <div className="project-visual koro-visual">
              <div className="visual-label"><i /> VOICE SESSION ACTIVE</div>
              <MiniKoro />
              <div className="floating-chip chip-top"><BrainCircuit size={13} /> Adaptive</div>
              <div className="floating-chip chip-bottom"><Mic2 size={13} /> Voice-first</div>
            </div>
          </Reveal>

          <Reveal className="project-card project-focus">
            <div className="project-copy">
              <div className="project-meta"><span>2024 — NOW</span><span>PRODUCTIVITY / ML</span></div>
              <div className="project-number">03</div>
              <div>
                <div className="project-title-line"><span className="project-icon focus-icon"><CalendarRange size={20} /></span><h3>FocusFlow</h3></div>
                <p className="project-lede">An AI-assisted planner that turns tasks, deadlines, commitments, energy patterns, and lifestyle goals into a realistic calendar.</p>
                <ul className="project-highlights">
                  <li><Check size={14} /> Automatic 7 or 14-day plans built around deadlines and fixed commitments</li>
                  <li><Check size={14} /> Constraint-aware scheduling balances priority, difficulty, energy, and workload</li>
                  <li><Check size={14} /> Calendar views and completion feedback that improve future recommendations</li>
                </ul>
                <div className="tag-list"><span>MERN</span><span>Scheduling ML</span><span>Flask</span><span>scikit-learn</span></div>
                <div className="project-actions">
                  <a className="text-link live-link" href="https://focusflow-web-azure.vercel.app/" target="_blank" rel="noreferrer">Open live app <ArrowUpRight size={16} /></a>
                  <a className="text-link" href="https://github.com/MuazShafiq/focusflow" target="_blank" rel="noreferrer">Source code <GitBranch size={15} /></a>
                </div>
              </div>
            </div>
            <div className="project-visual focus-visual">
              <div className="visual-label"><i /> WEEK OPTIMIZED</div>
              <MiniFocusFlow />
              <div className="floating-chip chip-top"><Sparkles size={13} /> Energy-aware</div>
              <div className="floating-chip chip-bottom"><CalendarRange size={13} /> 7–14 day plans</div>
            </div>
          </Reveal>

          <Reveal className="project-card project-subscription">
            <div className="project-copy">
              <div className="project-meta"><span>2024 — NOW</span><span>PROFESSIONAL WORK</span></div>
              <div className="project-number">04</div>
              <div>
                <div className="project-title-line"><span className="project-icon sf-icon"><BriefcaseBusiness size={20} /></span><h3>SubscriptionFlow</h3></div>
                <p className="project-lede">Product engineering across a modern Next.js frontend and the systems behind a YC-backed subscription platform.</p>
                <ul className="project-highlights">
                  <li><Check size={14} /> Modern dashboards and end-to-end subscription workflows</li>
                  <li><Check size={14} /> Hosted checkout and payment recovery across gateways</li>
                  <li><Check size={14} /> AI tooling, integrations, and production reliability</li>
                </ul>
                <div className="tag-list"><span>Next.js</span><span>Laravel</span><span>MySQL</span><span>Redis</span></div>
                <div className="project-actions">
                  <a className="text-link live-link" href="https://www.subscriptionflow.com/" target="_blank" rel="noreferrer">Visit company <ArrowUpRight size={16} /></a>
                </div>
              </div>
            </div>
            <div className="project-visual subscription-visual">
              <div className="visual-label privacy-label"><i /> PUBLIC-SAFE OVERVIEW</div>
              <MiniSubscriptionFlow />
              <div className="floating-chip chip-top sf-floating-chip"><Sparkles size={13} /> Next.js frontend</div>
              <div className="floating-chip chip-bottom sf-floating-chip"><BriefcaseBusiness size={13} /> Production SaaS</div>
            </div>
          </Reveal>
        </section>

        <section className="capabilities-section">
          <div className="section-shell">
            <Reveal>
              <div className="section-heading compact">
                <div><span className="section-index">02 / HOW I BUILD</span><h2>Across the stack.<br /><em>Close to the product.</em></h2></div>
              </div>
            </Reveal>
            <div className="capability-grid">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Reveal className="capability-card" key={skill.title}>
                    <div className="capability-top"><span>{skill.number}</span><Icon size={22} /></div>
                    <h3>{skill.title}</h3>
                    <p>{skill.text}</p>
                    <small>{skill.stack}</small>
                    <div className="capability-arrow"><ArrowDownRight size={18} /></div>
                    <i className={`capability-stripe stripe-${index + 1}`} />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="experience-section section-shell" id="experience">
          <Reveal>
            <div className="section-heading">
              <div><span className="section-index">03 / EXPERIENCE</span><h2>Built in the real world.</h2></div>
              <p>Two years of turning messy product problems into dependable software—and learning fast along the way.</p>
            </div>
          </Reveal>
          <div className="experience-list">
            {experience.map((item, index) => (
              <Reveal className="experience-row" key={item.company}>
                <div className="experience-period"><span>{item.period}</span>{item.current && <i>NOW</i>}</div>
                <div className="experience-title"><span>0{index + 1}</span><h3>{item.company}</h3><p>{item.note}</p></div>
                <div className="experience-detail"><h4>{item.role}</h4><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-shell about-grid">
            <Reveal className="about-lead">
              <span className="section-index">04 / BEYOND THE CODE</span>
              <h2>The human behind<br /><em>the terminal.</em></h2>
              <p>I enjoy the awkward middle ground between “this should be simple” and the part where five systems disagree. I learn by questioning things until the jargon gives up and the underlying idea becomes obvious.</p>
              <p className="about-personal-note">Outside engineering, I box, play football, and make room for anime and video games. The salt-and-pepper hair is natural. The dramatic color palette is a design decision.</p>
              <a className="button primary" href={`mailto:${EMAIL}?subject=Let%27s%20build%20something`}>Start a conversation <ArrowRight size={17} /></a>
            </Reveal>
            <div className="about-cards">
              <Reveal className="about-card education-card">
                <div className="about-card-head"><GraduationCap size={20} /><span>EDUCATION</span></div>
                <h3>B.Sc. Computer Science</h3>
                <p>Ghulam Ishaq Khan Institute (GIKI)</p>
                <small>2020 — 2024</small>
              </Reveal>
              <Reveal className="about-card leadership-card">
                <div className="about-card-head"><Sparkles size={20} /><span>LEADERSHIP</span></div>
                <h3>Built communities, too.</h3>
                <p>
                  Events &amp; Logistics Coordinator at Microsoft Club GIKI (MLSA), managing logistics and finances for GIKI’s first intra and national hackathons.
                  <br /><br />
                  Also Vice President at IET on Campus GIKI, helping lead engagement, recruitment, and national-summit initiatives.
                </p>
              </Reveal>
              <Reveal className="about-card location-card">
                <div className="about-card-head"><MapPin size={20} /><span>BASED IN</span></div>
                <div className="map-orbit"><i /><i /><i /><span>LHR</span></div>
                <h3>Lahore, Pakistan</h3>
                <p>Working across time zones.</p>
              </Reveal>
              <Reveal className="about-card interests-card">
                <div className="about-card-head"><Sparkles size={20} /><span>OFFLINE MODE</span></div>
                <h3>Four reliable ways to reset.</h3>
                <div className="interest-list">
                  <span><BicepsFlexed size={16} /> Boxing</span>
                  <span><Goal size={16} /> Football</span>
                  <span><Clapperboard size={16} /> Anime</span>
                  <span><Gamepad2 size={16} /> Games</span>
                </div>
                <p>Serious about technique. Equally willing to discuss impossible hairstyles and unreliable schedulers.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <Reveal>
            <div className="contact-card">
              <div className="contact-grid" aria-hidden="true" />
              <div className="contact-copy">
                <div className="eyebrow light"><span className="pulse-dot" /> Open to roles, freelance & good ideas</div>
                <h2>Have a problem worth<br /><em>solving?</em></h2>
                <p>Have a real problem, a strange idea, or both? Send it over. I’m always up for an ambitious product, a thoughtful team, or a problem that needs a fresh angle.</p>
                <a className="contact-email" href={`mailto:${EMAIL}?subject=Hello%20Muaz`}>{EMAIL} <ArrowUpRight /></a>
              </div>
              <div className="contact-terminal">
                <div className="terminal-line"><span>$</span> muaz --status</div>
                <p><i>✓</i> available_for_work</p>
                <p><i>✓</i> available_for_freelance</p>
                <p><i>✓</i> replies_within_48h</p>
                <a href={`mailto:${EMAIL}`}>send_message()<ChevronRight size={15} /></a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div className="footer-top">
          <BrandMark />
          <div className="footer-links">
            <a href={GITHUB} target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer"><ContactRound size={17} /> LinkedIn</a>
            <a href={`mailto:${EMAIL}`}><Mail size={17} /> Email</a>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} MUAZ SHAFIQ</span><button onClick={() => setTerminalOpen(true)}><TerminalSquare size={14} /> TRY THE TERMINAL</button><a href="#top">BACK TO TOP ↑</a></div>
      </footer>

      {terminalOpen && <TerminalModal onClose={() => setTerminalOpen(false)} />}
    </>
  );
}

export default App;
