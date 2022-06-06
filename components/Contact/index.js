export default function Contact () {
  return (
    <main name='Contact' className='w-full h-screen blue-background flex justify-center items-center p-4'>
      <section className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 text-gray-300'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
          <p className='py-4'>
            {/* Submit the form below or */}
            Shoot me an e-mail:
            <span className='font-bold'>
              &nbsp;smguastavino@gmail.com
            </span>
          </p>
        </div>
        {/* <input
          type='text'
          name='name'
          placeholder='Name'
          className='p-2 bg-[#ccd6f6]'
        />
        <input
          type='email'
          name='email'
          placeholder='email'
          className='my-4 p-2 bg-[#ccd6f6]'
        />
        <textarea
          name='message'
          placeholder='message'
          rows='10'
          className='p-2 bg-[#ccd6f6]'
        />
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
          Let&apos;s Collaborate
        </button> */}
      </section>
    </main>
  )
}
