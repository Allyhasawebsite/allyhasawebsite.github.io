import Navbar from "./Navbar";

/* Testing */
const Header = ({ setActiveTabs, activeTabs }) => {



    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 font-mono text-[#28282B] text-xs">

            <Navbar setActiveTabs={setActiveTabs} activeTabs={activeTabs} />
            
                

        </header>
    )
}

export default Header;