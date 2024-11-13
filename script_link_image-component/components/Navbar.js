import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <div className="nav flex justify-between p-4 bg-green-600 text-lg font-bold">
                <div className="logo">NAVBAR</div>
                <ul className='flex gap-3'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul >
             </div >
        </div >
    )
}

export default Navbar