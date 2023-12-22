import React from 'react'
import about1 from '../images/about1.jpeg'
import about2 from '../images/about2.jpeg'
import about3 from '../images/about3.jpg'

import produk1 from '../images/produk1.png'
import produk2 from '../images/produk2.png'
import produk3 from '../images/produk3.png'
import produk4 from '../images/produk4.png'
import produk5 from '../images/produk5.png'
import produk6 from '../images/produk6.png'

const About = () => {
  return (
    <>
     <div className="container pb-20 pt-14">
        <div className="grid md:grid-cols-4 grid-cols-3 lg:grid-cols-6 gap-5 mb-14 md:mb-32  justify-center items-center">
            <div className="bg-slate-100/35 mx-auto p-6 rounded-md shadow-md duration-300 hover:bg-primary" data-aos="fade-up" data-aos-delay="100">
                 <img className='w-[80px] text-center' src={produk1} alt="" />
            </div>
            <div className="bg-slate-100/35 mx-auto p-6 rounded-md shadow-md hover:bg-primary duration-300"  data-aos="fade-up" data-aos-delay="200">
                 <img className='w-[80px] text-center' src={produk2} alt="" />
            </div>
            <div className="bg-slate-100/35 mx-auto p-6 rounded-md shadow-md hover:bg-primary duration-300"  data-aos="fade-up" data-aos-delay="300">
                 <img className='w-[80px] text-center' src={produk3} alt="" />
            </div>
            <div className="bg-slate-100/35 mx-auto p-6 rounded-md shadow-md hover:bg-primary duration-300"  data-aos="fade-up" data-aos-delay="400">
                 <img className='w-[80px] text-center' src={produk4} alt="" />
            </div>
            <div className="bg-slate-100/35 mx-auto p-6 rounded-md shadow-md hover:bg-primary duration-300"  data-aos="fade-up" data-aos-delay="500">
                 <img className='w-[80px] text-center' src={produk5} alt="" />
            </div>
            <div className="bg-slate-100/35 mx-auto p-6 rounded-md shadow-md hover:bg-primary duration-300"  data-aos="fade-up" data-aos-delay="600">
                 <img className='w-[80px] text-center' src={produk6} alt="" />
            </div>
        </div>
        <div className="md:flex grid grid-cols-1 md:justify-between items-center md:pt-0 pt-10 mb-20 gap-10">
            <div className="max-w-xl" data-aos="fade-right" data-aos-delay="100">
                <h1 className='text-slate-900 text-4xl leading-[3rem]'>Indonesia's Premier Exporter and Prominent Producer"</h1>
                <p className='text-slate-400 text-[.9rem] mt-4 leading-5'>Indonesia is a country that producing rattan commodity for the world. Almost every year about 80% of raw rattan canes absorbed by the industry in many parts of the world come from Indonesia. Rattan is an industrial raw material classified as environmentally friendly, so that the industrial products directly processed rattan is also an environmentally friendly product.</p>

            </div>
            <div className="grid grid-cols-2 gap-3" data-aos="fade-left" data-aos-delay="400">
                <div className="flex flex-col gap-3">
                    <img src={about1} className="w-full h-auto" alt="" />
                    <div className="w-[200px] h-[150px] bg-primary  self-end text-white font-bold flex items-center justify-center">
                        <div className="text-center">
                            <h1 className='text-3xl'>122++</h1>
                            <p>happy clients</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="w-[200px] h-[150px] bg-primary text-white font-bold flex items-center justify-center">
                        <div className="text-center">
                            <h1 className='text-3xl'>50++</h1>
                            <p>professional</p>
                        </div>
                    </div>
                    <img src={about2} className="w-full h-auto" alt="" />
                </div>
            </div>
        </div>
     </div>
     <div className="pb-16 bg-[#484545]">
        <div className="md:flex grid grid-cols-1 items-center gap-7">
            <img src={about3} alt="" className='mt-[-5rem] w-[500px] h-[400px] md:h-[500px]' />
            <div className="max-w-lg mx-auto container py-10 md:py-0">
                <h1 className='text-white text-3xl mb-4' data-aos="fade-up" data-aos-delay="100">"20 Years of Experience in Natural Rattan Products"</h1>
                <p className='text-slate-200 text-[.9rem]' data-aos="fade-up" data-aos-delay="500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam alias a voluptas recusandae, eius animi provident reiciendis eligendi iste ea, quam nobis molestias cum corrupti repudiandae sapiente totam tempora optio?</p>
            </div>
        </div>
     </div>
    
    </>
  )
}

export default About