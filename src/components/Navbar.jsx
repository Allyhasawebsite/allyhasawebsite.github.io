/* Node Modules */
import { useRef, useEffect} from "react";
import PropTypes from 'prop-types';

const Navbar = ({ navOpen, setActiveTabs, activeTabs }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  
  const initActiveBox = () => {
    // guard against missing refs
    if (!lastActiveLink.current || !activeBox.current) return;
    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  }

  // useEffect
  useEffect(() => {
    initActiveBox();
    window.addEventListener('resize', initActiveBox);
    return () => window.removeEventListener('resize', initActiveBox);
  }, []);

  // click active current link
  const activeCurrentLink = (event, tab) => {
    event.preventDefault();
    
    // ensure anchor is used even when children are clicked
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

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    if (isMobile) {
      // single-tab behavior on mobile: if already open, close then reopen to reset
      if (activeTabs.includes(tab)) {
        setActiveTabs([]);
        setTimeout(() => setActiveTabs([tab]), 50);
      } else {
        setActiveTabs([tab]);
      }
    } else {
      // desktop: allow multiple tabs; if already open, remove then re-add to "reopen" it
      if (activeTabs.includes(tab)) {
        // remove immediately, then re-add shortly after to remount
        setActiveTabs(prev => prev.filter(t => t !== tab));
        setTimeout(() => {
          setActiveTabs(prev => {
            // ensure not duplicated
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
    {
      label: 'About Me',
      link: '#about',
      className: 'nav-link',
      icon: 'about.png',
      tab: 'about'
    },
    {
      label: 'Design',
      link: '#design',
      className: 'nav-link',
      ref: lastActiveLink,
      icon: 'design.png',
      tab: 'design'
    },
    {
      label: 'Projection Mapping',
      link: '#projectionmapping',
      className: 'nav-link',
      icon: 'proj.png',
      tab: 'projmapping'
    },
    {
      label: '3D',
      link: '#3d',
      className: 'nav-link',
      icon: '3d.png',
      tab: '3d'
    },
    {
      label: 'Resume',
      link: '#resume',
      className: 'nav-link',
      icon: 'resume.png',
      tab: 'resume'
    },
    {
      label: 'Playground',
      link: '#playground',
      className: 'nav-link',
      icon: 'playground.png',
      tab: 'playground'
    },
    
  ];

  return (
    <nav className={`
      fixed bottom-3 left-1/2 -translate-x-1/2
      flex justify-center font-mono z-50
    `}>

      <div className="flex gap-3 px-4">
        {navItems.map(({ label, link, className, ref, tab, icon }, key) => (
          <a
            href={link}
            key={key}
            ref={ref}
            onClick={(e) => activeCurrentLink(e, tab)}
            aria-label={label}
            className={`
              group relative w-24 flex flex-col items-center px-2 py-3
              outline outline-1 outline-[#28282B] rounded-md
              first:rounded-tl-lg first:rounded-bl-lg
              last:rounded-tr-lg last:rounded-br-lg
              z-10 
              ${className?.includes('active')
                ? 'bg-[#282a2b] text-white'
                : 'text-[#28282B] hover:text-white'
              }
            `}
          >
            {/* larger square icon container for a desktop-icon feel */}
            <div className="w-20 h-20 p-2 bg-white/5 rounded-md flex items-center justify-center transition-transform duration-150 group-hover:scale-105">
              
              <img
                src={`/images/icons/${icon}`}
                alt={label}
                className="w-full h-full object-contain"
                onMouseEnter={e => e.currentTarget.src = `/images/icons/${icon.replace('.png', 'Hover.png')}`}
                onMouseLeave={e => e.currentTarget.src = `/images/icons/${icon}`}
              />
              
            </div>

            <span className="text-xs text-center leading-tight">{label}</span>

          </a>
        ))}
      </div>
 

       {/* Active box sits behind links, tracks the current active link */}
       <div
         ref={activeBox}
         className="absolute rounded-sm z-0"
       />
     </nav>
   );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  setActiveTabs: PropTypes.func.isRequired,
  activeTabs: PropTypes.array
}

export default Navbar;
