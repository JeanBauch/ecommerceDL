import {GetStaticProps} from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,Navigation,Autoplay
} from 'swiper/core';

import { Header } from '../components/Header';
import { InfoFooter } from '../components/InfoFooter';

import styles from './home.module.scss';

SwiperCore.use([Autoplay,Pagination,Navigation]);


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <section className={styles.sliderContainer}>
        <div className={styles.sliderContent}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{
              "clickable": true
            }} 
            navigation={true}
            // autoplay={{
            //   "delay": 3000,
            //   "disableOnInteraction": false
            // }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className={styles.slider}>
                <header className={styles.sliderHeader}>
                  <img src="/TextSlide1.svg" alt="" />
                </header>
                <div className={styles.sliderImg}>
                  <div className={styles.sliderItem}>
                    <img src="/mulher1.svg" alt="" />
                  </div>

                  <div className={styles.sliderItem}>
                    <img src="/mulher2.svg" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </section>
      <InfoFooter />
    </div>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  return {
    props: {

    },
    revalidate: 60 * 60 * 15,
  }
}
