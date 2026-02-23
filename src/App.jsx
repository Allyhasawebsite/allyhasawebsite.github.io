import './App.css'

/** Node Modules */
import { useState } from 'react'

/** Components */
import Header from "./components/Header";
import Scroller from "./components/Scroller";
import Tab from "./components/Tab";

const App = () => {
  const [activeTabs, setActiveTabs] = useState([]);

  return (
    <>
      
      {/* ensure scroller is fixed at the top and above the background */}
      <div className="fixed top-0 left-0 w-full z-30">
        <Scroller />
      </div>
      

      {/* Background Video */}
      <div className="">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-15"
        >
          <source src="/background/logo.mp4" type="video/mp4" />
        </video>
      </div>

      <Header setActiveTabs={setActiveTabs} activeTabs={activeTabs} />

      {activeTabs.map(tab => (
        <Tab key={tab} activeTab={tab} activeTabs={activeTabs} setActiveTabs={setActiveTabs} />
      ))}


    </>
  )
}

export default App;

