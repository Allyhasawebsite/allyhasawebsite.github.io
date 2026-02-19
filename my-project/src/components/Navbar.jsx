/* Node Modules */
import { useRef, useEffect} from "react";
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
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

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
    activeBox.current.style.width = event.target.offsetWidth + 'px';
    activeBox.current.style.height = event.target.offsetHeight + 'px';
  }

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Photography',
      link: '#photography',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link'
    }
  ];

  return (
    <nav className={`
      fixed bottom-0 left-1/2 -translate-x-1/2 mb-4
      flex font-mono z-50 relative
      transition-all duration-300
      ${navOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto'}
    `}>

      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          onClick={activeCurrentLink}
          className={`
            relative px-4 py-1 text-sm
            outline outline-1 outline-[#28282B]
            -ml-px first:ml-0
            first:rounded-tl-lg first:rounded-bl-lg
            transition-colors duration-150 z-10
            ${className?.includes('active')
              ? 'bg-[#28282B] text-white'
              : 'bg-transparent text-[#28282B] hover:bg-[#28282B] hover:text-white'
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
        className="absolute bg-[#28282B] transition-all duration-300 rounded-sm z-0"
      />
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
}

export default Navbar;