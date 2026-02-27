import React, { useRef, useEffect, useState } from "react";

import AboutTab from "./tabs/AboutTab";
import DesignTab from "./tabs/DesignTab";
import ThreeDTab from "./tabs/ThreeDTab";
import ProjectionTab from "./tabs/ProjectionTab";

// Header Height Estimator
const HEADER_HEIGHT = 48;  // px — adjust to match your scroll header
const NAVBAR_HEIGHT = 80;  // px — adjust to match your bottom nav

const Tab = ({ activeTab, setActiveTabs }) => {
  const folderRef = useRef(null);
  const tabHandleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect mobile on resize
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const tabContent = {
    about:       <AboutTab />,
    design:      <DesignTab />,
    threeD:      <ThreeDTab />,
    projmapping: <ProjectionTab />,
  };

  // Desktop config 
  const tabConfig = {
    about:       { width: "320px", top: "calc(100vh - 420px)", maxHeight: "400px" },
    design:      { width: "720px", top: "calc(100vh - 520px)", maxHeight: "400px" },
    threeD:      { width: "320px", top: "calc(100vh - 420px)", maxHeight: "400px" },
    projmapping: { width: "720px", top: "calc(100vh - 420px)", maxHeight: "500px" },
  };

  // Mobile: fill the safe area between header and navbar
  const mobileStyle = {
    top: `${HEADER_HEIGHT}px`,
    left: "0px",
    transform: "none",
    width: "100vw",
    maxHeight: `calc(100vh - ${HEADER_HEIGHT}px - ${NAVBAR_HEIGHT}px)`,
  };

  const desktopConfig = tabConfig[activeTab] ?? tabConfig.about;

  // Dragging (desktop only — skip on mobile)
  useEffect(() => {
    const elmnt = folderRef.current;
    const handle = tabHandleRef.current;
    if (!elmnt || isMobile) return;

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const dragMouseDown = (e) => {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      const rect = elmnt.getBoundingClientRect();
      elmnt.style.left = rect.left + "px";
      elmnt.style.top = rect.top + "px";
      elmnt.style.transform = "none";
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    };

    const elementDrag = (e) => {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      const elWidth = elmnt.offsetWidth;
      const elHeight = elmnt.offsetHeight;
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      let newTop = elmnt.offsetTop - pos2;
      let newLeft = elmnt.offsetLeft - pos1;

      // Clamp: cannot go above header or below navbar
      if (newTop < HEADER_HEIGHT) newTop = HEADER_HEIGHT;
      if (newLeft < 0) newLeft = 0;
      if (newTop + elHeight > vh - NAVBAR_HEIGHT) newTop = vh - NAVBAR_HEIGHT - elHeight;
      if (newLeft + elWidth > vw) newLeft = vw - elWidth;

      elmnt.style.top = newTop + "px";
      elmnt.style.left = newLeft + "px";
    };

    const closeDragElement = () => {
      document.onmouseup = null;
      document.onmousemove = null;
    };

    if (handle) handle.onmousedown = dragMouseDown;
    else elmnt.onmousedown = dragMouseDown;

    return () => {
      if (handle) handle.onmousedown = null;
      else elmnt.onmousedown = null;
    };
  }, [isMobile, activeTab]);

  const containerStyle = isMobile
    ? mobileStyle
    : {
        top: desktopConfig.top,
        left: "50%",
        transform: "translateX(-50%)",
        width: desktopConfig.width,
      };

  const contentMaxHeight = isMobile
    ? `calc(100vh - ${HEADER_HEIGHT}px - ${NAVBAR_HEIGHT}px - 60px)` // 60px accounts for tab handle + padding
    : (desktopConfig.maxHeight ?? "400px");

  return (
    <div
      ref={folderRef}
      className="fixed select-none"
      style={{
        ...containerStyle,
        filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.15))",
        zIndex: 50,
      }}
    >
      {/* Folder tab label */}
      <div className="flex items-end">
        <div
          ref={tabHandleRef}
          className={`flex items-center justify-between ${isMobile ? 'cursor-default' : 'cursor-move drag-handle'}`}
          style={{
            width: "120px",
            height: "26px",
            backgroundColor: "#8b8b8b",
            borderRadius: "6px 10px 0 0",
            clipPath: "polygon(0 100%, 0 20%, 6% 0, 88% 0, 100% 100%)",
            paddingLeft: "12px",
            paddingRight: "10px",
          }}
        >
          <span
            className="font-mono font-semibold truncate"
            style={{
              fontSize: "11px",
              color: "#e0fffe",
              textTransform: "capitalize",
              letterSpacing: "0.04em",
              maxWidth: "75px",
            }}
          >
            {activeTab}
          </span>

          <button
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => setActiveTabs((prev) => prev.filter((t) => t !== activeTab))}
            style={{ color: "#e0fffe", fontSize: "10px", marginLeft: "4px", lineHeight: 1 }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Folder body */}
      <div
        style={{
          backgroundColor: "#8b8b8b",
          borderRadius: isMobile ? "0 8px 0 0" : "0 8px 8px 8px",
          padding: "3px",
        }}
      >
        {/* Inner content area */}
        <div
          style={{
            backgroundColor: "#e0fffe",
            borderRadius: isMobile ? "0 6px 0 0" : "0 6px 6px 6px",
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#e0fffe",
              minHeight: "200px",
              maxHeight: contentMaxHeight,
              overflowY: "auto",
            }}
          >
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;