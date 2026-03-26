import { Suspense } from 'react';
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


  return (
    <>

      <Navber />
      <Banner />
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>} >
        <Players playersPromise={playersPromise} />

      </Suspense >

    </>
  )
}

export default App
