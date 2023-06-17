import { aboutText } from '../../data/aboutText'

export default function About () {
  return (
    <main name='About' className='w-full h-screen blue-background text-gray-300'>
      <section className='flex flex-col justify-center items-center w-full h-full'>
        <article className='about-grid sm:grid-cols-2 px-4'>
          <div className='sm:text-right w-full text-4xl font-bold'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              More about me
            </p>
          </div>
          <ul>
            <li className='text-white my-2'>
              <span>
                I possess expertise in a wide range of technologies, including:
              </span>
            </li>
            {
              aboutText.map((text, i) => (
                <li key={i} className='text-white my-2'>
                  <span id='little-dot-span'>
                    •&nbsp;
                  </span>
                  <span>
                    {text}
                  </span>
                </li>
              ))
            }
            <li className='text-white my-2'>
              With a solid foundation in object-oriented programming, design patterns, and SOLID principles, I excel in creating clean and maintainable code. Additionally, I have experience dockerizing applications and utilizing various other libraries, packages, and services to deliver high-quality solutions.
            </li>
          </ul>
        </article>
      </section>
    </main>
  )
}
