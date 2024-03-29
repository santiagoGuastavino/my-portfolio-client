const experiences = [
  {
    company: 'Shifta',
    title: 'Software Engineer',
    from: 'May 2023',
    until: 'Present',
    tech: [
      'Typescript', 'Node.js', 'Next.js', 'React.js', 'Nest.js', 'REST', 'Docker', 'Jenkins'
    ]
  },
  {
    company: 'Limboteams',
    title: 'Back-end web developer',
    from: 'August 2022',
    until: 'May 2023',
    tech: [
      'Typescript', 'Node.js', 'Nest.js', 'REST', 'MongoDB', 'OOP', 'Domain Driven Design', 'Multitier Architecture', 'TDD', 'WebSocket', 'Dependency Injection', 'AWS Lambda', 'AWS S3', 'Docker'
    ]
  },
  {
    company: 'Pixel Ecom',
    title: 'Full stack web developer',
    from: 'September 2021',
    until: 'August 2022',
    tech: [
      'Javascript', 'Node.js', 'Express.js', 'REST', 'React.js', 'MySQL', 'PHP', 'Wordpress', 'Shopify', 'Ecommerce'
    ]
  },
  {
    company: 'Game central',
    title: 'Full stack web developer',
    from: 'March 2021',
    until: 'September 2021',
    tech: [
      'Javascript', 'Node.js', 'Express.js', 'REST', 'MVC', 'HTML', 'CSS', 'React.js', 'Ecommerce', 'Heroku'
    ]
  }
]

export default function Experience () {
  return (
    <main name='Experience' className='w-full h-screen blue-background text-gray-300'>
      <section className='max-w-[900px] w-full h-full mx-auto experience-section pt-[80px] px-8'>
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
                  <span>{experience.from}</span>
                  <span>&nbsp;-&nbsp;</span>
                  <span>{experience.until}</span>
                </div>
              </div>
              <div className='experience-tech'>
                {experience.tech.map((iTech, i) => (
                  <p key={i}>
                    {iTech}
                  </p>
                ))}
              </div>
            </article>
          ))
        }
      </section>
    </main>
  )
}
