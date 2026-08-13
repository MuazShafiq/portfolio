export function MiniSubscriptionFlow() {
  const navigation = ["Overview", "Subscriptions", "Invoices", "Payments"];

  return (
    <div className="mini-ui sf-dashboard" aria-label="A public-safe recreation of the current SubscriptionFlow Next.js dashboard">
      <aside className="sf-preview-sidebar">
        <div className="sf-preview-brand"><span><img src="/project-icons/subscriptionflow.svg" alt="" width="18" height="18" /></span></div>
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
