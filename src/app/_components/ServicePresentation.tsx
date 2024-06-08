'use client'
import React from 'react';
import Container from './Container';
import RowContainer from './RowContainer';
import FlexCol from './FlexCol';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';

const ServicePresentation = ({services}:any) => {
  return (
    <Container className='max-w-full'>
      <div className='flex flex-row flex-wrap justify-center tablet:justify-start'>
        <FlexCol size={9} >

          {services.fields.samplePictures.length > 1 ?
            <Swiper
              className='max-w-4xl max-h-96'
              slidesPerView={1.5}
              autoplay={true}
              spaceBetween={15}
              effect={'flip'}
              parallax={true}
              grabCursor={true}
              speed={1000}
              >
                {services.fields.samplePictures.map((i:any , k:number) => (
                  <SwiperSlide key={k}>
                    <div className='w-full max-h-full rounded-2xl overflow-hidden'>
                      <Image src={`https:${i?.fields?.file?.url}`} alt='' width={i?.fields?.file?.details.image.width} height={i?.fields?.file?.details.image.height} className='object-cover object-center w-full h-96 max-h-full mx-auto' />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          :
          <Container>
            <Image src={`https:${services.fields.samplePictures[0]?.fields?.file?.url}`} alt='' width={services.fields.samplePictures[0]?.fields?.file?.details.image.width} height={services.fields.samplePictures[0]?.fields?.file?.details.image.height} className='object-cover object-center w-full h-96 max-h-full mx-auto' />
          </Container>
          }
        </FlexCol>
        <FlexCol size={3}>
          <h2 className='text-3xl'>Service Details</h2>
        </FlexCol>
      </div>
    </Container>
  )
}

export default ServicePresentation
