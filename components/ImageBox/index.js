export default function ImageBox ({ fileName, skillName }) {
  return (
    <div className='shadow-md hover:scale-110 duration-300'>
      <img
        src={fileName}
        className='mx-auto w-[80px] md:w-[150px]'
      />
      <p className='my-2 md:my-4'>{skillName}</p>
    </div>
  )
}
