"use client"

import React from 'react'
import { actionCall, bestSellingData, featurePost, serviceData, testimonialData } from '../static-data'
import HeroGrid from './hero-grid'
import Services from './services'
import FeaturedPost from './featured-post'
import Testimonials from './testimonials'
import ActionCall from './action-call'
import BestSelling from './best-selling'

const HomePage = () => {
  return (
    <>
      <HeroGrid />
      <BestSelling page={'home'} dataHeader={bestSellingData.dataHeader} />
      <Services data={serviceData.data} dataHeader={serviceData.dataHeader} />
      <FeaturedPost data={featurePost.topContent} cards={featurePost.cards} />
      <Testimonials data={testimonialData} />
      <ActionCall action={actionCall.data} data={actionCall.topContent} />
    </>
  )
}

export default HomePage;
