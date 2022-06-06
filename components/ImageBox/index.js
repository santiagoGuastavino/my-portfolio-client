import Image from 'next/image'

export default function ImageBox ({ fileName, skillName }) {
  return (
    <div className='shadow-md shadow-color hover:scale-110 duration-300'>
      <Image
        src={fileName}
        width={120}
        height={120}
        className='mx-auto'
      />
      <p className='my-4'>{skillName}</p>
    </div>
  )
}
