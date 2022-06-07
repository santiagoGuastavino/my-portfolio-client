import Project from '../Project'
import myPortfolioImg from '../../public/images/web-screenshots/my-portfolio.jpg'
import reactTailwindImg from '../../public/images/web-screenshots/react-tailwind.jpg'
import tuiterImg from '../../public/images/web-screenshots/tuiter.jpg'
import parallaxImg from '../../public/images/web-screenshots/parallax.jpg'
import moviesReactReduxImg from '../../public/images/web-screenshots/movies-react-redux.jpg'
import gameCentralImg from '../../public/images/web-screenshots/game-central.jpg'

const projects = [
  {
    image: myPortfolioImg,
    demoLink: 'https://my-portfolio-santiagoguastavino.vercel.app/',
    codeLink: 'https://github.com/santiagoGuastavino/my-portfolio',
    title: 'Next.js, Tailwind CSS'
  },
  {
    image: reactTailwindImg,
    demoLink: 'https://smg-react-tailwind.herokuapp.com/',
    codeLink: 'https://github.com/santiagoGuastavino/react-tailwind',
    title: 'React.js, Tailwind CSS'
  },
  {
    image: tuiterImg,
    demoLink: 'https://tuiter.vercel.app/',
    codeLink: 'https://github.com/santiagoGuastavino/tuiter',
    title: 'Next.js, Firebase'
  },
  {
    image: parallaxImg,
    demoLink: 'https://smg-parallax.herokuapp.com/',
    codeLink: 'https://github.com/santiagoGuastavino/parallax-effect',
    title: 'React.js, react-spring'
  },
  {
    image: moviesReactReduxImg,
    demoLink: 'https://smg-movies-redux.herokuapp.com/',
    codeLink: 'https://github.com/santiagoGuastavino/movies-react-redux',
    title: 'React.js, Redux'
  },
  {
    image: gameCentralImg,
    demoLink: 'https://g6-game-central.herokuapp.com/',
    codeLink: 'https://github.com/matiasncocco/grupo_6_GameCentral',
    title: 'MERN Stack, MVC'
  }
]

export default function Work () {
  return (
    <main name='Work' className='blue-background w-full md:h-screen text-gray-300'>
      <section className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <article className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
          <p className='py-6'>Check out some of my latest projects.</p>
        </article>

        <article className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {
            projects.map((project, i) => (
              <Project
                key={i}
                image={project.image}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
                title={project.title}
              />
            ))
          }
        </article>

      </section>
    </main>
  )
}
