import AboutHero from '../../../components/about-us/AboutHero'
import OurStory from '../../../components/about-us/OurStory'
import Values from '../../../components/about-us/Values'
import WhatMakesUsDifferent from '../../../components/about-us/WhatMakesUsDifferent'
import OurWork from '../../../components/about-us/OurWork'
import TheApproach from '../../../components/about-us/TheApproach'
import Vision from '../../../components/about-us/Vision'
import ClosingMessage from '../../../components/about-us/ClosingMessage'

export const metadata = {
  title: 'About Us | BridgeLine Creative',
  description: 'Learn about BridgeLine Creative - an India–UK based talent management and culture-building agency. Our story, values, approach, and vision for the future of music.',
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <Values />
      <WhatMakesUsDifferent />
      <OurWork />
      <TheApproach />
      <Vision />
      <ClosingMessage />
    </main>
  )
}

