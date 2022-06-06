import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Main () {
  return (
    <main name='main' className='w-full h-screen blue-background'>
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
        <p className='color-gray py-4 max-w[700px]'>
          Skilled in writing clean code. Proficient in mobile-first responsive design development. Good knowledge of Javascript and web-based technologies. Quick learner, responsible and self-motivated. Passionate about making my workspace follow my own guidelines.
        </p>
        <div>
          <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 button-animation duration-300'>
            Check out my work
            <span className='ml-5 duration-300'>
              <FontAwesomeIcon icon={faPlay} />
            </span>
          </button>
        </div>
      </section>
    </main>
  )
}
