import React, {useEffect, useState} from 'react'
import { actionCall, bestSellingData, featurePost, footer, serviceData, testimonialData } from '../static-data'
import HeroGrid from './HeroGrid'
import BestSelling from '@/app/modules/HomePageContent/BestSelling'
import Services from './Services'
import FeaturedPost from './FeaturedPost'
import Testimonials from './Testimonials'
import ActionCall from './ActionCall'
import Footer from '@/app/components/Footer'

const HomePageContent = () => {
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
      <Footer data={footer} />
    </>
  )
}

export default HomePageContent
