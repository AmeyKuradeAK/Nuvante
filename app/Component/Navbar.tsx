import React from 'react'
import Image from 'next/image'
import Logo from '../assets/logo.png'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className='flex flex-row justify-evenly text-black border-b-2 md:max-2xl:pt-10'>

            <div className='flex flex-row'>
                <div className='md:max-2xl:p-2 h-auto w-auto'>
                    <Image src={Logo} alt='Logo' height={45} width={45} />
                </div>
                <div className='md:max-2xl:text-3xl font-extrabold md:max-2xl:mt-1'>
                    Nuvante
                </div>
            </div>
            <div className='flex flex-row md:max-2xl:mt-3'>
                <div className='lg:max-2xl:mr-8 sm:max-lg:mr-2'>
                    Home
                </div>
                <div className='lg:max-2xl:mr-8 sm:max-lg:mr-2'>
                    Contact
                </div>
                <div className='lg:max-2xl:mr-8 sm:max-lg:mr-2'>
                    About
                </div>
                <div>
                    Products
                </div>
            </div>
            <div className='flex flex-row md:max-2xl:mt-3'>

                <div>
                    <input type="text" placeholder='What are you looking for?' />
                    <div>

                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>

        </nav>
    )
}

export default Navbar