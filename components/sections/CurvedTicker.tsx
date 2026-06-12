"use client";

const ITEMS = [
  "Business Matchmaking",
  "Trade Missions",
  "Policy Advocacy",
  "Market Intelligence",
  "Strategic Advisory",
  "Executive Access",
  "High Value Networking",
  "Cultural Intelligence",
];

export default function CurvedTicker() {
  // We duplicate the items to make a seamless infinite loop
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <div className="premium-ticker-wrap" aria-hidden="true">
      <div className="premium-ticker-fade-left" />
      <div className="premium-ticker-track">
        <div className="premium-ticker-list">
          {repeated.map((item, i) => (
            <div key={i} className="premium-ticker-item">
              <span className="premium-ticker-text">{item}</span>
              <span className="premium-ticker-separator">✦</span>
            </div>
          ))}
        </div>
      </div>
      <div className="premium-ticker-fade-right" />

      <style jsx>{`
        .premium-ticker-wrap {
          position: relative;
          overflow: hidden;
          width: 100%;
          border-block: 1px solid rgba(217, 179, 109, 0.22);
          background: rgba(11, 24, 40, 0.45);
          backdrop-filter: blur(12px);
          padding: 24px 0;
          display: flex;
          align-items: center;
          z-index: 10;
        }

        .premium-ticker-track {
          display: flex;
          overflow: hidden;
          width: 100%;
        }

        .premium-ticker-list {
          display: flex;
          gap: 48px;
          padding-left: 48px;
          animation: tickerScroll 25s linear infinite;
          will-change: transform;
        }

        .premium-ticker-item {
          display: flex;
          align-items: center;
          gap: 48px;
          white-space: nowrap;
        }

        .premium-ticker-text {
          font-family: var(--font-body);
          color: var(--champagne);
          font-size: 13.5px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }

        .premium-ticker-item:hover .premium-ticker-text {
          color: var(--ivory);
          text-shadow: 0 0 10px rgba(248, 242, 231, 0.3);
        }

        .premium-ticker-separator {
          color: rgba(217, 179, 109, 0.45);
          font-size: 14px;
          text-shadow: 0 0 8px rgba(217, 179, 109, 0.35);
        }

        @keyframes tickerScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        /* Gradient fades on the edges for a premium vignette look */
        .premium-ticker-fade-left,
        .premium-ticker-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 180px;
          z-index: 2;
          pointer-events: none;
        }

        .premium-ticker-fade-left {
          left: 0;
          background: linear-gradient(90deg, #07111d 0%, transparent 100%);
        }

        .premium-ticker-fade-right {
          right: 0;
          background: linear-gradient(-90deg, #07111d 0%, transparent 100%);
        }

        @media (max-width: 1040px) {
          .premium-ticker-fade-left,
          .premium-ticker-fade-right {
            width: 120px;
          }
        }

        @media (max-width: 680px) {
          .premium-ticker-wrap {
            padding: 18px 0;
          }
          .premium-ticker-text {
            font-size: 11px;
            letter-spacing: 0.16em;
          }
          .premium-ticker-list,
          .premium-ticker-item {
            gap: 32px;
          }
          .premium-ticker-fade-left,
          .premium-ticker-fade-right {
            width: 60px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .premium-ticker-list {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
