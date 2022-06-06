import expressIcon from '../../public/images/expressjs.png'
import gitIcon from '../../public/images/git.png'
import javascriptIcon from '../../public/images/javascript.png'
import nextIcon from '../../public/images/nextjs.png'
import nodeIcon from '../../public/images/nodejs.webp'
import reactIcon from '../../public/images/reactjs.png'
import ImageBox from '../ImageBox'

const skillsAndFiles = [
  {
    file: javascriptIcon,
    skill: 'Javascript'
  },
  {
    file: nodeIcon,
    skill: 'Node.js'
  },
  {
    file: expressIcon,
    skill: 'Express.js'
  },
  {
    file: reactIcon,
    skill: 'React'
  },
  {
    file: nextIcon,
    skill: 'Next.js'
  },
  {
    file: gitIcon,
    skill: 'Git'
  }
]

export default function Skills () {
  return (
    <main name='skills' className='w-full h-screen blue-background text-gray-300'>
      <section className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <article>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Skills
          </p>
          <p className='py-4'>
            These technologies are the core of my stack.
          </p>
        </article>

        <article className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
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
