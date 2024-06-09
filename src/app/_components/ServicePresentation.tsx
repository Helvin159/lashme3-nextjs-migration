'use client'
import React from 'react';
import Container from './Container';
import FlexCol from './FlexCol';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Button from './Button';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import 'swiper/css';

const ServicePresentation = ({services}:any) => {

  // const bookingPath = `/booking/${services.fields.category.fields.slug}/${services.fields.slug}`
  const bookingPath = `/booking/${services.fields.category.fields.slug}`

  return (
    <Container className='max-w-full'>
      <div className='flex flex-col-reverse desktop:flex-row flex-nowrap justify-center tablet:justify-start'>
        <FlexCol size={8} className='shrink max-w-full'>

          {services.fields.samplePictures.length > 1 ?
            <Swiper
              className='max-w-3xl h-full'
              slidesPerView={1.5}
              autoplay={true}
              mousewheel={true}
              spaceBetween={15}
              grabCursor={true}
              speed={300}
              >
                {services.fields.samplePictures.map((i:any , k:number) => (
                  <SwiperSlide key={k}>
                    <div className='w-full h-full max-h-full rounded-2xl overflow-hidden'>
                      <Image src={`https:${i?.fields?.file?.url}`} alt='' width={i?.fields?.file?.details.image.width} height={i?.fields?.file?.details.image.height} className='object-cover object-center w-full h-full mx-auto' />
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
        <FlexCol size={4}>
          <Container className='w-full max-w-3xl mx-auto py-6'>
            <article>
            <h2 className='text-3xl'>About {services.fields.serviceName}</h2>
            <div className='my-6 rich-text pr-12'>
              {
                services.fields?.serviceDescription ?
                documentToReactComponents(services.fields.serviceDescription)
                : null
              }
            </div>
            <p className='m-0'>
              Time: {services.fields.hours ? `${services.fields.hours} ${services.fields.hours > 1 ? 'hours' : 'hour'}` : null}{' '}
              {services.fields?.minutes ? `${services.fields?.minutes} & minutes` : null}
              <br />
              Price: ${services.fields.price}
            </p>
            </article>
          </Container>
          <Container className='w-full max-w-3xl mx-auto text-center py-6'>
            <Button variant='pink' url={bookingPath}>Book Now!</Button>
          </Container>
        </FlexCol>
      </div>
    </Container>
  )
}

export default ServicePresentation
