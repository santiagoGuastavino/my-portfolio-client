import Project from '../Project'

const fileURL = '/images/project/'

const projects = [
  {
    link: 'https://simple-sample.vercel.app/',
    title: 'Simple Sample.',
    image: fileURL + 'simple-sample.jpg'
  },
  {
    link: 'https://tuiter.vercel.app',
    title: 'tuiter',
    image: fileURL + 'tuiter.jpg'
  },
  {
    link: 'https://photography-portfolio-9x7c.onrender.com/',
    title: 'Photography Portfolio',
    image: fileURL + 'photography-portfolio.jpg'
  },
  {
    link: 'https://pimienta-y-sal-7k17.onrender.com/',
    title: 'Pimienta & Sal',
    image: fileURL + 'pimienta-y-sal.jpg'
  },
  {
    link: 'https://movies-react-redux.vercel.app/',
    title: 'My Movie App',
    image: fileURL + 'movies-react-redux.jpg'
  },
  {
    link: 'https://movies-mvc.onrender.com/',
    title: 'Movies',
    image: fileURL + 'movies-mvc.jpg'
  },
  {
    link: 'https://mercado-liebre-rvel.onrender.com/',
    title: 'Mercado Liebre',
    image: fileURL + 'mercado-liebre.jpg'
  },
  {
    link: 'https://parallax-effect-six.vercel.app/',
    title: 'Parallax Effect',
    image: fileURL + 'parallax-effect.jpg'
  },
  {
    link: 'https://game-central.onrender.com/',
    title: 'Game Central',
    image: fileURL + 'game-central.jpg'
  }
]

export default function Work () {
  return (
    <main name='Work' className='w-full h-screen blue-background text-gray-300'>
    <section className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <article>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
          Work
        </p>
        <p className='py-4'>
          Check out my latest projects.
        </p>
      </article>

      <article className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-center py-2 md:py-8'>
        {
          projects.map((project, i) => (
            <Project
              key={i}
              link={project.link}
              title={project.title}
              image={project.image}
            />
          ))
        }
      </article>
    </section>
  </main>
  )
}
