import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope
  // faUser,
  // faFile
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

export default function Socials () {
  return (
    <ul className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <li className='social-li bg-blue-600'>
        <a href='https://www.linkedin.com/in/smguastavino/' target='_blank' rel='noreferrer' className='social-a'>
          LinkedIn
          <FontAwesomeIcon icon={faLinkedin} className='social-svg mr-1' />
        </a>
      </li>
      <li className='social-li grey-blackground'>
        <a href='https://github.com/santiagoGuastavino' target='_blank' rel='noreferrer' className='social-a'>
          GitHub
          <FontAwesomeIcon icon={faGithub} className='social-svg' />
        </a>
      </li>
      <li className='social-li cyan-blackground'>
        <Link to='Contact' smooth={true} duration={500} className='social-a cursor-pointer'>
          Email
          <FontAwesomeIcon icon={faEnvelope} className='social-svg ml-2.5' />
        </Link>
      </li>
      {/* <li className='social-li lgrey-blackground'>
        <a href='/' className='social-a'>
          Resume
          <div className='relative'>
            <FontAwesomeIcon icon={faUser} className='relative social-svg mr-1' />
            <FontAwesomeIcon icon={faFile} className='absolute text-[25px] top-4 left-5 text-gray-400' />
          </div>
        </a>
      </li> */}
    </ul>
  )
}
