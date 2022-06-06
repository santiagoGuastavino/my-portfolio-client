import Image from 'next/image'
import { useState } from 'react'

export default function Project ({ image, demoLink, codeLink, title }) {
  const [hoverStyles, setHoverStyles] = useState(null)

  const handleHover = () => {
    setHoverStyles(styles)
  }

  const styles = {
    backgroundImage: 'linear-gradient(to right, rgba(112, 157, 255, 0.8), hsla(242, 74%, 61%, 0.8)'
  }

  return (
    <article
      // onMouseEnter={handleHover}
      onMouseOver={handleHover}
      onMouseLeave={() => setHoverStyles(null)}
      className='project-box'
      style={hoverStyles}
    >
      {
        hoverStyles === null
          ? <div className='image-box'>
              <Image
                src={image}
                objectFit='contain'
              />
            </div>
          : <div className='on-hover'>
              <span className='text-xl font-bold text-hite tracking-wider'>
                {title}
              </span>
              <div className='pt-8 text-center'>
                <a href={demoLink} target='_blank' rel='noreferrer'>
                  <button className='project-button'>Demo</button>
                </a>
                <a href={codeLink} target='_blank' rel='noreferrer'>
                  <button className='project-button'>Code</button>
                </a>
              </div>
            </div>
      }
    </article>
  )
}
