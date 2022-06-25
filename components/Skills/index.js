import ImageBox from '../ImageBox'

const fileURL = '/images/'

const skillsAndFiles = [
  {
    file: fileURL + 'javascript.png',
    skill: 'Javascript'
  },
  {
    file: fileURL + 'typescript.png',
    skill: 'Typescript'
  },
  {
    file: fileURL + 'nodejs.webp',
    skill: 'Node.js'
  },
  {
    file: fileURL + 'expressjs.png',
    skill: 'Express.js'
  },
  {
    file: fileURL + 'nestjs.png',
    skill: 'Nest.js'
  },
  {
    file: fileURL + 'reactjs.png',
    skill: 'React'
  },
  {
    file: fileURL + 'nextjs.png',
    skill: 'Next.js'
  },
  {
    file: fileURL + 'git.png',
    skill: 'GIT'
  },
  {
    file: fileURL + 'docker.png',
    skill: 'Docker'
  }
]

export default function Skills () {
  return (
    <main name='Skills' className='w-full h-screen blue-background text-gray-300'>
      <section className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <article>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Skills
          </p>
          <p className='py-4'>
            These technologies are the core of my stack.
          </p>
        </article>

        <article className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-2 md:py-8'>
          {
            skillsAndFiles.map((skillFile, i) => (
              <ImageBox
                key={i}
                fileName={skillFile.file}
                skillName={skillFile.skill}
              />
            ))
          }
        </article>
      </section>
    </main>
  )
}
