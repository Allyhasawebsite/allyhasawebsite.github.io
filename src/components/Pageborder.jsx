const PageBorder = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">

        {/* ── Outer frame ── */}
        <rect x="12" y="12" width="calc(100% - 24px)" height="calc(100% - 24px)"
          fill="none" stroke="#7ec8e3" strokeWidth="1.5" strokeOpacity="0.5" />

        {/* ── Mid frame ── */}
        <rect x="20" y="20" width="calc(100% - 40px)" height="calc(100% - 40px)"
          fill="none" stroke="#b8dff0" strokeWidth="0.5" strokeOpacity="0.25" />

        {/* ── Inner ghost frame ── */}
        <rect x="28" y="28" width="calc(100% - 56px)" height="calc(100% - 56px)"
          fill="none" stroke="#b8dff0" strokeWidth="0.3" strokeOpacity="0.12" />

        {/* ══ TOP EDGE center ══ */}
        <line x1="calc(50% - 100px)" y1="12" x2="calc(50% - 30px)" y2="12"
          stroke="#7ec8e3" strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.4" />
        <line x1="calc(50% + 30px)" y1="12" x2="calc(50% + 100px)" y2="12"
          stroke="#7ec8e3" strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.4" />
        <rect x="calc(50% - 20px)" y="8" width="40" height="8" rx="4"
          fill="none" stroke="#7ec8e3" strokeWidth="1" strokeOpacity="0.55" />
        <rect x="calc(50% - 10px)" y="10" width="20" height="4" rx="2"
          fill="#7ec8e3" fillOpacity="0.25" />
        <circle cx="50%" cy="12" r="2" fill="#7ec8e3" fillOpacity="0.6" />

        {/* ══ BOTTOM EDGE center ══ */}
        <line x1="calc(50% - 100px)" y1="calc(100% - 12px)" x2="calc(50% - 30px)" y2="calc(100% - 12px)"
          stroke="#7ec8e3" strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.4" />
        <line x1="calc(50% + 30px)" y1="calc(100% - 12px)" x2="calc(50% + 100px)" y2="calc(100% - 12px)"
          stroke="#7ec8e3" strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.4" />
        <rect x="calc(50% - 20px)" y="calc(100% - 20px)" width="40" height="8" rx="4"
          fill="none" stroke="#7ec8e3" strokeWidth="1" strokeOpacity="0.55" />
        <rect x="calc(50% - 10px)" y="calc(100% - 18px)" width="20" height="4" rx="2"
          fill="#7ec8e3" fillOpacity="0.25" />
        <circle cx="50%" cy="calc(100% - 16px)" r="2" fill="#7ec8e3" fillOpacity="0.6" />

        {/* ══ LEFT EDGE center ══ */}
        <line x1="12" y1="calc(50% - 100px)" x2="12" y2="calc(50% - 30px)"
          stroke="#7ec8e3" strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.4" />
        <line x1="12" y1="calc(50% + 30px)" x2="12" y2="calc(50% + 100px)"
          stroke="#7ec8e3" strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.4" />
        <rect x="8" y="calc(50% - 20px)" width="8" height="40" rx="4"
          fill="none" stroke="#7ec8e3" strokeWidth="1" strokeOpacity="0.55" />
        <rect x="10" y="calc(50% - 10px)" width="4" height="20" rx="2"
          fill="#7ec8e3" fillOpacity="0.25" />
        <circle cx="12" cy="50%" r="2" fill="#7ec8e3" fillOpacity="0.6" />

        {/* ══ RIGHT EDGE center ══ */}
        <line x1="calc(100% - 12px)" y1="calc(50% - 100px)" x2="calc(100% - 12px)" y2="calc(50% - 30px)"
          stroke="#7ec8e3" strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.4" />
        <line x1="calc(100% - 12px)" y1="calc(50% + 30px)" x2="calc(100% - 12px)" y2="calc(50% + 100px)"
          stroke="#7ec8e3" strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.4" />
        <rect x="calc(100% - 16px)" y="calc(50% - 20px)" width="8" height="40" rx="4"
          fill="none" stroke="#7ec8e3" strokeWidth="1" strokeOpacity="0.55" />
        <rect x="calc(100% - 14px)" y="calc(50% - 10px)" width="4" height="20" rx="2"
          fill="#7ec8e3" fillOpacity="0.25" />
        <circle cx="calc(100% - 12px)" cy="50%" r="2" fill="#7ec8e3" fillOpacity="0.6" />

      </svg>
    </div>
  );
};

export default PageBorder;