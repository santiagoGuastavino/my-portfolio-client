import Project from '../Project'

const projects = [

]

export default function Work () {
  return (
    <main name='work' className='blue-background w-full md:h-screen text-gray-300'>
      <section className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <article className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
          <p className='py-6'>Check out some of my latest projects</p>
        </article>

        <article className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {
            projects.map((project, i) => (
              <Project
                key={i}
              />
            ))
          }
        </article>

      </section>
    </main>
  )
}
