export default function Project ({ demoLink, codeLink, title, stack }) {
  return (
    <article className='shadow-lg my-2 p-3 w-full'>
      <p className='text-white px-4 py-3 text-center text-2xl md:text-lg lg:text-2xl'>
        {title}
      </p>
      <div className='w-full flex flex-wrap justify-evenly items-center'>
        <a
          href={demoLink}
          target='_blank'
          rel='noreferrer'
          className='project-link'
        >
          Demo
        </a>
        <a
          href={codeLink}
          target='_blank'
          rel='noreferrer'
          className='project-link'
        >
          Code
        </a>
      </div>
      <div className='mt-6 sm:mt-2 flex flex-wrap'>
        {stack.map((tech, i) => (
          <p
            key={i}
            className='underline mr-4'
          >
            {tech}
          </p>
        ))}
      </div>
    </article>
  )
}
