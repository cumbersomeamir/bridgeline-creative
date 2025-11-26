import { notFound } from 'next/navigation'
import { services } from '../../../../components/services/servicesData'
import ServiceDetailArtist from '../../../../components/services/details/ServiceDetailArtist'
import ServiceDetailEvent from '../../../../components/services/details/ServiceDetailEvent'
import ServiceDetailTour from '../../../../components/services/details/ServiceDetailTour'
import ServiceDetailCreative from '../../../../components/services/details/ServiceDetailCreative'
import ServiceDetailPartnership from '../../../../components/services/details/ServiceDetailPartnership'

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  
  if (!service) {
    return { title: 'Service Not Found' }
  }

  return {
    title: `${service.title} | BridgeLine Creative`,
    description: service.shortDesc,
  }
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  // Render different UI based on service slug
  switch (service.slug) {
    case 'artist-management':
      return <ServiceDetailArtist service={service} />
    case 'event-ip-creation':
      return <ServiceDetailEvent service={service} />
    case 'tour-routing':
      return <ServiceDetailTour service={service} />
    case 'creative-direction':
      return <ServiceDetailCreative service={service} />
    case 'strategic-partnerships':
      return <ServiceDetailPartnership service={service} />
    default:
      return <ServiceDetailArtist service={service} />
  }
}
