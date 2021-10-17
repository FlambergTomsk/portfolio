<template>
  <div class="special">
    <div class="special__content content">
      <div class="special__title">
        {{ $t("hunger.specialties.specialtiesTitle") }}
      </div>
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        class="content__field "
        :navigation="true"
      >
        <div
          v-for="(item, j) in materials"
          :key="`item-${item}-${j}`"
          class="content__swiper-slide swiper-slide"
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
        <div
          slot="button-next"
          class="swiper-button-next content__swiper-button"
        >
          <span class="icon-chevron-right content__icon" />
        </div>
        <div
          slot="button-prev"
          class="swiper-button-prev content__swiper-button"
        >
          <span class="icon-chevron-left content__icon" />
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-flip';

import 'swiper/swiper.scss';
import SwiperCore, {
  Keyboard, Pagination, Navigation, EffectFlip,
} from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, EffectFlip]);
export default {
  name: 'Specialties',

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
        speed: 1000,
        grabCursor: true,
        slidesPerView: 1,
        effect: 'flip',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
          picture: require('~/static/pancake.svg'),
          title: this.$t('hunger.specialties.chocolatePancakes'),
          class: 'slide__image slide__image_big',
        },
        {
          picture: require('~/static/applebee.svg'),
          title: this.$t('hunger.specialties.applebee'),
          class: 'slide__image',
        },
        {
          picture: require('~/static/lobster.svg'),
          title: this.$t('hunger.specialties.redLobster'),
          class: 'slide__image',
        },
        {
          picture: require('~/static/gyro.svg'),
          title: this.$t('hunger.specialties.arby'),
          class: 'slide__image',
        },
        {
          picture: require('~/static/gyro.svg'),
          title: this.$t('hunger.specialties.arby'),
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

.special{
  background-image: url(static/food.png);
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  width: 100%;
  &__content{
    padding: 40px 5px;
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
  &__icon{
    z-index: 10;
    font-size: 55px;
    color: $yellow;
  }
}

.slide {
  &__text {
    max-width: 600px;
    align-self: center;
    margin-right: 45px;
  }
  &__image {
    margin-right: 40px;
    height: 575px;
    width: 575px;
    margin-left: 50px;
    &_big {
      width: 715px;
      margin-right: 0;
      margin-left: -30px;
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
@include _991{
  .slide{
    &__image{
      height: 350px;
      width: 350px;
      margin-right: 10px;
      &_big{
        width: 400px;
        margin-left: 10px;
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
    &__text{
      margin-left: 45px;
    }
  }
  .team{
    &__title{
      margin-bottom: 0;
    }
  }
  .content__icon{
    font-size: 30px;
  }

  }
</style>
