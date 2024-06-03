import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-100">
        <div className='container mx-auto xl:px-10 py-2'>
            <div className="grid grid-cols-2 text-black ">
                <div>
                    <img src="images/logo.png" width="100" alt="" />
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Address</li>
                        <li>Customer support</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer