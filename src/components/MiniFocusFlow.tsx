import { Sparkles } from "lucide-react";

export function MiniFocusFlow() {
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
        <div className="focus-logo"><img src="/project-icons/focusflow.png" alt="" width="17" height="17" /></div>
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
