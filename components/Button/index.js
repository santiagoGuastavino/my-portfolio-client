export default function Button ({ disabled, text }) {
  return (
    <button
      className={disabled
        ? 'disabled-button'
        : 'default-pink-button'
      }
      type='submit'
      disabled={disabled}
    >
      {text}
    </button>
  )
}
