import { useEffect, useState } from "react";

/** Status lines shown in sequence as the boot progress advances. */
const STEPS = ["booting_environment", "loading_experience.ts", "compiling_ideas", "ready"];

/**
 * First-paint boot animation, styled as a small terminal window to match the hero console /
 * Ctrl+K command palette motif elsewhere on the page. Runs a simulated progress fill for a
 * short, fixed duration (there's nothing async to actually wait on — the page is static), then
 * fades itself out and unmounts. Respects prefers-reduced-motion by collapsing to a near-instant
 * flash rather than skipping straight to invisible, so screen readers still get the status update.
 */
export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"boot" | "exit" | "done">("boot");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduceMotion ? 200 : 1300;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      setProgress(Math.min(100, Math.round((elapsed / duration) * 100)));
      if (elapsed < duration) {
        frame = requestAnimationFrame(tick);
      } else {
        setPhase("exit");
      }
    };
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (phase !== "exit") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setPhase("done"), reduceMotion ? 50 : 550);
    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase === "done") return;
    document.documentElement.classList.add("is-preloading");
    return () => document.documentElement.classList.remove("is-preloading");
  }, [phase]);

  if (phase === "done") return null;

  const stepIndex = Math.min(STEPS.length - 1, Math.floor((progress / 100) * STEPS.length));

  return (
    <div
      className={phase === "exit" ? "preloader preloader-exit" : "preloader"}
      role="status"
      aria-live="polite"
      aria-label="Loading Muaz Shafiq's portfolio"
    >
      <div className="preloader-window">
        <div className="preloader-titlebar">
          <div className="window-dots"><span /><span /><span /></div>
          <p>~/muaz/boot.sh</p>
          <span className="preloader-pct" aria-hidden="true">{String(progress).padStart(3, "0")}%</span>
        </div>
        <div className="preloader-body" aria-hidden="true">
          <div className="preloader-mark">MS</div>
          <div className="preloader-line">
            <span className="preloader-prompt">$</span> {STEPS[stepIndex]}
            <i className="preloader-caret" />
          </div>
          <div className="preloader-bar">
            <div className="preloader-bar-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
