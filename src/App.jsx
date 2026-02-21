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
    <>
      <Header setActiveTabs={setActiveTabs} activeTabs={activeTabs} />

      <main>
        App.jsx
      </main>

      {activeTabs.map(tab => (
        <Tab key={tab} activeTab={tab} activeTabs={activeTabs} setActiveTabs={setActiveTabs} />
      ))}

      <Footer />

    </>
  )
}

export default App;

