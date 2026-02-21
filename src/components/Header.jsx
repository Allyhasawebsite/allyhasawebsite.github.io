import Navbar from "./Navbar";

/* Testing */
const Header = ({ setActiveTabs, activeTabs }) => {

    const date = new Date();

    const month = date.toLocaleString('default', { month: 'short' });
    const showDay = date.getMonth() + " " + month + " " + date.getFullYear();
    const showTime = date.getHours() + ":" + date.getMinutes();

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 font-mono text-[#28282B] text-xs">

            <Navbar setActiveTabs={setActiveTabs} activeTabs={activeTabs} />
            
            <div className="md:justify-self-center absolute top-0 right-0 font-mono">
                
                <button className=" rounded-bl-lg outline-[#28282B] outline-solid">
                    {showDay}
                </button>

                <button className=" outline-[#28282B] outline-solid ">
                    {showTime}
                </button>

            </div>

            <div className="md:justify-self-center absolute top-0 left-0">
                
                <button className=" rounded-br-lg outline-solid outline-[#28282B]">
                    Made by Allyanna's Brother
                </button>

            </div>
                

        </header>
    )
}

export default Header;