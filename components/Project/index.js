export default function Project ({ title, link, image }) {
  return (
    <a
      target='_blank'
      rel='noreferrer'
      href={link}
      className='shadow-md hover:scale-105 duration-100 shadow-lg my-1 p-2 w-full'
    >
      <p className='text-white px-1 py-1 text-left text-xs md:text-sm lg:text-xl'>
        {title}
      </p>
      <img
        src={image}
        className='mx-auto w-[100%]'
      />
    </a>
  )
}
