import HeroCarousel from '@/components/Home/Carosel'
import ContactNow from '@/components/Home/ContactNow'
import CourseHighlights from '@/components/Home/CourseHighlight'
import FeaturePanels from '@/components/Home/FeaturesPanel'
import QuickAccess from '@/components/Home/QuickAccess'
import React from 'react'

const Home = () => {
  return (
    <>
      <HeroCarousel/>
      <FeaturePanels />
      <CourseHighlights />
      <QuickAccess />
      <ContactNow/>
    </>
  )
}

export default Home