import Project from '../Project'

const fileURL = '/images/web-screenshots/'

const projects = [
  {
    image: fileURL + 'blogs.jpg',
    demoLink: 'https://blogs-mern-client.herokuapp.com/',
    codeLink: 'https://github.com/santiagoGuastavino/blogs-mern-client',
    title: 'MERN Stack',
    stack: ['Node.js', 'React.js', 'react-router-dom', 'Font Awesome React Component', 'Redux', 'Redux Toolkit']
  },
  {
    image: fileURL + 'react-tailwind.jpg',
    demoLink: 'https://smg-react-tailwind.herokuapp.com/',
    codeLink: 'https://github.com/santiagoGuastavino/react-tailwind',
    title: 'React.js, Tailwind CSS',
    stack: ['Node.js', 'React.js', 'react-typed', 'React Icons', 'Tailwind CSS']
  },
  {
    image: fileURL + 'tuiter.jpg',
    demoLink: 'https://tuiter.vercel.app/',
    codeLink: 'https://github.com/santiagoGuastavino/tuiter',
    title: 'Next.js, Firebase',
    stack: ['Node.js', 'Next.js', 'Firebase', 'Firebase Auth', 'Cloud Firestore', 'Firebase Admin SDK']
  },
  {
    image: fileURL + 'parallax.jpg',
    demoLink: 'https://smg-parallax.herokuapp.com/',
    codeLink: 'https://github.com/santiagoGuastavino/parallax-effect',
    title: 'React.js, react-spring',
    stack: ['Node.js', 'React.js', 'react-spring']
  },
  {
    image: fileURL + 'movies-react-redux.jpg',
    demoLink: 'https://smg-movies-redux.herokuapp.com/',
    codeLink: 'https://github.com/santiagoGuastavino/movies-react-redux',
    title: 'React.js, Redux',
    stack: ['Node.js', 'React.js', 'react-router-dom', 'Redux', 'Redux Toolkit', 'Sass']
  },
  {
    image: fileURL + 'game-central.jpg',
    demoLink: 'https://g6-game-central.herokuapp.com/',
    codeLink: 'https://github.com/matiasncocco/grupo_6_GameCentral',
    title: 'MERN Stack, MVC',
    stack: ['Node.js', 'Express.js', 'MVC Architecture', 'REST Architecture', 'MySQL', 'Sequelize']
  }
]

export default function Work () {
  return (
    <main name='Work' className='blue-background w-full md:h-screen text-gray-300'>
      <section className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <header className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Work
          </h2>
          <p className='py-6'>
            Check out my latest projects.
          </p>
        </header>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {
            projects.map((project, i) => (
              <Project
                key={i}
                image={project.image}
                title={project.title}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
                stack={project.stack}
              />
            ))
          }
        </div>

      </section>
    </main>
  )
}
