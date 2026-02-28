import React, { useRef, useEffect, useState } from "react";

import AboutTab from "./tabs/AboutTab";
import DesignTab from "./tabs/DesignTab";
import ThreeDTab from "./tabs/ThreeDTab.jsx";
import ProjectionTab from "./tabs/ProjectionTab";
import ResumeTab from "./tabs/ResumeTab.jsx";
import PlaygroundTab from "./tabs/PlaygroundTab.jsx";

const HEADER_HEIGHT = 48;
const NAVBAR_HEIGHT = 80;

// global ref to track max z-index used so tabs can layer on top of each other
let maxZIndex = 50;

const Tab = ({ activeTab, setActiveTabs }) => {
  const folderRef = useRef(null);
  const tabHandleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
    resume:     <ResumeTab />,
    playground: <PlaygroundTab />,
  };

  const tabConfig = {
    about:       { width: "520px", top: "calc(100vh - 420px)", maxHeight: "400px" },
    design:      { width: "700px", top: "calc(100vh - 520px)", maxHeight: "500px" },
    threeD:      { width: "700px", top: "calc(100vh - 420px)", maxHeight: "400px" },
    projmapping: { width: "720px", top: "calc(100vh - 420px)", maxHeight: "500px" },
    resume: { width: "520px", top: "calc(100vh - 420px)", maxHeight: "500px" },
    playground: { width: "720px", top: "calc(100vh - 420px)", maxHeight: "500px" },
  };

  const mobileStyle = {
    top: `${HEADER_HEIGHT}px`,
    left: "0px",
    transform: "none",
    width: "100vw",
    maxHeight: `calc(100vh - ${HEADER_HEIGHT}px - ${NAVBAR_HEIGHT}px)`,
  };

  const desktopConfig = tabConfig[activeTab] ?? tabConfig.about;

  // bring this tab to front by incrementing z-index
  const bringToFront = () => {
    if (folderRef.current) {
      maxZIndex += 1;
      folderRef.current.style.zIndex = maxZIndex;
    }
  };

  // Drag (desktop only)
  useEffect(() => {
    const elmnt = folderRef.current;
    const handle = tabHandleRef.current;
    if (!elmnt || !handle || isMobile) return;

    // How far inside the element the pointer landed on drag start
    let startX = 0;
    let startY = 0;

    const onPointerDown = (e) => {
        if (e.button !== 0) return;
        if (e.target.closest('button')) return; // 👈 don't capture if clicking the close button

        e.preventDefault();

        // bring to front on drag start
        bringToFront();

        const rect = elmnt.getBoundingClientRect();
        elmnt.style.transform = "none";
        elmnt.style.left = rect.left + "px";
        elmnt.style.top  = rect.top  + "px";

        startX = e.clientX - rect.left;
        startY = e.clientY - rect.top;

        handle.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
      if (!handle.hasPointerCapture(e.pointerId)) return;
      e.preventDefault();

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const elW = elmnt.offsetWidth;
      const elH = elmnt.offsetHeight;

      let newLeft = e.clientX - startX;
      let newTop  = e.clientY - startY;

      // Clamp: stay inside safe area between header and navbar
      newLeft = Math.max(0, Math.min(newLeft, vw - elW));
      newTop  = Math.max(HEADER_HEIGHT, Math.min(newTop, vh - NAVBAR_HEIGHT - elH));

      elmnt.style.left = newLeft + "px";
      elmnt.style.top  = newTop  + "px";
    };

    const onPointerUp = (e) => {
      if (handle.hasPointerCapture(e.pointerId)) {
        handle.releasePointerCapture(e.pointerId);
      }
    };

    handle.addEventListener("pointerdown",   onPointerDown);
    handle.addEventListener("pointermove",   onPointerMove);
    handle.addEventListener("pointerup",     onPointerUp);
    handle.addEventListener("pointercancel", onPointerUp);

    return () => {
      handle.removeEventListener("pointerdown",   onPointerDown);
      handle.removeEventListener("pointermove",   onPointerMove);
      handle.removeEventListener("pointerup",     onPointerUp);
      handle.removeEventListener("pointercancel", onPointerUp);
    };
  }, [isMobile, activeTab]);

  // bring to front on mount so newly opened tabs appear on top
  useEffect(() => {
    bringToFront();
  }, [activeTab]);

  const containerStyle = isMobile
    ? mobileStyle
    : {
        top: desktopConfig.top,
        left: "50%",
        transform: "translateX(-50%)",
        width: desktopConfig.width,
      };

  const contentMaxHeight = isMobile
    ? `calc(100vh - ${HEADER_HEIGHT}px - ${NAVBAR_HEIGHT}px - 60px)`
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
          className={`flex items-center justify-between ${isMobile ? "cursor-default" : "cursor-move drag-handle"}`}
          style={{
            width: "120px",
            height: "26px",
            backgroundColor: "#8b8b8b",
            borderRadius: "6px 10px 0 0",
            clipPath: "polygon(0 100%, 0 20%, 6% 0, 88% 0, 100% 100%)",
            paddingLeft: "12px",
            paddingRight: "10px",
            touchAction: "none", // required for pointer events to fire on touch devices
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
            onPointerDown={(e) => e.stopPropagation()}
            onPointerUp={(e) => {
                e.stopPropagation();
                setActiveTabs((prev) => prev.filter((t) => t !== activeTab));
            }}
            style={{ outline: "none", color: "#e0fffe", fontSize: "10px", marginLeft: "4px", lineHeight: 1 }}
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