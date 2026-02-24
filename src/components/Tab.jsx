import React, { useRef, useEffect, useState } from "react";

import AboutTab from "./tabs/AboutTab";
import DesignTab from "./tabs/DesignTab";
import ThreeDTab from "./tabs/ThreeDTab";
import ProjectionTab from "./tabs/ProjectionTab";


const Tab = ({ activeTab, setActiveTabs }) => {
  const folderRef = useRef(null);
  const tabHandleRef = useRef(null);
  const [pos, setPos] = useState({ top: null, left: null });

  const tabContent = {
        about:       <AboutTab />,
        design:      <DesignTab />,
        threeD:        <ThreeDTab />,
        projmapping: <ProjectionTab />,
    };

    const tabConfig = {
        about:       { width: "320px", top: "calc(100vh - 420px)", maxHeight: "400px" },
        design:      { width: "520px", top: "calc(100vh - 520px)", maxHeight: "400px" },
        threeD:      { width: "320px", top: "calc(100vh - 420px)", maxHeight: "400px" },
        projmapping: { width: "520px", top: "calc(100vh - 420px)", maxHeight: "500px" },
    };


  useEffect(() => {
    const elmnt = folderRef.current;
    const handle = tabHandleRef.current;
    if (!elmnt) return;

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const dragMouseDown = (e) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        // capture current real position on drag start
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

        let newTop = elmnt.offsetTop - pos2;
        let newLeft = elmnt.offsetLeft - pos1;

        const elWidth = elmnt.offsetWidth;
        const elHeight = elmnt.offsetHeight;

        const vw = window.innerWidth;
        const vh = window.innerHeight;

        // clamp to full viewport
        if (newTop < 0) newTop = 0;
        if (newLeft < 0) newLeft = 0;
        if (newTop + elHeight > vh) newTop = vh - elHeight;
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
  }, []);

  return (
    <div
      ref={folderRef}
      className="fixed select-none"
      style={{
        top: tabConfig[activeTab]?.top ?? "calc(100vh - 420px)",
        left: "50%",
        transform: "translateX(-50%)",
        width: tabConfig[activeTab]?.width ?? "320px",
        filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.15))",
        zIndex: 50,
      }}
    >
      {/* Folder tab label */}
      <div className="flex items-end" style={{ display: "flex", alignItems: "flex-end" }}>
        <div
          ref={tabHandleRef}
          className="cursor-move flex items-center justify-between drag-handle"
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
          borderRadius: "0 8px 8px 8px",
          padding: "3px",
        }}
      >
        {/* Inner content area */}
        <div
          style={{
            backgroundColor: "#e0fffe",
            borderRadius: "0 6px 6px 6px",
            minHeight: "200px",
            padding: "20px",
          }}
        >

          <div
            style={{
                backgroundColor: "#e0fffe",
                borderRadius: "0 6px 6px 6px",
                minHeight: "200px",
                maxHeight: tabConfig[activeTab]?.maxHeight ?? "400px",
                overflowY: "auto",
                padding: "20px",
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