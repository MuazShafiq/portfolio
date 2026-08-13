import { Heart, Shirt, Sparkles, X } from "lucide-react";

export function MiniFaask() {
  return (
    <div className="mini-ui faask-ui" aria-hidden="true">
      <div className="faask-topbar">
        <strong><img src="/project-icons/faask.svg" alt="" width="18" height="18" /></strong>
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
