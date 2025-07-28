import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-container flex justify-center">
            <div className="flex flex-col justify-center items-center">
                <p className='text-center md:text-end'>
                    © {new Date().getFullYear} Saksham | Agarwal
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer