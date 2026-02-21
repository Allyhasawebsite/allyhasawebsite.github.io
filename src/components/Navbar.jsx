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

  // replace separate useEffect + global listener with a single effect + cleanup
  useEffect(() => {
    initActiveBox();
    window.addEventListener('resize', initActiveBox);
    return () => window.removeEventListener('resize', initActiveBox);
  }, []);

  // use currentTarget so clicks on the <img> still target the anchor
  const activeCurrentLink = (event, tab) => {
    const target = event.currentTarget;
    lastActiveLink.current?.classList.remove('active');
    target.classList.add('active');
    lastActiveLink.current = target;

    activeBox.current.style.top = target.offsetTop + 'px';
    activeBox.current.style.left = target.offsetLeft + 'px';
    activeBox.current.style.width = target.offsetWidth + 'px';
    activeBox.current.style.height = target.offsetHeight + 'px';

    // only add if not already open
    setActiveTabs(prev => prev.includes(tab) ? prev : [...prev, tab]);
  }

  const navItems = [
    {
      label: 'About Me',
      link: '#about',
      className: 'nav-link',
      // icon file name inside public/images/icons
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
      icon: 'projection.png',
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
    
  ];

  return (
    <nav className={`
      fixed bottom-0 left-1/2 -translate-x-1/2 mb-4
      flex font-mono z-50 relative
    `}>

      {navItems.map(({ label, link, className, ref, tab, icon }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          onClick={(e) => activeCurrentLink(e, tab)}
          aria-label={label}
          className={`
            relative px-4 py-1 text-sm
            outline outline-1 outline-[#28282B]
            -ml-px first:ml-0
            first:rounded-tl-lg first:rounded-bl-lg
            last:rounded-tr-lg last:rounded-br-lg
            z-10
            ${className?.includes('active')
              ? 'bg-[#282a2b] text-white'
              : 'bg-transparent text-[#28282B] hover:text-white'
            }
          `}
        >
          {/* show icon from public/images/icons; replace filenames above to match your files */}
          <img src={`/images/icons/${icon}`} alt="" className="w-5 h-5 inline-block" />
          {/* keep label for screen readers */}
          <span className="sr-only">{label}</span>
        </a>
      ))}


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
