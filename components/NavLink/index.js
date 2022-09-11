import { Link } from 'react-scroll'

export default function NavLink ({ link, mobile, setMobileMenu }) {
  const handleClick = () => {
    mobile && setMobileMenu(false)
  }

  return (
    <li className={mobile ? 'mobile-li' : 'navbar-li'}>
      <Link onClick={handleClick} to={link} smooth={true} duration={500}>
        {link}
      </Link>
    </li>
  )
}
