import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const navIcons = [
    { src: '/assets/icons/search.svg', alt: 'search' },
    { src: '/assets/icons/black-heart.svg', alt: 'heart' },
    { src: '/assets/icons/user.svg', alt: 'user' },
]

const Navbar = () => {
  return (
   <header className='w-full'>
        <nav className='nav'>
            <Link href="/" className='flex items-center gap-1'>
                <Image src='/assets/icons/logo.svg' width={30} height={30} alt='logo' />
                <p className='nav-logo'>
                    Shop<span className='text-primary'>Stalker</span>
                </p>
            </Link>

            <div className='flex items-center gap-5'>
                {navIcons.map((icon, index) => (
                    <Image
                        key={icon.alt}
                        src={icon.src}
                        alt={icon.alt}
                        width={30}
                        height={30}
                        className='object-contain'
                    />
                )
                )}
            </div>

        </nav>
   </header>
  )
}

export default Navbar