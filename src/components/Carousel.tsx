import {Swiper, SwiperSlide} from 'swiper/react';
import thumbImg from '../scripts/thumbImg.ts'
import { Navigation } from 'swiper/modules'
import repoJson from '../assets/json/repoStats.json'
import RepoCard from './RepoCard'

import 'swiper/css'
import 'swiper/css/navigation'

export default function() {
  return (
    <>
    <Swiper 
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
    <>
    { repoJson.map( repo => (
      <SwiperSlide>
        <RepoCard 
          id={repo.id}
          title={repo.name}
          description={repo.description}
          img={thumbImg[`${repo.name}.jpg`]}
          homepage={repo.homepage}
          github={repo.html_url}
        />
      </SwiperSlide>
    ))}
  </>
    </Swiper>
    </>
  )
}
