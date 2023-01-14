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
            {
              aboutText.map((text, i) => (
                <li className='text-white my-2' key={i}>
                  <span id='little-dot-span'>
                    •&nbsp;
                  </span>
                  <span>
                    {text}
                  </span>
                </li>
              ))
            }
          </ul>
        </article>
      </section>
    </main>
  )
}
