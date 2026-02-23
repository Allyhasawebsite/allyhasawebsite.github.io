import React, { useRef, useEffect } from 'react';

const tabContent = {
    home:        <p>Home content here</p>,
    about:       <p>About content here</p>,
    work:        <p>Work content here</p>,
    photography: <p>Photography content here</p>,
    contact:     <p>Contact content here</p>,
};

const Tab = ({ activeTab, setActiveTabs }) => {

    const footerRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        const elmnt = footerRef.current;
        const header = headerRef.current;
        if (!elmnt) return;

        let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

        const dragMouseDown = (e) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        };

        const elementDrag = (e) => {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            // calculate new positions
            let newTop = elmnt.offsetTop - pos2;
            let newLeft = elmnt.offsetLeft - pos1;

            // get element dimensions
            const rect = elmnt.getBoundingClientRect();
            const elWidth = rect.width;
            const elHeight = rect.height;

            // get viewport dimensions
            const vw = window.innerWidth;
            const vh = window.innerHeight;

            // clamp values so the element stays in viewport
            if (newTop < 0) newTop = 0;
            if (newLeft < 0) newLeft = 0;
            if (newTop + elHeight > vh) newTop = vh - elHeight;
            if (newLeft + elWidth > vw) newLeft = vw - elWidth;

            // apply
            elmnt.style.top = newTop + "px";
            elmnt.style.left = newLeft + "px";
        };


        const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
        };

        // attach to header if it exists
        if (header) {
        header.onmousedown = dragMouseDown;
        } else {
        elmnt.onmousedown = dragMouseDown;
        }

        return () => {
        if (header) {
            header.onmousedown = null;
        } else {
            elmnt.onmousedown = null;
        }
        };
    }, []);

    return (

        <div
          ref={footerRef}
          id="mydiv"
          className="fixed left-1/2 -translate-x-1/2 w-72 bg-white/95 rounded-xl shadow-lg border border-gray-200 cursor-default"
          style={{ top: "calc(100vh - 400px)" }}
        >
          {/* protruding small tab (upper-left) — this is the drag handle */}
          <div className="relative">
            <div
              ref={headerRef}
              id="mydivheader"
              className="absolute -top-3 left-4 w-36 h-8 bg-gray-100 rounded-t-md rounded-b-md shadow-sm flex items-center justify-between px-3 cursor-move select-none"
            >
              <span className="text-sm font-medium text-gray-800 truncate">{activeTab}</span>
              <button
                onMouseDown={(e) => e.stopPropagation()}
                onClick={() => setActiveTabs(prev => prev.filter(t => t !== activeTab))}
                className="text-gray-600 hover:text-gray-800 ml-2"
                aria-label={`Close ${activeTab}`}
              >
                ✕
              </button>
            </div>

            {/* main panel body */}
            <div className="pt-6 pb-4 px-4 rounded-xl">
              <div className="min-h-[80px]">
                {tabContent[activeTab]}
              </div>
            </div>
          </div>
        </div>

    );
};

export default Tab;