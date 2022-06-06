import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import NavLink from '../NavLink'

const links = [
  'Home',
  'About',
  'Skills',
  'Work',
  'Contact'
]

export default function Navbar () {
  const [mobileMenu, setMobileMenu] = useState(false)
  const handleClick = () => setMobileMenu(!mobileMenu)

  return (
    <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 blue-background text-gray-300 z-10'>
      <div>
        <p className='text-pink-600 text-2xl'>Santiago Guastavino</p>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        {
          links.map((link, i) => (
            <NavLink
              key={i}
              link={link}
            />
          ))
        }
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
          {
            links.map((link, i) => (
              <NavLink
                key={i}
                link={link}
                mobile
                setMobileMenu={setMobileMenu}
              />
            ))
          }
        </ul>
      }
    </nav>
  )
}
