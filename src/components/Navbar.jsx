import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Navbar = () => {
    let [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 20; // Ubah angka ini sesuai kebutuhan scroll yang diinginkan
          if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [scrolled]);
  return (
    <>
      <header className={`fixed z-30 top-0 left-0 w-full py-3 md:py-5 transition-all duration-300 ${scrolled ? 'duration-500 shadow-md backdrop-blur-lg bg-slate-100' : ''}`}>
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-32">
                    <p className={`font-semibold text-2xl ${scrolled ? 'text-slate-900' : 'text-white'}`}>Furniture</p>            
                                  
                </div>

                <ul className='md:flex hidden md:flex-row flex-col gap-7 mt-10 md:mt-0'>
                        <li><a href="/" className={`text-md ${scrolled ? 'text-slate-900' : 'text-slate-200'}`}>Home</a></li>
                        <li><a href="#about" className={`text-md ${scrolled ? 'text-slate-900' : 'text-slate-200'}`}>About</a></li>
                        <li><a href="#galery" className={`text-md ${scrolled ? 'text-slate-900' : 'text-slate-200'}`}>Galery</a></li>
                        <li><a href="#products" className={`text-md ${scrolled ? 'text-slate-900' : 'text-slate-200'}`}>Products</a></li>     
                        <li><a href="#blog" className={`text-md ${scrolled ? 'text-slate-900' : 'text-slate-200'}`}>Blog</a></li>     
                 </ul>     

        

                <nav className={`z-20 absolute md:hidden lg:static duration-500 md:w-auto md:bg-transparand shadow-lg md:shadow-none top-0 left-0 w-full bg-slate-100 md:bg-transparent px-4 py-5 md:py-0 ${open ? 'top-0 pb-10' : 'top-[-1000%]'}`}>
                   <p className='md:hidden font-semibold text-2xl'>Relifgion</p>            
                    <ul className='flex md:hidden md:flex-row flex-col gap-7 mt-10 md:mt-0'>
                        <li><a href="/" className={`text-slate-900 text-md`}>Home</a></li>
                        <li><a href="#about" className={`text-slate-900 text-md`}>About</a></li>
                        <li><a href="#galery" className={`text-slate-900 text-md`}>Galery</a></li>
                        <li><a href="#products" className={`text-slate-900 text-md`}>Products</a></li>
                        <li><a href="#blog" className={`text-slate-900 text-md`}>Blog</a></li>
                    </ul>     

                    <div className="flex md:hidden text-slate-200 mt-9 items-center gap-6 pr-6 pt-3 lg:pr-10">
                         <div class="text-xl">
                            <div class="rounded-full py-2 bg-[#f9b82b] w-12 h-12 flex items-center justify-center">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </div>
                        </div>
                        <div class="text-xl">
                            <div class="rounded-full py-2 bg-[#f9b82b] w-12 h-12 flex items-center justify-center">
                                <ion-icon name="logo-tiktok"></ion-icon>
                            </div>
                        </div>
                        <div class="text-xl">
                            <div class="rounded-full py-2 bg-[#f9b82b] w-12 h-12 flex items-center justify-center">
                                <ion-icon name="logo-whatsapp"></ion-icon>
                            </div>
                        </div>
                    </div>
                </nav>
               
                <div class="text-white">
                <div class="sm:flex items-center lg:gap-10 hidden">
                    <div class="flex items-center gap-6 pr-6 pt-3 lg:pr-10">
                        <div class="text-xl">
                            <div class="rounded-full py-2 bg-[#f9b82b] w-12 h-12 flex items-center justify-center">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </div>
                        </div>
                        <div class="text-xl">
                            <div class="rounded-full py-2 bg-[#f9b82b] w-12 h-12 flex items-center justify-center">
                                <ion-icon name="logo-tiktok"></ion-icon>
                            </div>
                        </div>
                        <div class="text-xl">
                            <div class="rounded-full py-2 bg-[#f9b82b] w-12 h-12 flex items-center justify-center">
                                <ion-icon name="logo-whatsapp"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
                

            <div onClick={() => setOpen(!open)} className={`z-20 text-3xl pt-3 md:hidden ${open || scrolled ? 'text-slate-900' : 'text-white'}`}>
                <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>

            </div>
            
        </div>
     </header>
     
    </>
  )
}

export default Navbar