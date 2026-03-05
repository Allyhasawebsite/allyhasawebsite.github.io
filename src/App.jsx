import './App.css'

/** Node Modules */
import { useState } from 'react'

/** Components */
import Header from "./components/Header";
import Scroller from "./components/Scroller";
import Tab from "./components/Tab";
import PageBorder from './components/Pageborder';

const App = () => {
  const [activeTabs, setActiveTabs] = useState([]);

  return (
    <>
      {/* Page Border*/}
      <PageBorder />

      {/* Scroller */}
      <div className="fixed top-0 left-0 w-full z-[10000]">
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

