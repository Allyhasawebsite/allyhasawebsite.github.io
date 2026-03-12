/* Node Modules */
import { useRef, useEffect, useState } from "react";
import PropTypes from 'prop-types';

const MOBILE_PAGE_SIZE = 3;

const Navbar = ({ navOpen, setActiveTabs, activeTabs }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const [mobileOffset, setMobileOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const navContainerRef = useRef();

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Swipe handling for mobile
  useEffect(() => {
    const container = navContainerRef.current;
    if (!container || !isMobile) return;

    const handleTouchStart = (e) => {
      touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].screenX;
      const diff = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 30; // Minimum distance to trigger swipe

      if (Math.abs(diff) < minSwipeDistance) return;

      if (diff > 0) {
        // Swiped left
        setMobileOffset(o => Math.min(navItems.length - MOBILE_PAGE_SIZE, o + 1));
      } else {
        // Swiped right
        setMobileOffset(o => Math.max(0, o - 1));
      }
    };

    container.addEventListener('touchstart', handleTouchStart, false);
    container.addEventListener('touchend', handleTouchEnd, false);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart, false);
      container.removeEventListener('touchend', handleTouchEnd, false);
    };
  }, [isMobile]);

  const initActiveBox = () => {
    if (!lastActiveLink.current || !activeBox.current) return;
    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  }

  useEffect(() => {
    initActiveBox();
    window.addEventListener('resize', initActiveBox);
    return () => window.removeEventListener('resize', initActiveBox);
  }, []);

  const activeCurrentLink = (event, tab) => {
    event.preventDefault();
    const target = event.currentTarget;

    lastActiveLink.current?.classList.remove('active');
    target.classList.add('active');
    lastActiveLink.current = target;

    if (activeBox.current) {
      activeBox.current.style.top = target.offsetTop + 'px';
      activeBox.current.style.left = target.offsetLeft + 'px';
      activeBox.current.style.width = target.offsetWidth + 'px';
      activeBox.current.style.height = target.offsetHeight + 'px';
    }

    const mobile = typeof window !== 'undefined' && window.innerWidth < 768;

    if (mobile) {
      if (activeTabs.includes(tab)) {
        setActiveTabs([]);
        setTimeout(() => setActiveTabs([tab]), 50);
      } else {
        setActiveTabs([tab]);
      }
    } else {
      if (activeTabs.includes(tab)) {
        setActiveTabs(prev => prev.filter(t => t !== tab));
        setTimeout(() => {
          setActiveTabs(prev => {
            if (prev.includes(tab)) return prev;
            return [...prev, tab];
          });
        }, 50);
      } else {
        setActiveTabs(prev => [...prev, tab]);
      }
    }
  }

  const navItems = [
    { label: 'About Me',           mobileLabel: 'About',      link: '#about',             className: 'nav-link', icon: 'about.png',      tab: 'about'       },
    { label: 'Design',             mobileLabel: 'Design',     link: '#design',            className: 'nav-link', ref: lastActiveLink,    icon: 'design.png', tab: 'design'      },
    { label: 'Projection Mapping', mobileLabel: 'Projection', link: '#projectionmapping', className: 'nav-link', icon: 'proj.png',       tab: 'projmapping' },
    { label: '3D',                 mobileLabel: '3D',         link: '#3d',                className: 'nav-link', icon: '3d.png',         tab: 'threeD'      },
    { label: 'Demo',               mobileLabel: 'Demo',       link: '#demo',              className: 'nav-link', icon: 'demo.png',       tab: 'demo'        },
    { label: 'Resume',             mobileLabel: 'Resume',     link: '#resume',            className: 'nav-link', icon: 'resume.png',     tab: 'resume'      },
    { label: 'Playground',         mobileLabel: 'Playground', link: '#playground',        className: 'nav-link', icon: 'playground.png', tab: 'playground'  },
  ];

  const maxOffset = navItems.length - MOBILE_PAGE_SIZE;
  const visibleItems = isMobile
    ? navItems.slice(mobileOffset, mobileOffset + MOBILE_PAGE_SIZE)
    : navItems;

  const canGoLeft  = mobileOffset > 0;
  const canGoRight = mobileOffset < maxOffset;

  // Fixed dimensions so every item is identical
  const ITEM_W = isMobile ? "80px"  : "96px";
  const ITEM_H = isMobile ? "120px" : "140px";
  const ICON_W = isMobile ? "56px"  : "80px";
  const ICON_H = isMobile ? "56px"  : "80px";

  return (
    // mb-6 = 24px bottom margin so nav doesn't hug the screen edge
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 flex justify-center font-mono z-50 mb-6">

      <div ref={navContainerRef} className="flex items-center gap-3 px-4">

        {/* NAV ITEMS — all same fixed width + height */}
        {visibleItems.map((item) => {
          const { label, mobileLabel, link, className, ref, tab, icon } = item;
          return (
            <a
              href={link}
              key={tab}
              ref={ref}
              onClick={(e) => activeCurrentLink(e, tab)}
              aria-label={label}
              className={`
                group relative flex flex-col items-center justify-center
                rounded-md z-10 gap-2
                ${className?.includes('active')
                  ? 'bg-[#282a2b] text-white'
                  : 'text-[#28282B] hover:text-white'
                }
              `}
              style={{ width: ITEM_W, height: ITEM_H, flexShrink: 0 }}
            >
              {/* Icon box — fixed size */}
              <div
                className="p-2 bg-white/5 rounded-md flex items-center justify-center transition-transform duration-150 group-hover:scale-105"
                style={{ width: ICON_W, height: ICON_H, flexShrink: 0 }}
              >
                <img
                  src={`/images/icons/${icon}`}
                  alt={label}
                  className="w-full h-full object-contain"
                  onMouseEnter={e => e.currentTarget.src = `/images/icons/${icon.replace('.png', 'Hover.png')}`}
                  onMouseLeave={e => e.currentTarget.src = `/images/icons/${icon}`}
                />
              </div>

              {/* Label — fixed 2-line area so height never varies */}
              <span
                className="text-xs text-center leading-tight"
                style={{ width: "100%", height: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {isMobile && mobileLabel ? mobileLabel : label}
              </span>
            </a>
          );
        })}

      </div>

      {/* Page indicator dots - mobile only */}
      {isMobile && (
        <div
          style={{
            position: "absolute",
            bottom: "-14px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "4px",
            alignItems: "center",
          }}
        >
          {Array.from({ length: maxOffset + 1 }).map((_, i) => (
            <div
              key={i}
              onClick={() => setMobileOffset(i)}
              style={{
                width: i === mobileOffset ? "16px" : "4px",
                height: "4px",
                borderRadius: "2px",
                backgroundColor: i === mobileOffset ? "#8b8b8b" : "#8b8b8b44",
                transition: "all 0.2s",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}

      {/* Active box */}
      <div ref={activeBox} className="absolute rounded-sm z-0" />
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  setActiveTabs: PropTypes.func.isRequired,
  activeTabs: PropTypes.array
}

export default Navbar;