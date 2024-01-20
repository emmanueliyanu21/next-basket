"use client"

import React, {useEffect, useState} from 'react'
import { actionCall, bestSellingData, featurePost, serviceData, testimonialData } from '../static-data'
import HeroGrid from './hero-grid'
import Services from './services'
import FeaturedPost from './featured-post'
import Testimonials from './testimonials'
import ActionCall from './action-call'
import BestSelling from './best-selling'

const HomePage = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data.products.slice(0, 10))
      } catch (error) {
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeroGrid />
      <BestSelling dataHeader={bestSellingData.dataHeader} data={product} />
      <Services data={serviceData.data} dataHeader={serviceData.dataHeader} />
      <FeaturedPost data={featurePost.topContent} cards={featurePost.cards}  />
      <Testimonials data={testimonialData} />
      <ActionCall action={actionCall.data} data={actionCall.topContent} />
      
    </>
  )
}

export default HomePage;
