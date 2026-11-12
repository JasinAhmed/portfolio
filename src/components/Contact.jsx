import { useEffect, useRef, useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const statusRef = useRef(null)
  const isSending = status === 'sending'

  // Ik verplaats de focus naar het resultaat na het versturen.
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      statusRef.current?.focus()
    }
  }, [status])

  async function handleSubmit(event) {
    event.preventDefault()

    if (isSending) return

    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('sending')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      // Ik maak de velden alleen leeg na een geslaagde aanvraag.
      form.reset()
      setStatus('success')
    } catch {
      // Bij een fout blijven de ingevulde gegevens staan.
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-introduction">
        <h2>Contact</h2>

        <p>
          Have an internship opportunity or a question about my work?
          Leave a message and I’ll get back to you by email.
        </p>

        <a href="mailto:jaasin9@gmail.com">
          jaasin9@gmail.com
        </a>
      </div>

      <form
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />

        {/* Dit verborgen veld helpt Netlify om spam te herkennen. */}
        <p hidden>
          <label>
            Leave this field empty
            <input name="bot-field" />
          </label>
        </p>

        <p className="contact-note">All fields are required.</p>

        <div className="contact-field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            maxLength={5000}
            required
          />
        </div>

        <button
          className="contact-submit"
          type="submit"
          disabled={isSending}
        >
          {isSending ? 'Sending…' : 'Send message'}
        </button>

        {status === 'success' && (
          <p
            className="contact-feedback"
            ref={statusRef}
            tabIndex={-1}
          >
            Thank you! Your message has been submitted.
          </p>
        )}

        {status === 'error' && (
          <p
            className="contact-feedback contact-feedback-error"
            ref={statusRef}
            tabIndex={-1}
          >
            Your message could not be sent. Your details are still here.
            Please try again or email{' '}
            <a href="mailto:jaasin9@gmail.com">jaasin9@gmail.com</a>.
          </p>
        )}
      </form>
    </section>
  )
}