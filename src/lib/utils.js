export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ")
}

const CONTACT_ENDPOINT = 'https://formsubmit.co/ajax/yassine5.hamza5@gmail.com'

export async function sendContactEmail({
  name = '',
  email = '',
  phone = '',
  subject = '',
  message = '',
  source = '',
}) {
  const payload = {
    name,
    email,
    phone,
    subject,
    message,
    source,
    _subject: subject ? `BYTE.ma - ${subject}` : 'BYTE.ma - New inquiry',
    _replyto: email,
    _captcha: false,
  }

  Object.keys(payload).forEach(key => {
    if (payload[key] === '') {
      delete payload[key]
    }
  })

  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error?.message || 'Unable to send your message right now. Please try again later.')
  }

  return response.json()
}
