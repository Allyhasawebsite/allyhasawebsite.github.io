import React, { useRef, useEffect } from 'react';

const Tab = () => {
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

        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
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
            className="absolute left-1/2 rounded-lg -translate-x-1/2 w-40 bg-sky-400 cursor-move p-2"
            style={{ top: "calc(100vh - 100px)" }} // adjust height offset
        >

        <div ref={headerRef} 
                id="mydivheader"
                className="bg-sky-600 text-white p-1 cursor-move" >
            Footer 

        </div>

        <p> Testing </p>

        </div>

    );
};

export default Tab;