import { Mic2, Sparkles } from "lucide-react";

export function MiniKoro() {
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
