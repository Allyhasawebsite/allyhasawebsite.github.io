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
    
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
    activeBox.current.style.width = event.target.offsetWidth + 'px';
    activeBox.current.style.height = event.target.offsetHeight + 'px';

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
            <div className="w-16 h-16 p-2 bg-white/5 rounded-md shadow-sm flex items-center justify-center transition-transform duration-150 group-hover:scale-105">
              <img src={`/images/icons/${icon}`} alt={label} className="w-full h-full object-contain" />
            </div>

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
