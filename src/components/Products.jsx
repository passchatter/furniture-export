import React from 'react'

import produk1 from '../images/produkk1.jpeg'
import produk2 from '../images/produkk2.jpeg'
import produk3 from '../images/produkk3.jpeg'

import iklan1 from '../images/iklan.png'



const Products = () => {
  return (
   <>

    <div className="container pt-6 pb-28">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-28" data-aos="fade-up">
            <div className="">
            <h1 className='text-4xl leading-[3rem] mb-7 text-slate-900'>Top Exporter of Natural Rattan Products</h1>
            <p className='text-slate-700 text-[.9rem]'>Domestic rattan industry is expected to contribute foreign exchange as a period in 1988 when the rattan industry was victorious, because the current situation in 1988 is equal to the current situation that the government conducts a policy of protection by banning the export of raw rattan.</p>
            </div>
            <div className="relative" data-aos="fade-up" data-aos-delay="100">
            <img className='' src={iklan1} alt="" />
            </div>
        </div>
    </div>

    <div className="container py-14">
        <div className="md:flex items-center justify-between">
            <h1 className='text-4xl border-b-2 border-primary inline-block pb-2 mb-4 text-slate-900'>Our Products</h1>
            <div className="max-w-xl">
            <p className="text-slate-700 text-[.9rem] md:text-sm md:text-right">Explore our diverse range of exquisite rattan furniture, meticulously crafted to elevate your living space. Each piece is a testament to craftsmanship and artistry, adding elegance and charm to your home.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10 md:px-0 px-5">
            <div className="" data-aos="zoom-in" data-aos-delay="100">
                <img src={produk1} className="rounded-lg shadow-lg w-full h-[400px] md:h-[500px]" alt="" />
            </div>
            <div className="" data-aos="zoom-in" data-aos-delay="200">
                <img src={produk2} className="rounded-lg shadow-lg w-full h-[400px] md:h-[500px]" alt="" />
            </div>
            <div className="" data-aos="zoom-in" data-aos-delay="300">
                <img src={produk3} className="rounded-lg shadow-lg w-full h-[400px] md:h-[500px]" alt="" />
            </div>
        </div>

        <div className="flex justify-center items-center mt-10">
             <a href="#about" className='bg-[#f9b82b] px-5 py-3 rounded-lg text-white inline-block max-w-max text-center'>Download Catalog</a>
        </div>
    </div>

    <div class="relative h-[70vh] bg-cover bg-center bg-no-repeat bg-fixed bg-hero flex items-center text-center justify-center">
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="container relative">
            <h1 class="text-white leading-[3rem] text-3xl font-bold md:text-4xl">THE LARGEST EXPORTER OF NATURAL RATTAN PRODUCTS</h1>
        </div>
    </div>


   </>
  )
}

export default Products