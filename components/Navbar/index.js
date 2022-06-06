import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faEnvelope, faUser, faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Navbar () {
  const [mobileMenu, setMobileMenu] = useState(false)
  const handleClick = () => setMobileMenu(!mobileMenu)

  return (
    <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 blue-background text-gray-300'>
      <div>
        <p className='text-pink-600 text-2xl'>Santiago Guastavino</p>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='navbar-li'>Home</li>
        <li className='navbar-li'>About</li>
        <li className='navbar-li'>Skills</li>
        <li className='navbar-li'>Work</li>
        <li className='navbar-li'>Contact</li>
      </ul>

      {/* hamburguer */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {mobileMenu === true
          ? <FontAwesomeIcon icon={faXmark} />
          : <FontAwesomeIcon icon={faBars} />
        }
      </div>

      {/* mobile menu */}
      {mobileMenu === true &&
        <ul className='absolute top-0 left-0 w-full h-screen blue-background flex flex-col justify-center items-center'>
          <li className='mobile-li'>Home</li>
          <li className='mobile-li'>About</li>
          <li className='mobile-li'>Skills</li>
          <li className='mobile-li'>Work</li>
          <li className='mobile-li'>Contact</li>
        </ul>
      }

      {/* social icons */}
      <ul className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <li className='social-li bg-blue-600'>
          <a href='/' className='social-a'>
            LinkedIn
            <FontAwesomeIcon icon={faLinkedin} className='social-svg mr-1' />
          </a>
        </li>
        <li className='social-li grey-blackground'>
          <a href='/' className='social-a'>
            GitHub
            <FontAwesomeIcon icon={faGithub} className='social-svg' />
          </a>
        </li>
        <li className='social-li cyan-blackground'>
          <a href='/' className='social-a'>
            Email
            <FontAwesomeIcon icon={faEnvelope} className='social-svg ml-2.5' />
          </a>
        </li>
        <li className='social-li lgrey-blackground'>
          <a href='/' className='social-a'>
            Resume
            <div className='relative'>
              <FontAwesomeIcon icon={faUser} className='relative social-svg mr-1' />
              <FontAwesomeIcon icon={faFile} className='absolute text-[25px] top-4 left-5 text-gray-400' />
            </div>
          </a>
        </li>
      </ul>
    </nav>
  )
}
