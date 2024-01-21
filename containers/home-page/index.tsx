"use client"

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { actionCall, bestSellingData, featurePost, serviceData, testimonialData } from '../static-data'
import HeroGrid from './hero-grid'
import Services from './services'
import FeaturedPost from './featured-post'
import Testimonials from './testimonials'
import ActionCall from './action-call'
import BestSelling from './best-selling'
import { fetchProducts } from '@/services/product/apiService';

const HomePage = () => {
  // const dispatch = useDispatch();
  // const {products} = useSelector((state: RootState) => {
  //   console.log(state, "state");
    
  //   return state.product.bestSelling
  // });

  // useEffect(() => {
  //   fetchProducts(dispatch);
  // }, [dispatch]);

  return (
    <>
      <HeroGrid />
      <BestSelling dataHeader={bestSellingData.dataHeader} />
      <Services data={serviceData.data} dataHeader={serviceData.dataHeader} />
      <FeaturedPost data={featurePost.topContent} cards={featurePost.cards} />
      <Testimonials data={testimonialData} />
      <ActionCall action={actionCall.data} data={actionCall.topContent} />
    </>
  )
}

export default HomePage;
