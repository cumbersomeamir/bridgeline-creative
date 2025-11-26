import ServicesHero from '../../../components/services/ServicesHero'
import ServicesList from '../../../components/services/ServicesList'
import ServicesCTA from '../../../components/services/ServicesCTA'

export const metadata = {
  title: 'Services | BridgeLine Creative',
  description: 'Full-spectrum creative and strategic services: Artist Management, Event IP Creation, Tour Routing, Creative Direction, and Strategic Partnerships.',
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </main>
  )
}

