export default function Project ({ image, demoLink, codeLink, title }) {
  return (
      <article
        style={{ backgroundImage: `url(${image})` }}
        className='project shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto group'
      >

        {/* hover effects */}
        <div className='opacity-0 group-hover:opacity-100 text-center'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            {title}
          </span>
          <div className='pt-8'>
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
        </div>
      </article>
  )
}
