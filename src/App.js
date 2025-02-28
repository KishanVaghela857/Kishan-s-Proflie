import { Routes, Route } from "react-router-dom";
import MainHme from './Components/MainHome/MainHome';
import Navbar from './Components/navbar/Navbar';
import Journy from './Components/JournyData/Journy';
import Footer from './Components/MainHome/Footer/Footer';
import './App.css';
import Loader from "./Components/Loader/Loader";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar title="Kishan's Profile" />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<MainHme />} />
            <Route path="/journey" element={<Journy />} />
            <Route path="*" element={<Journy />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
