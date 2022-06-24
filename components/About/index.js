import { aboutText } from '../../data/aboutText'

export default function About () {
  return (
    <main name='About' className='w-full h-screen blue-background text-gray-300'>
      <section className='flex flex-col justify-center items-center w-full h-full'>
        <article className='about-grid grid-cols-2'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </article>
        <article className='about-grid sm:grid-cols-2 px-4'>
          <div className='sm:text-right w-full text-4xl font-bold'>
            <p>
              A look into my stack.
            </p>
          </div>
          <ul>
            {
              aboutText.map((text, i) => (
                <li className='list-disc' key={i}>
                  {text}
                </li>
              ))
            }
          </ul>
        </article>
      </section>
    </main>
  )
}
