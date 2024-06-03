import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="py-2 xl:px-10 bg-sky-500">
        <div className="container mx-auto flex items-center justify-between">
            <div><img src="images/logo.png" alt="" width="100"/></div>
            <nav className="flex gap-5 text-white font-medium">
                <span>Home</span><span>All Product</span><span>Men</span><span>Women</span>
                <button className="relative">Cart <span className="text-yellow-500 font-bold absolute top-[-5px] right-[-15px]">0</span></button>
                {/* <Link to="/cart"></Link> */}
            </nav>
        </div>
    </header>
  )
}

export default Navbar