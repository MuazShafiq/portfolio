import { TerminalSquare, X } from "lucide-react";
import { type SyntheticEvent, useEffect, useRef, useState } from "react";
import { EMAIL } from "../data";

export function TerminalModal({ onClose }: { onClose: () => void }) {
  const [lines, setLines] = useState<string[]>([
    "muaz.dev booted. Type 'help', or make a confident mistake.",
  ]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const windowRef = useRef<HTMLElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => inputRef.current?.focus(), []);

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: "smooth" });
  }, [lines]);

  // Lock background scroll while the overlay is open.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Trap Tab focus inside the modal so it can't move to the page behind the overlay.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !windowRef.current) return;
      const focusable = windowRef.current.querySelectorAll<HTMLElement>(
        'button, input, [href], [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const executeCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;
    const responses: Record<string, string> = {
      help: "Commands: about · work · skills · contact · whoami · origin · saltpepper · play · surprise · clear · exit",
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
      surprise: "Achievement unlocked: you found the deliberately over-engineered personality layer. Try ‘saltpepper’ next.",
    };
    let response = responses[command] ?? "Command not found. Strong initiative; questionable syntax.";
    if (command === "work") {
      response = "Navigating to selected work…";
      window.setTimeout(() => {
        onClose();
        window.requestAnimationFrame(() => document.querySelector("#work")?.scrollIntoView());
      }, 350);
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

  const run = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    executeCommand(value);
  };

  return (
    <div className="command-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section
        id="portfolio-terminal"
        ref={windowRef}
        className="command-window"
        role="dialog"
        aria-modal="true"
        aria-labelledby="terminal-title"
        aria-describedby="terminal-description"
      >
        <header>
          <div><span /><span /><span /></div>
          <p><TerminalSquare size={14} /> muaz@portfolio: ~</p>
          <button onClick={onClose} aria-label="Close terminal"><X size={18} /></button>
        </header>
        <h2 id="terminal-title" className="sr-only">Interactive portfolio terminal</h2>
        <p id="terminal-description" className="sr-only">Type help to see available commands.</p>
        <div ref={outputRef} className="command-body" onClick={() => inputRef.current?.focus()}>
          <div className="command-output" role="status" aria-live="polite" aria-atomic="false">
            {lines.map((line, index) => <p key={`${line}-${index}`} className={line.startsWith("visitor") ? "command-entry" : "command-response"}>{line}</p>)}
          </div>
          <form onSubmit={run}>
            <label htmlFor="terminal-command">visitor@muaz:~$</label>
            <input
              id="terminal-command"
              ref={inputRef}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              autoComplete="off"
              spellCheck="false"
              aria-label="Terminal command"
            />
          </form>
        </div>
      </section>
    </div>
  );
}
