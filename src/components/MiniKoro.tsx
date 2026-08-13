import { ArrowLeft, BarChart3, BookOpen, Gauge, Home, Play, Send, Volume2 } from "lucide-react";

const waveform = [7, 13, 20, 11, 25, 16, 9, 22, 14, 8, 19, 12, 24, 15, 7];

export function MiniKoro() {
  return (
    <div className="mini-ui koro-ui" aria-hidden="true">
      <aside className="koro-session-sidebar">
        <img src="/project-icons/koro.ico" alt="" width="25" height="25" />
        <nav>
          <span><Home size={11} /></span>
          <span className="active"><BookOpen size={11} /></span>
          <span><BarChart3 size={11} /></span>
        </nav>
        <i />
      </aside>

      <div className="koro-session-shell">
        <header className="koro-session-header">
          <div>
            <span><ArrowLeft size={9} /></span>
            <b><BookOpen size={10} /></b>
            <p><strong>Physics</strong><small>Kinematics</small></p>
          </div>
          <p><small>Section 2/4</small><b>Interaction Phase</b><i /></p>
        </header>

        <div className="koro-session-main">
          <section className="koro-blackboard">
            <header><span><i /><i /><i /></span><b>AI Blackboard</b></header>
            <div className="koro-board-content">
              <article>
                <small>DEFINITION</small>
                <strong>Velocity and acceleration</strong>
                <p>Velocity describes how displacement changes over time.</p>
                <em>v = Δx / Δt</em>
              </article>
              <article>
                <small>STEP BY STEP</small>
                <strong>Reading the motion</strong>
                <ol><li>Find the change in position</li><li>Divide by elapsed time</li></ol>
              </article>
            </div>
            <footer><span>Auto-scroll enabled</span><span>LaTeX supported</span></footer>
          </section>

          <aside className="koro-tutor-panel">
            <section className="koro-audio">
              <div className="koro-waveform">
                {waveform.map((height, index) => <i key={index} style={{ height }} />)}
              </div>
              <div className="koro-audio-control"><span><Play size={8} /></span><Volume2 size={8} /><b>85%</b><Gauge size={8} /><b>1×</b></div>
            </section>
            <div className="koro-chat">
              <article className="tutor"><b>K</b><p>Velocity tells us both speed and direction.</p></article>
              <article className="student"><p>So acceleration is the change in velocity?</p></article>
              <article className="tutor"><b>K</b><p>Exactly. Let’s connect that to the graph.</p></article>
            </div>
            <div className="koro-chat-input"><span>Ask a question…</span><i><Send size={8} /></i></div>
          </aside>
        </div>
      </div>
    </div>
  );
}
