import { useState, useEffect } from 'react'
import { postReq } from '../../helpers/postReq'
import Button from '../Button'

const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

const button = {
  DISABLED: 0,
  ENABLED: 1,
  PROCESSING: 2,
  DONE: 3
}

export default function Contact () {
  const [buttonState, setButtonState] = useState(button.DISABLED)
  const [feed, setFeed] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInput = (e) => {
    const key = e.target.name
    setFormData({
      ...formData,
      [key]: e.target.value
    })
  }

  useEffect(() => {

  }, [formData])

  const handleClick = async (e) => {
    e.preventDefault()
    if (buttonState === button.ENABLED) {
      const response = await postReq(`${process.env.ENDPOINT}/mailer`)
      try {
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <main name='Contact' className='w-full h-screen blue-background flex justify-center items-center p-4'>
      <section className='flex flex-col max-w-[600px] w-full relative'>
        <div className='pb-8 text-gray-300'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
          <div className='py-4'>
            <p>Submit the form below and I&apos;ll get back to you!</p>
            <p>Or shoot me an e-mail:
              <span className='font-bold'>
                &nbsp;smguastavino@gmail.com
              </span>
            </p>
          </div>
        </div>
        {/* <input
          name='name'
          type='text'
          placeholder='Full name'
          className='contact-input'
          onChange={handleInput}
          value={formData.name}
        />
        <input
          name='email'
          type='email'
          placeholder='Your e-mail'
          className='my-4 contact-input'
          onChange={handleInput}
          value={formData.email}
        />
        <textarea
          name='message'
          placeholder='Message'
          maxLength={500}
          className='contact-input resize-none'
          rows={10}
          cols={10}
          onChange={handleInput}
          value={formData.message}
        /> */}
        {/* {
          feed !== '' &&
          <span className='absolute flex justify-center items-center bottom-20 text-pink-600 font-bold'>{feed}</span>
        } */}
        {/* <Button/> */}
      </section>
    </main>
  )
}
