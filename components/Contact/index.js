import { useEffect, useState } from 'react'
import { postReq } from '../../helpers/postReq'
import Button from '../Button'

const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

const INITIAL_STATE = {
  name: '',
  email: '',
  message: ''
}

const BUTTON_STATE = {
  disabled: 0,
  ready: 1,
  loading: 2,
  process_finished: 3
}

const FEED_STATE = {
  incomplete: 'Fields are empty.',
  notEmail: 'Provide a valid e-mail address.',
  ok: '',
  process_finished: 'MESSAGE DELIVERED'
}

const INPUT_STATE = {
  enabled: 0,
  disabled: 1
}

const FORM_STATE = {
  enabled: 0,
  disabled: 1
}

export default function Contact () {
  const [formData, setFormData] = useState(INITIAL_STATE)
  const [buttonState, setButtonState] = useState(BUTTON_STATE.disabled)
  const [userFeed, setUserFeed] = useState(FEED_STATE.ok)
  const [buttonText, setButtonText] = useState("Let's colaborate")
  const [inputState, setInputState] = useState(INPUT_STATE.enabled)
  const [formState, setFormState] = useState(FORM_STATE.enabled)

  const handleInput = (e) => {
    const key = e.target.name
    setFormData({
      ...formData,
      [key]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formState === FORM_STATE.disabled) {
      return e.preventDefault()
    }
    setButtonState(BUTTON_STATE.loading)
    postReq('/mailer', formData)
      .then(res => {
        if (res.success) {
          stateProcessComplete()
        }
      })
  }

  const stateEmptyError = () => {
    setButtonState(BUTTON_STATE.disabled)
    setUserFeed(FEED_STATE.incomplete)
  }

  const stateNotEmailError = () => {
    setButtonState(BUTTON_STATE.disabled)
    setUserFeed(FEED_STATE.notEmail)
  }

  const stateReady = () => {
    setButtonState(BUTTON_STATE.ready)
    setUserFeed(FEED_STATE.ok)
  }

  const stateProcessComplete = () => {
    setButtonState(BUTTON_STATE.process_finished)
    setUserFeed(FEED_STATE.process_finished)
    setInputState(INPUT_STATE.disabled)
    setFormState(FORM_STATE.disabled)
  }

  useEffect(() => {
    if (
      formData.name === '' |
      formData.email === '' |
      formData.message === ''
    ) {
      stateEmptyError()
    } else if (!regexEmail.test(formData.email)) {
      stateNotEmailError()
    } else {
      stateReady()
    }
  }, [formData])

  const isButtonDisabled = buttonState === BUTTON_STATE.disabled || buttonState === BUTTON_STATE.loading || buttonState === BUTTON_STATE.process_finished
  const areInputsDisabled = inputState === INPUT_STATE.disabled

  useEffect(() => {
    buttonState === BUTTON_STATE.loading &&
    setButtonText('LOADING.....')

    buttonState === BUTTON_STATE.process_finished &&
    setButtonText('THANK YOU')
  }, [buttonState])

  return (
    <main name='Contact' className='w-full h-screen blue-background flex justify-center items-center p-4'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col max-w-[600px] w-full relative'
      >
        <div className='pb-8 text-gray-300'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
          <div className='py-4'>
            <p>Submit the form below and I&apos;ll get back to you!</p>
            <p>Or shoot me an e-mail at
              <span className='font-bold'>
                &nbsp;smguastavino@gmail.com
              </span>
            </p>
          </div>
        </div>
        <label
          className='contact-label'
          htmlFor='name'
        >
          Name
        </label>
        <input
          name='name'
          type='text'
          className='contact-input'
          onChange={handleInput}
          value={formData.name}
          id='name'
          disabled={areInputsDisabled}
        />
        <label
          className='contact-label'
          htmlFor='email'
        >
          E-mail
        </label>
        <input
          name='email'
          type='email'
          className='contact-input'
          onChange={handleInput}
          value={formData.email}
          id='email'
          disabled={areInputsDisabled}
        />
        <label
          className='contact-label'
          htmlFor='message'
        >
          Message
        </label>
        <textarea
          name='message'
          maxLength={500}
          className='contact-input resize-none'
          rows={10}
          cols={10}
          onChange={handleInput}
          value={formData.message}
          id='message'
          disabled={areInputsDisabled}
        />
        <span className='absolute flex justify-center items-center bottom-20 text-pink-600 font-bold'>
          {userFeed}
        </span>
        <Button
          disabled={isButtonDisabled}
          text={buttonText}
        />
      </form>
    </main>
  )
}
