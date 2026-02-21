/* Node Modules */
import { useRef, useEffect} from "react";
import PropTypes from 'prop-types';

const Navbar = ({ navOpen, setActiveTabs, activeTabs }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  
  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  }

  useEffect(initActiveBox, []);
  window.addEventListener('resize', initActiveBox);

  const activeCurrentLink = (event, tab) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
    activeBox.current.style.width = event.target.offsetWidth + 'px';
    activeBox.current.style.height = event.target.offsetHeight + 'px';

    // only add if not already open
    setActiveTabs(prev => prev.includes(tab) ? prev : [...prev, tab]);
  }

  const navItems = [
    {
      label: 'About Me',
      link: '#about',
      className: 'nav-link',
      tab: 'about'
    },
    {
      label: 'Design',
      link: '#design',
      className: 'nav-link',
      ref: lastActiveLink,
      tab: 'design'
    },
    {
      label: 'Projection Mapping',
      link: '#projectionmapping',
      className: 'nav-link',
      tab: 'projmapping'
    },
    {
      label: '3D',
      link: '#3d',
      className: 'nav-link',
      tab: '3d'
    },
    
  ];

  return (
    <nav className={`
      fixed bottom-0 left-1/2 -translate-x-1/2 mb-4
      flex font-mono z-50 relative
    `}>

      {navItems.map(({ label, link, className, ref, tab }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          onClick={(e) => activeCurrentLink(e, tab)}
          className={`
            relative px-4 py-1 text-sm
            outline outline-1 outline-[#28282B]
            -ml-px first:ml-0
            first:rounded-tl-lg first:rounded-bl-lg
            z-10
            ${className?.includes('active')
              ? 'bg-[#282a2b] text-white'
              : 'bg-transparent text-[#28282B] hover:text-white'
            }
          `}
        >
          {label}
        </a>
      ))}

      <a
        href="/images/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative px-4 py-1 text-sm
          outline outline-1 outline-[#28282B]
          -ml-px
          rounded-tr-lg rounded-br-lg
          bg-transparent text-[#28282B]
          hover:bg-[#28282B] hover:text-white
          transition-colors duration-150 z-10
        "
      >
        Resume
      </a>

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
