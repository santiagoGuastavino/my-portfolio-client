const experiences = [
  {
    company: 'Limboteams',
    title: 'Back-end web developer',
    from: 'August 2022',
    until: 'Present',
    verb: 'Using:',
    tech: ['Typescript', 'Nest.js', 'MongoDB']
  },
  {
    company: 'Pixel Ecom',
    title: 'Full stack web developer',
    from: 'September 2021',
    until: 'August 2022',
    verb: 'Used:',
    tech: ['lala', 'lolo', 'lele']
  },
  {
    company: 'Game central',
    title: 'Full stack web developer',
    from: 'March 2021',
    until: 'September 2021',
    verb: 'Used:',
    tech: ['lala', 'lolo', 'lele']
  }
]

export default function Experience () {
  return (
    <main name='Experience' className='w-full h-screen blue-background text-gray-300'>
      <section className='max-w-[900px] w-full h-full mx-auto experience-section pt-[80px]'>
        <p className='experience-title text-4xl font-bold inline border-b-4 border-pink-600'>
          Experience
        </p>
        {
          experiences.map((experience, i) => (
            <article key={i} className='experience-article'>
              <div className='experience-titles'>
                <p className='experience-title-title'>
                  {experience.title}
                </p>
                <p className='experience-title-company'>
                  {experience.company}
                </p>
                <div>
                  <span>{experience.until}</span>
                  <span>&nbsp;-&nbsp;</span>
                  <span>{experience.from}</span>
                </div>
              </div>
              <div className='experience-tech'>
                <span>{experience.verb}</span>
                {experience.tech.map((iTech, i) => (
                  <span key={i}>
                    {iTech}
                  </span>
                ))}
              </div>
            </article>
          ))
        }
      </section>
    </main>
  )
}
