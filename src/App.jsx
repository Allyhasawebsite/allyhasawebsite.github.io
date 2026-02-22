import './App.css'

/** Node Modules */
import { useState } from 'react'

/** Components */
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tab from "./components/Tab";

const App = () => {
  const [activeTabs, setActiveTabs] = useState([]);

  return (
    <div className="">

      <Footer />

      {/* Background Video */}
      <div className="">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-15"
        >
          <source src="/public/background/logo.mp4" type="video/mp4" />
        </video>
      </div>


      <Header setActiveTabs={setActiveTabs} activeTabs={activeTabs} />

      <main className="text-black">
        App.jsx
      </main>

      {activeTabs.map(tab => (
        <Tab key={tab} activeTab={tab} activeTabs={activeTabs} setActiveTabs={setActiveTabs} />
      ))}

      

    </div>
  )
}

export default App;

