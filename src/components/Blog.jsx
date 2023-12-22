import React from 'react'
import blog1 from '../images/blog1.jpeg'
import blog2 from '../images/blog2.jpeg'
import blog3 from '../images/blog3.jpeg'

const Blog = () => {
  return (
    <>
    <div className="container mx-auto max-w-lg text-center pt-20 mb-16 mt-10">
        <h1 className='text-4xl border-b-2 border-primary inline-block pb-2 mb-4'>Our Blogs</h1>
    </div>
    <div className="container my-6 px-8 md:px-0">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="" data-aos="fade-down" data-aos-delay="100">
                <img className='w-full h-[300px]' src={blog1} alt="" />
                <h2 className='text-slate-900 font-semibold mt-5 mb-4'>Furnitur dalam Meningkatkan Daya Saing Asosiasi Eksportir Furnitur Indonesia </h2>
                <p className='text-slate-700 text-[.9rem]'>memiliki peran penting dalam meningkatkan daya saing produk furnitur dari Indonesia di pasar global. Beberapa program dari Asmindo antara lain pelatihan desain, riset pasar produk furnitur, dan bantuan promosi...</p>
            </div>
            <div className="" data-aos="fade-down" data-aos-delay="200">
                <img className='w-full h-[300px]' src={blog2} alt="" />
                <h2 className='text-slate-900 font-semibold mt-5 mb-4'>Tren Furnitur Minimalis dan Modern jadi Favorit Negara Tujuan EksporBeberapa tahun terakhir</h2>
                <p className='text-slate-700 text-[.9rem]'>permintaan produk furnitur dengan desain minimalis dan modern kian meningkat dari para importir asing. Negara-negara seperti Amerika Serikat, Kanada, dan Australia menjadi pasar utama bagi produk furnitur jenis ini dari Indonesia...</p>
            </div>
            <div className="" data-aos="fade-down" data-aos-delay="300">
                <img className='w-full h-[300px]' src={blog3} alt="" />
                <h2 className='text-slate-900 font-semibold mt-5 mb-4'>Ekspor Furnitur Indonesia ke Pasar Global memiliki bahan baku berlimpah untuk pembuatan furnitur</h2>
                <p className='text-slate-700 text-[.9rem]'>seperti kayu jati, mahoni, akasia, dll. Selain itu, Indonesia juga memiliki sumber daya manusia yang terampil dalam produksi. Hal ini menjadikan potensi ekspor furnitur Indonesia cukup besar untuk memasok kebutuhan furniture dari importir global....</p>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Blog