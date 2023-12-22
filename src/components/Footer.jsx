import React from 'react'

const Footer = () => {
  return (
    <>
     <div class="footer md:pt-32 md:pb-20 pt-20 pb-14 bg-[#484545] text-[#bbb] text-[.9rem] mt-20">
        <div class="container">
            <div class="grid gap-5 md:grid-cols-2 md:gap-10 lg:flex md:justify-between">
                <div class="header max-w-sm">
                    <div class="flex items-center gap-3">
                       
                        <h1 class="text-xl text-white">Furniture</h1>
                    </div>
                    <p class="mt-3">Indonesia is a country that producing rattan commodity for the world. Almost every year about 80% of raw rattan canes absorbed by the industry in many parts of the world come from Indonesia.</p>
                </div>
    
                <div class="lg:max-w-[250px]">
                    <h1 class="text-white text-xl mb-3">Contact Us</h1>
                    <p class="mb-2">Jimbaran, kuta selatan, Badung</p>
                    <p class="flex items-center mb-2 gap-2" ><ion-icon name="mail" class="text-white text-xl"></ion-icon> <a href="mailto:coconutbaliexport@gmail.com" target="_blank">furnitureBali@gmail.com</a></p>
                    <p class="flex items-center mb-2 gap-2" ><ion-icon name="call" class="text-white text-xl"></ion-icon> +12345678</p>
                </div>

                <div class="">
                    <h1 class="text-white text-xl mb-3">quick link</h1>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#product">Product</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="">
                    <h1 class="text-white text-xl mb-3">working hours</h1>
                    <p class="mb-2">mon-fri 9am-5pm</p>
                    <p class="mb-2">sat & sun we are closed</p>
                </div>
            </div>

            <p class="text-center md:mt-28 mt-20">Copyright 2023 <span class="text-orange-400">furnitureBali</span> All Rights Reserved</p>
        </div>
    </div>
    </>
  )
}

export default Footer