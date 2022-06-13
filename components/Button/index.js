export default function Button ({ text, enabled, disabled }) {
  const enabledHtml = (
    <button
      className='default-pink-button'
    >
      Let&apos;s Collaborate
    </button>
  )

  const disabledHtml = (
    <button
      className='disabled-button'
    >
      Let&apos;s Collaborate
    </button>
  )

  return (
    <>
      {
        enabled &&
        enabledHtml
      }
      {
        disabled &&
        disabledHtml
      }
    </>
  )
}
