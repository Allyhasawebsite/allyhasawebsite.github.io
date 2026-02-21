import React, { useRef, useEffect } from 'react';

const tabContent = {
    home:        <p>Home content here</p>,
    about:       <p>About content here</p>,
    work:        <p>Work content here</p>,
    photography: <p>Photography content here</p>,
    contact:     <p>Contact content here</p>,
};

const Tab = ({ activeTab, activeTabs, setActiveTabs }) => {



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

        <div ref={footerRef} id="mydiv" className="absolute left-1/2 rounded-lg -translate-x-1/2 w-40 bg-sky-400 cursor-move p-2" style={{ top: "calc(100vh - 100px)" }}>

            <div ref={headerRef} id="mydivheader" className="bg-sky-600 text-white p-1 cursor-move flex justify-between">
                <span>{activeTab}</span>
                
                <button onMouseDown={(e) => e.stopPropagation()} onClick={() => setActiveTabs(prev => prev.filter(t => t !== activeTab))}>
                    ✕
                </button>

            </div>

            <div>{tabContent[activeTab]}</div>

        </div>

    );
};

export default Tab;