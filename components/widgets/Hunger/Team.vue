<template>
  <div class="team">
    <div class="team__content content">
      <div class="team__title">
        {{ $t("hunger.team.ourTeam") }}
      </div>
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        class="content__swiper"
      >
        <div
          v-for="(item, j) in materials"
          :key="`item-${item}-${j}`"
          class="swiper-slide content__swiper-slide"
        >
          <swiper-slide class="content__slide  slide">
            <img
              :src="item.picture"
              alt="Picture"
              :class="item.class"
            >
            <div class="slide__text text">
              <div class="text__title">
                {{ item.title }}
              </div>
              <div class="text__line" />
              <div class="text__subtitle">
                {{ subtitle }}
              </div>
              <div class="text__description">
                {{ description }}
              </div>
            </div>
          </swiper-slide>
        </div>
        <div
          slot="pagination"
          class="content__swiper-pagination swiper-pagination"
        />
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

import 'swiper/swiper-bundle.css';

import 'swiper/swiper.scss';
import SwiperCore, {
  Keyboard, Pagination, Autoplay,
} from 'swiper';

SwiperCore.use([Keyboard, Pagination, Autoplay]);
export default {
  name: 'Team',
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
      description: 'Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.',
      swiperOptions: {
        stopOnLastSlide: false,
        loop: true,
        slidesPerView: 1,
        speed: 2000,
        grabCursor: true,
        spaceBetween: 70,
        autoplay: {
          delay: 500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
      },
      materials:
      [
        {
          picture: require('~/static/chef.svg'),
          title: this.$t('hunger.team.masterChef'),
          class: 'slide__image slide__image_big',
        },
        {
          picture: require('~/static/manager.svg'),
          title: this.$t('hunger.team.manager'),
          class: 'slide__image',

        },
        {
          picture: require('~/static/bartender.svg'),
          title: this.$t('hunger.team.bartender'),
          class: 'slide__image',

        },
        {
          picture: require('~/static/waitress.svg'),
          title: this.$t('hunger.team.waitress'),
          class: 'slide__image',

        },
        {
          picture: require('~/static/delivery.svg'),
          title: this.$t('hunger.team.courier'),
          class: 'slide__image',
        },
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style lang="scss" scoped>
.team{
  background-image: url(static/team.svg);
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  width: 100%;
  &__content{
    padding: 40px;
  }
  &__title{
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0.5em;
    text-align: center;
    margin-bottom: 40px;
    color: $white;
  }
}
.slide{
  height:100%;
  z-index: 10;
  color: white;
}
.content{
  &__slide{
    display: flex;
   justify-content: center;
  }
}
.slide {
  &__text {
    max-width: 600px;
    align-self: center;
  }
  &__image {
    margin-right: 40px;
    height: 575px;
    width: 575px;
   &_big {
      width: 715px;
      margin-right: 0;
    }
  }
  &__wrapper{
    display: flex;
  }
  &__square{
    align-self: center;
    margin-right: -150px;
    z-index: 10;
    min-height: 250px;
    min-width: 250px;
    border: 20px solid $yellow;
  }
}
.text{
  &__title{
    @include text-title;
  }
  &__subtitle{
    @include text-subtitle;
    margin: 10px 0 20px;
    opacity: 0.8;
  }
  &__line{
    @include line;
  }
  &__description{
  text-align: center;
  opacity: 0.5;
  padding-bottom: 30px;
  }
}
@include _1300{
  .slide{
    &__image{
         &_big{
        margin-left: -40px;
       }
    }
  }
}
@include _991{
  .slide{
    &__image{
      height: 350px;
      width: 350px;
      margin-right: 30px;
          &_big{
            width: 400px;
            margin-right: 0;
      }
    }
  }
  .team{
    &__content{
      padding: 20px;
    }
  }
}
@include _767{
  .content{
    &__slide{
      flex-direction: column;
    }
  }
  .slide{
    &__image{
      margin: 0 auto;
    }
  }
  .team{
    &__title{
      margin-bottom: 0;
    }
  }
}
@include _380 {
  .slide {
    &__image {
      height: 300px;
      width: 250px;
      margin-right: 10px;
      &_big {
        width: 300px;
      }
    }
  }
}
</style>
