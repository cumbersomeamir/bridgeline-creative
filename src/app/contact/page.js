import ContactHero from '../../../components/contact/ContactHero'
import ContactForm from '../../../components/contact/ContactForm'

export const metadata = {
  title: 'Contact | BridgeLine Creative',
  description: 'Get in touch with BridgeLine Creative for artist management, bookings, brand partnerships, and creative collaborations across India and the UK.',
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
    </main>
  )
}
