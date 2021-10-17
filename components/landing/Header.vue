<template>
  <div class="header">
    <div class="header__content content">
      <div class="content__container">
        <div class="content__burger burger">
          <img
            src="~/static/burger.svg"
            alt="Menu"
            class="burger__picture"
            @click="openMenu"
          >
        </div>
        <div class="content__panel panel">
          <div class="panel__left">
            <div
              v-for="(item, j) in panelLeft"
              :key="`item-${item}-${j}`"
              class="panel__item"
              :class="{'panel__item_ru': currentLocale === 'ru'}"
            >
              <a
                :href="item.link"
                class="panel__link"
              >
                {{ item.title }}
              </a>
            </div>
          </div>
          <img
            src="~/static/wheel.svg"
            alt="Wheel"
            class="panel__picture"
          >
          <div class="panel__right">
            <div
              v-for="(item, j) in panelRight"
              :key="`item-${item}-${j}`"
              class="panel__item"
              :class="{'panel__item_ru': currentLocale === 'ru'}"
            >
              <a
                :href="item.link"
                class="panel__link"
              >
                {{ item.title }}
              </a>
            </div>
          </div>
        </div>
        <transition
          name="fade"
          class="content__transition"
        >
          <div
            v-if="isOpenSideBar"
            class="content__sidebar sidebar"
          >
            <div
              v-click-outside="openMenu"
              class="sidebar__body"
            >
              <div class="sidebar__top">
                <img
                  src="~/static/close.svg"
                  alt="Close"
                  class="sidebar__btn"
                  @click="openMenu"
                >
              </div>
              <div
                class="sidebar__links"
              >
                <div class="sidebar__block">
                  <div
                    v-for="(item, j) in panelLeft"
                    :key="`item-${item}-${j}`"
                    class="sidebar__item"
                  >
                    <a
                      :href="item.link"
                      class="sidebar__link"
                      @click="openMenu"
                    >
                      {{ item.title }}
                    </a>
                  </div>
                </div>
                <div class="sidebar__right">
                  <div
                    v-for="(item, j) in panelRight"
                    :key="`item-${item}-${j}`"
                    class="sidebar__item"
                  >
                    <a
                      :href="item.link"
                      class="sidebar__link"
                      @click="openMenu"
                    >
                      {{ item.title }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <div class="content__wrapper wrapper">
          <div class="wrapper__time">
            {{ $t("hunger.book.monFri") }}
            {{ $t("hunger.book.monFriTime") }}
            {{ $t("hunger.book.satSun") }}
            {{ $t("hunger.book.satSunTimeHeader") }}
          </div>
          <div class="wrapper__text text">
            <div class="text__change">
              <div
                class="text__language"
                :class="{'text__language_active': currentLocale === 'ru'}"
                @click="$i18n.setLocale('ru')"
              >
                {{ $t("hunger.header.languageRu") }}
              </div>
              <div class="text__border" />
              <div
                class="text__language text__language_en"
                :class="{'text__language_active': currentLocale !== 'ru'}"
                @click="$i18n.setLocale('en')"
              >
                {{ $t("hunger.header.languageEn") }}
              </div>
            </div>
            <div class="text__title">
              <div class="content__subtitle">
                {{ $t("hunger.header.restaraunt") }}
              </div>
              <div class="content__title">
                {{ $t("hunger.header.hungryPeople") }}
              </div>
              <div class="content__line" />
              <div class="content__buttons buttons">
                <custom-button
                  class="buttons__button"
                  mode="yellow"
                >
                  <a
                    href="#booking"
                    class="buttons__link"
                  >
                    {{ $t("hunger.header.bookTable") }}
                  </a>
                </custom-button>
                <custom-button
                  class="buttons__button"
                  mode="clear"
                >
                  <a
                    href="#events"
                    class="buttons__link"
                  >
                    {{ $t("hunger.header.explore") }}
                  </a>
                </custom-button>
              </div>
              <img
                src="~/static/wheel.svg"
                alt="Wheel"
                class="content__picture"
              >
              <div class="content__border">
                <div class="content__arrow">
                  <a
                    href="#menu"
                    class="content__down"
                  >
                    <div class="icon-chevron-down content__icon" />
                  </a>
                </div>
              </div>
            </div>
            <div class="wrapper__time wrapper__time_horizontal">
              {{ $t("hunger.book.monFri") }}
              {{ $t("hunger.book.monFriTime") }}
              {{ $t("hunger.book.satSun") }}
              {{ $t("hunger.book.satSunTimeHeader") }}
            </div>
            <div class="wrapper__social social wrapper__social_horizontal">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="social__link"
              >
                <div class="social__round">
                  <span class="icon-facebook social__icon" />
                </div>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                class="social__link"
              >
                <div class="social__round">
                  <span class="icon-twitter social__icon" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                class="social__link"
              >
                <div class="social__round">
                  <span class="icon-instagram social__icon" />
                </div>
              </a>
            </div>
          </div>
          <div class="wrapper__social social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="social__link"
            >
              <div class="social__round">
                <span class="icon-facebook social__icon" />
              </div>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              class="social__link"
            >
              <div class="social__round">
                <span class="icon-twitter social__icon" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="social__link"
            >
              <div class="social__round">
                <span class="icon-instagram social__icon" />
              </div>
            </a>
          </div>
          <div class="content__up up">
            <a
              href="#home"
              class="up__link"
            >
              <div class="icon-chevron-up up__icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: 'Header',
  directives: {
    ClickOutside,
  },
  data() {
    return {
      isOpenSideBar: false,
    };
  },
  computed: {
    panelLeft() {
      return [
        {
          title: this.$t('hunger.header.home'),
          link: '#home',
        },
        {
          title: this.$t('hunger.header.about'),
          link: '#about',
        },
        {
          title: this.$t('hunger.header.team'),
          link: '#team',
        },
        {
          title: this.$t('hunger.header.booking'),
          link: '#booking',
        },
      ];
    },
    panelRight() {
      return [
        {
          title: this.$t('hunger.header.menu'),
          link: '#menu',
        },
        {
          title: this.$t('hunger.header.galerie'),
          link: '#galerie',
        },
        {
          title: this.$t('hunger.header.events'),
          link: '#events',
        },
        {
          title: this.$t('hunger.header.contact'),
          link: '#contact',
        },
      ];
    },
    currentLocale() {
      return this.$i18n.locale;
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    openMenu() {
      this.isOpenSideBar = !this.isOpenSideBar;
    },
    handleScroll() {
      const obj = document.querySelector('.panel');
      const burger = document.querySelector('.content__burger');
      const button = document.querySelector('.up');
      if (window.pageYOffset > 200) {
        obj.classList.add('panel_fixed');
      } else {
        obj.classList.remove('panel_fixed');
      }
      if (window.pageYOffset > 150) {
        burger.classList.add('content__burger_fixed');
      } else {
        burger.classList.remove('content__burger_fixed');
      }
      if (window.pageYOffset > 500) {
        button.classList.add('up_fixed');
      } else {
        button.classList.remove('up_fixed');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header{
  &__content{
    background-image: url(static/header.svg);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    color: $white;
    padding: 0 10px;
  }
}
.burger{
  display: flex;
  align-items: center;
  justify-content: center;
  &__picture{
    z-index: 200;
  }
}
.content{
  &__sidebar{
    padding:40px;
      }
  &__picture{
    display: none;
  }
  &__burger{
    display: none;
    width: 80px;
    height: 80px;
    background-color: $black;
    border-radius: 50%;
    z-index: 100;
    padding: 30px 25px 25px 25px;
    border: 1px solid $yellow;
  }
  &__wrapper{
    display: flex;
    min-height: 787px;
    align-items: center;
  }
  &__panel{
    display: flex;
  }
  &__container{
    max-width: 1500px;
    margin: 0 auto;
  }
  &__subtitle{
    @include text-subtitle;
    text-align: center;
    letter-spacing: 0.5em;
  }
  &__title{
    text-align: center;
    width: 100%;
    font-size: 96px;
    color: #fff;
    letter-spacing: 0.06em;
    font-family: 'Banny', serif;
  }
  &__buttons{
    display: flex;
    max-width: 550px;
    margin: 0 auto;
    justify-content: space-between;
    margin-top: 40px;
  }
  &__arrow{
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background-color: $white;
    margin: 14px;
    :hover .content__icon{
      font-weight: 900;
      opacity: 1;
    }
  }
  &__down{
    text-decoration: none;
  }
  &__icon{
    font-size: 22px;
    color: $black;
    padding: 20px;
    opacity: 0.7;
  }
  &__border{
    width: 92px;
    height: 92px;
    border-radius: 50%;
    border: 1px solid $whiteClear;
    margin: 120px auto 0;
    }
    &__line{
    @include line;
  }
}
.burger{
  &__picture{
    z-index: 200;
  }
}
.panel{
  justify-content: space-around;
  color: $blue;
  &__item{
    @include text-subtitle;
    padding: 0 40px;
    &_ru{
      padding: 0 20px;
    }
  }
  &_fixed{
    max-width: 1500px;
    position: fixed;
    background-color: $black;
    z-index: 999999;
    border-radius: 0 0 30px 30px;
    border: 1px solid $white;
    animation-name:show_header;
    animation-duration: 1s;
    .panel{
    min-height: 50px!important;
    margin-left: 0;
     animation-name:show_header;
     animation-duration: 10s;
      &__picture{
        width: 300px;
        height: 50px;
        margin: 0 auto;
        top: 0;
      }
      &__left, .panel__right{
        display: flex;
        align-items: center;
        border-bottom: none;
      }
    }
  }
  &__picture{
    position: relative;
    top: 30px;
    left: 0;
    transition: 1s;
    &:hover{
      transform: rotate(90deg);
    }
  }
  &__left, .panel__right{
    display: flex;
    align-items: center;
    border-bottom: 1px solid $whiteClear;
     }
  &__link{
    text-decoration: none;
    color: $white;
    transition: 0.5s;
    &:hover{
      color: $yellow;
    }
  }
}
.text{
  &__change{
    display: flex;
    justify-content:flex-end;
    font-weight: 700;
    align-items: center;
    cursor: pointer;
  }
  &__border {
    width: 1px;
    height: 20px;
    border: 1px solid $white;
    margin: 0 10px;
  }
  &__language:hover{
    color: $yellow;
  }
  &__language{
    &_active{
      color: $yellow;
      font-size: 25px;
    }
  }
}
.buttons{
  &__button{
    max-width: 250px;
    &:hover .buttons__link{
      color: $yellow;
    }
  }
  &__link{
    text-decoration: none;
    color: $white;
    transition: 1s;
  }
}
.wrapper{
  &__social{
    margin: -160px 40px 0 0;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    &_horizontal{
      display: none;
    }
  }
  &__time{
    margin-right: 40px;
    transform: rotate(-90deg);
    transform-origin: 20% 100%;
    font-size: 12px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0em;
    opacity: 0.7;
    &_horizontal{
      display: none;
    }
  }
  &__text{
    margin: 0 40px;
 }
}
.social{
  &__round{
    width: 62px;
    height: 62px;
    border: 1px solid $whiteClear;;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:20px;
  }
  &__icon:before{
    color: $white;
    font-size: 22px;
    margin: auto;
    transition: 1s;
  }
  &__link{
    text-decoration: none;
    &:hover .social__icon:before{
      color: $yellow ;
    }
  }
}
.up{
  background-color: $white;
  position: fixed;
  top: 80%;
  right: 5%;
  border-radius: 50%;
  z-index: 200;
  border: 1px solid $black;
  transition: 1s;
  display: none;
  &_fixed{
    display: block;
  }
  &:hover .up__icon{
    opacity: 1;
  }
  &__icon{
    color: $black;
    opacity: 0.5;
    width: 62px;
    height: 62px;
    padding: 23px 20px 10px 23px;
  }
  &__link{
    text-decoration: none;
  }
}
.sidebar {
  padding: 40px;
  position: fixed;
  overflow: hidden;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(#000000, .9);
  z-index: 1400;
  white-space: nowrap;
  font-size: 0;
  transition: 1s;
  &:after {
    display: inline-block;
    width: 0;
    height: 100%;
    content: "";
  }
  &__body{
    white-space: normal;
    word-break: break-word;
    width: 100%;
    position: relative;
    max-width: 300px;
    text-align: left;
    transition: 10s;
    background: $white;
    border-radius: 0 10px 10px 0;
    padding: 40px;

  }
  &__btn {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50px;
    right: 30px;
  }
  &__link {
    text-decoration: none;
    font-size: 24px;
    line-height: 42px;
    letter-spacing: 0em;
    font-weight: 700;
    color: $yellow;
    text-shadow: $black 0 0 5px, $black 0px 0 5px,
    $black 0 1px 0, $black 0 -1px 0;
    &:hover{
      color: $red;
    }
  }
}
@keyframes show_header {
  0%{
    opacity: 0;
    top: -70px
  }
  100%{
    opacity: 0.5;
    top: 0;
  }
}
@include  _1400{
  .content{
    &__wrapper{
      justify-content: center;
    }
  }
  .panel{
    &_fixed{
    left: 5%;
    right: 5%;
    }
    &__item{
      padding: 0 20px;
    }
  }
  .wrapper{
    &__time{
      display: none;
      &_horizontal{
        display: block;
        transform: rotate(0deg);
        text-align: center;
        margin-top: 40px;
      }
    }
    &__social{
      margin: 0 auto;
      display: none;
      &_horizontal{
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    }
  }
  .social{
    &__round{
      margin: 20px;
    }
  }
}
@include _1199{
  .panel{
    &__item{
      &_ru{
        padding: 5px;
        font-size: 16px;
      }
    }
  }
}
@include _991{
  .panel{
    height: 100px;
    &_fixed{
      height: 50px;
    }
    &__item{
      padding: 0 10px;
      &_ru{
        font-size: 14px;
      }
    }
    &__picture{
      display: none;
    }
  }
  .content{
    &__subtitle{
      margin-top:80px;
    }
    &__picture{
      display: block;
      margin: 40px auto 0;
      transition: 1s;
      &:hover{
        transform: rotate(90deg);
      }
    }
    &__border{
      margin: 40px auto 0;
    }
  }
}
@include _767{
  .panel{
    display: none;
  }
  .wrapper{
    &__text{
      margin: 0 10px;
    }
  }
  .content{
    &__burger{
      display: block;
      &_fixed{
        position: fixed;
        animation-name:show_header;
        animation-duration: 0.1s;
      }
    }
  }
  .buttons{
    &__button{
      max-width: 200px;
    }
  }
  .content{
    &__title{
      font-size: 80px;
    }
  }
  .header{
    &__content{
      padding-top: 20px;
    }
  }
}

@include _480{
  .content{
    &__title{
      font-size: 60px;
    }
    &__burger{
      padding: 28px 0 0 23px;
    }
  }
  .buttons{
    &__button{
      max-width: 150px;
    }
  }
}

</style>
