import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/Homepage/Banner/Banner'
import Players from './Components/Homepage/Players/Players';
import Navber from './Components/Navbar/Navber'

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};


function App() {

  const playersPromise = fetchPlayer();

  const [coin, setCoin] = useState(1500000);

  return (
    <>

      <Navber coin={coin} />
      <Banner />
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>} >
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin} />
      </Suspense >

    </>
  )
}

export default App
