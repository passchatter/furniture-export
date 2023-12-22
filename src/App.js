import './App.css';
import Home from './pages/Home';
import contact from '../src/images/whatapp.png'

import { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';


function App() {

  useEffect(()=>{
    Aos.init()
  },[])

  return (
   <>

    <a href="" target="_blank" className="fixed md:bottom-10 md:right-10 bottom-7 right-4 z-50 animate-bounce">
        <div className="flex gap-1 items-center">
            <p className="bg-[#fafafa] shadow-md text-titleColor px-3 py-2  rounded-xl">Contact Us</p>
            <img src={contact} alt="" className="w-[55px] md:w-[60px]"/>
        </div>
    </a>
   
    <div className='overflow-hidden'>
       <Home/>
    </div>
   </>
  );
}

export default App;
