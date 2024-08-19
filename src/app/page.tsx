
"use client"
import React, { Fragment, Suspense } from 'react';
import {
  MakeUsSpecial,
  FullCarousel,
  MainPage,
  AboutUs,
  Analytics,
  PhotoShowCase,
  CustomerSaying,
  InterestedWorking,
  LatestNews,
  SomeClients
} from '@/containers/Landing';


export default function Home() {

  return (
    <Fragment>
      <Suspense fallback={<div className="bg-white h-[5000px]"> testing</div>}>
        <FullCarousel />
        <MainPage />
        <AboutUs />
        <MakeUsSpecial />
        <Analytics />
        <PhotoShowCase />
        <CustomerSaying />
        <InterestedWorking />
        <LatestNews />
        <SomeClients />
      </Suspense>

    </Fragment>
  );
}
