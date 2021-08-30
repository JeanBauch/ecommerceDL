import {GetStaticProps} from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,Navigation,Autoplay
} from 'swiper/core';

import { Header } from '../components/Header';
import { InfoFooter } from '../components/InfoFooter';
import { WhatsappButton } from '../components/WhatsappButton';

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
            //   "delay": 6000,
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
            <SwiperSlide>
              <div>Teste2</div>
              {/* <div className={styles.slider2}>
                <div className={styles.slider2Content}>
                  <header>
                    <img src="/TextSlide2.svg" alt="Titulo do slider 2 - Modelos variados" />
                  </header>
                </div>

                <div className={styles.slider2Img}>
                  <img src="/slider2Img.svg" alt="" />
                </div>

              </div> */}
            </SwiperSlide>
            <SwiperSlide>
              <div>Teste3</div>
              {/* <div className={styles.slider3}>
                <img className={styles.imgSlider3} src="/bgSlider3.jpg" alt="Slider 3 - Conjutos em renda" />
                <img className={styles.imgSlider3} src="/bgSlider3Mobile.jpg" alt="Slider 3 Mobile - Conjutos em renda" />
              </div> */}
            </SwiperSlide>
            <SwiperSlide>
              <div>Teste4</div>
              {/* <div className={styles.slider3}>
                <img className={styles.imgSlider3} src="/bgSlider4.jpg" alt="Slider 4 - T-shirts" />
                <img className={styles.imgSlider3} src="/bgSlider4Mobile.jpg" alt="Slider 4 Mobile - T-shirts" />
              </div> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <WhatsappButton />
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
