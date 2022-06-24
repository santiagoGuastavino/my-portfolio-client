import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

export default function Main () {
  return (
    <main name='Home' className='w-full h-screen blue-background'>
      <section className='max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>
          Hi, my name is
        </p>
        <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold color-wwhite'>
          Santiago Guastavino
        </h1>
        <h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold color-gray'>
          I&apos;m a Full Stack Web Developer
        </h2>
        <p className='color-gray pt-4 max-w[700px]'>
          Skilled in writing clean code.
        </p>
        <p className='color-gray max-w[700px]'>
          Proficient in mobile-first responsive design development.
        </p>
        <p className='color-gray max-w[700px]'>
          Good knowledge of Javascript and web-based technologies.
        </p>
        <p className='color-gray pb-4 max-w[700px]'>
          Quick learner, responsible and self-motivated.
        </p>
        <div>
          <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 button-animation duration-300'>
            <Link to='Work' smooth={true} duration={500}>
              Check out my work
            </Link>
            <span className='ml-5 duration-300'>
              <FontAwesomeIcon icon={faPlay} />
            </span>
          </button>
        </div>
      </section>
    </main>
  )
}
