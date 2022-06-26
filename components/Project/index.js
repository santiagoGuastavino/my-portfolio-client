export default function Project ({ image, demoLink, codeLink, title, stack }) {
  return (
    <article className='shadow-lg shadow-[#040c16] container rounded-md flex flex-col justify-center items-center mx-auto relative'>
        <img src={image} className='opacity-30'/>
        <div className='absolute flex-col justify-center align-center'>
          <h2 className='text-4xl md:text-2xl tracking-wider text-pink-600 text-center text-shadow font-black'>
            {title}
          </h2>
          <div className='flex justify-center align-center mt-6 sm:my-4'>
            <a href={demoLink} target='_blank' rel='noreferrer'>
              <button className='project-button'>
                Demo
              </button>
            </a>
            <a href={codeLink} target='_blank' rel='noreferrer'>
              <button className='project-button'>
                Code
              </button>
            </a>
          </div>
          <div className='flex flex-wrap justify-center align-center mt-6 px-10 sm:px-2 sm:mt-2'>
            {stack.map((tech, i) => (
              <span
                className='bg-white text-gray-700 m-[2px] p-[2px] font-bold md:text-xs lg:text-base '
                key={i}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
    </article>
  )
}
